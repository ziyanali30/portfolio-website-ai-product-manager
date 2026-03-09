// Utility to read SSE stream from the Gemini API route

export interface StreamCallbacks {
  onChunk: (content: string) => void
  onDone: (suggestedQuestions: string[]) => void
  onError: (message: string) => void
}

export async function readSSEStream(response: Response, callbacks: StreamCallbacks) {
  const reader = response.body?.getReader()
  if (!reader) {
    callbacks.onError("No response stream available")
    return
  }

  const decoder = new TextDecoder()
  let buffer = ""

  while (true) {
    const { done, value } = await reader.read()
    if (done) break

    buffer += decoder.decode(value, { stream: true })

    // Process complete SSE events (separated by \n\n)
    const events = buffer.split("\n\n")
    // Keep the last incomplete chunk in buffer
    buffer = events.pop() || ""

    for (const event of events) {
      const line = event.trim()
      if (!line.startsWith("data: ")) continue

      try {
        const data = JSON.parse(line.slice(6))

        if (data.type === "chunk" && data.content) {
          callbacks.onChunk(data.content)
        } else if (data.type === "done") {
          callbacks.onDone(data.suggestedQuestions || [])
        } else if (data.type === "error") {
          callbacks.onError(data.message || "Unknown error")
        }
      } catch {
        // Skip malformed JSON
      }
    }
  }
}
