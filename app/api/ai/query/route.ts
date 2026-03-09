// app/api/ai/query/route.ts
import { NextRequest } from 'next/server'
import { GoogleGenerativeAI } from '@google/generative-ai'
import fs from 'fs'
import path from 'path'

// Cache the resume text so we only read it once
let cachedResumeText: string | null = null

function getResumeText(): string {
  if (cachedResumeText) return cachedResumeText

  // Try to read PDF using pdf-parse
  const resumePath = path.join(process.cwd(), 'documents', 'Ziyan_Ali_Murtaza_Resume.pdf')
  if (fs.existsSync(resumePath)) {
    // We'll use the inline text version since pdf-parse is async
    // and we want this to be fast
  }

  // Hardcoded resume content (from the actual PDF)
  cachedResumeText = `
Ziyan Ali Murtaza
AI Engineer | Generative AI | LLM Systems | Context Engineering
ziyanali6@gmail.com | (+92) 332-4974815 | Lahore, PK

SUMMARY
AI Engineer specializing in Generative AI, LLM systems, and context engineering, with hands-on experience building RAG pipelines, multi-agent systems, and production-grade AI infrastructure. Strong focus on retrieval optimization, latency reduction, and scalable backend systems on AWS and GCP. Proven track record of delivering AI solutions that significantly reduce manual workflows and improve system performance.

WORK EXPERIENCE

Texagon — AI Engineer (GenAI / Backend Systems) — Jan 2024 – Present — Lahore, PK
- Implemented retrieval optimization using embedding selection and chunking strategies, improving response relevance and reducing hallucinations in production
- Built and orchestrated multi-agent AI systems using LangChain and LangGraph across multiple LLM providers
- Developed scalable backend services using FastAPI, PostgreSQL, and cloud platforms (AWS, GCP)
- Implemented retrieval optimization and context window management to improve response relevance and reduce hallucinations
- Built inference pipelines and model serving workflows using APIs and open-source LLMs (Ollama, vLLM)
- Integrated automation systems across APIs, messaging, voice (STT/TTS), and external platforms
- Deployed systems using Docker, CI/CD pipelines, and event-driven architectures
Key Achievements:
- Built a large-scale RAG system with 100K+ embeddings, reducing query latency to <30 seconds and improving retrieval efficiency
- Reduced API latency from ~30s to <1s through system optimization and edge deployment
- Developed a scalable license plate recognition system supporting concurrent users with auto-scaling
- Improved OCR accuracy and numerical data extraction reliability in document AI pipelines
- Delivered multiple end-to-end AI systems independently and in small teams

Xperion — AI Context Engineer — Jan 2026 – Present — Remote
- Designed AI-driven document processing pipelines using AWS Lambda, SQS, and event-driven architecture
- Designed scalable document AI pipelines handling high-volume asynchronous processing workflows
- Built workflows for document ingestion, classification, validation, and structured data extraction
- Implemented context-aware retrieval and grounding techniques to improve output accuracy
- Developed human-in-the-loop systems for validation, correction, and exception handling
- Integrated AWS services including DynamoDB, S3, and OpenSearch for scalable data storage and observability
- Applied confidence scoring, output validation, and data integrity checks to ensure reliable AI outputs
Impact: Automated large-scale receipt processing workflows, significantly reducing manual effort and improving processing speed

Xavor Corporation — AI Intern — May 2024 – August 2024 — Lahore, PK
- Developed computer vision pipelines for human pose estimation and motion tracking
- Implemented models for detecting COCO keypoints and body landmarks
- Built logic for calculating biomechanical metrics (e.g., joint angles)
- Optimized pipelines for real-time inference performance

PROJECTS

RAG-Based Knowledge Retrieval System
- Built a scalable Retrieval-Augmented Generation (RAG) system with 100K+ embeddings using LangChain, FastAPI, and Weaviate (vector database)
- Implemented embedding pipelines using OpenAI embeddings and BGE (open-source) models, optimizing retrieval accuracy and cost efficiency
- Integrated open-source LLMs (LLaMA via Ollama / llama.cpp) for local inference and fallback strategies
- Designed semantic retrieval using chunking strategies, context window optimization, and grounding techniques
- Improved query response time and answer relevance across large-scale document datasets
- Deployed in production for real-world document processing use cases

Multi-Agent AI Automation System
- Designed and orchestrated multi-agent workflows using LangGraph and LangChain for complex task execution
- Integrated LLMs (OpenAI APIs) with external systems via APIs, messaging, and automation platforms
- Built context-aware agent pipelines with tool-calling, memory handling, and state management
- Enabled automated execution of multi-step workflows across services, improving operational efficiency

Document AI & OCR Pipeline
- Built an end-to-end document processing system using AWS Lambda, SQS, S3, and OCR engines
- Implemented pipelines for document ingestion, classification, validation, and structured data extraction
- Applied confidence scoring, output validation, and hallucination mitigation techniques to improve system reliability
- Designed scalable workflows using event-driven architecture and asynchronous processing

EDUCATION
University Of Central Punjab — BS, Software Engineering — October 2025 — Lahore, PK — CGPA: 3.43

SKILLS
Generative AI & LLM Systems: LLMs, RAG, Agentic Systems, Prompt Engineering, Context Engineering, Retrieval Optimization, Chunking Strategies, Embedding Optimization, Hallucination Mitigation, Token Efficiency, Knowledge Grounding, LLM Evaluation, Output Validation, Confidence Scoring
Frameworks & Tools: LangChain, LangGraph, LlamaIndex, OpenAI API, Open-source LLMs (Ollama, vLLM, LLaMA), Vector Databases (Weaviate)
Backend & Cloud: Python, FastAPI, REST APIs, PostgreSQL, DynamoDB, SQL/NoSQL, AWS (Lambda, SQS, S3), GCP
Systems & Infrastructure: Distributed Systems, Event-Driven Architecture, CI/CD (GitHub Actions), Docker, Model Serving, Inference Pipelines, Latency Optimization
Machine Learning: Transformers, Fine-tuning (LoRA/PEFT), Embeddings
`
  return cachedResumeText
}

const SYSTEM_PROMPT = `You are Ziyan Ali Murtaza's AI companion on his portfolio website. You help visitors learn about Ziyan's professional background, skills, projects, and journey.

RULES:
- Speak in FIRST PERSON as Ziyan ("I built this", "My experience at Texagon...")
- Be conversational, friendly, and natural
- Keep responses concise (2-4 paragraphs max)
- Use bullet points for lists
- If you don't know something, say so honestly
- NEVER make up information not in the resume
- NEVER mention "resume", "context", "document" — just speak naturally from experience
- Prioritize recent work (2024-2026)

RESUME/BACKGROUND:
`

function getGemini() {
  const key = process.env.GEMINI_API_KEY
  if (!key) {
    throw new Error('Please define the GEMINI_API_KEY environment variable in .env.local')
  }
  return new GoogleGenerativeAI(key)
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { query, conversationHistory } = body

    if (!query || typeof query !== 'string' || query.trim().length === 0) {
      return new Response(JSON.stringify({ error: 'Query is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    if (query.length > 1000) {
      return new Response(JSON.stringify({ error: 'Query too long (max 1000 chars)' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    console.log(`[Query API] Processing: "${query.substring(0, 80)}..."`)

    const genAI = getGemini()
    const resumeText = getResumeText()
    const model = genAI.getGenerativeModel({
      model: 'gemini-2.5-flash',
      systemInstruction: { parts: [{ text: SYSTEM_PROMPT + resumeText }] },
    })

    // Build conversation history for Gemini
    const history: Array<{ role: 'user' | 'model'; parts: Array<{ text: string }> }> = []

    if (conversationHistory && Array.isArray(conversationHistory)) {
      for (const msg of conversationHistory) {
        if (msg && typeof msg === 'object' && msg.content) {
          const role = msg.role === 'assistant' ? 'model' : 'user'
          history.push({ role, parts: [{ text: String(msg.content) }] })
        }
      }
    }

    const chat = model.startChat({ history })

    // Stream the response
    const result = await chat.sendMessageStream(query)

    // Create a ReadableStream that sends SSE
    const encoder = new TextEncoder()
    const stream = new ReadableStream({
      async start(controller) {
        try {
          let fullText = ''
          for await (const chunk of result.stream) {
            const text = chunk.text()
            if (text) {
              fullText += text
              controller.enqueue(
                encoder.encode(`data: ${JSON.stringify({ type: 'chunk', content: text })}\n\n`)
              )
            }
          }
          // Send the final message with suggested questions
          const suggestedQuestions = generateSuggestedQuestions(query, fullText)
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'done', suggestedQuestions })}\n\n`
            )
          )
          controller.close()
        } catch (error) {
          console.error('[Stream] Error:', error)
          controller.enqueue(
            encoder.encode(
              `data: ${JSON.stringify({ type: 'error', message: 'Failed to generate response' })}\n\n`
            )
          )
          controller.close()
        }
      },
    })

    return new Response(stream, {
      headers: {
        'Content-Type': 'text/event-stream',
        'Cache-Control': 'no-cache',
        Connection: 'keep-alive',
      },
    })
  } catch (error) {
    console.error('[Query API] Error:', error)
    const message = error instanceof Error ? error.message : 'Unknown error'
    return new Response(JSON.stringify({ error: 'Error processing query', message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    })
  }
}

function generateSuggestedQuestions(query: string, answer: string): string[] {
  const lower = (query + ' ' + answer).toLowerCase()

  if (lower.includes('rag') || lower.includes('retrieval') || lower.includes('embedding')) {
    return [
      "What embedding models did you use?",
      "How did you optimize retrieval accuracy?",
      "Tell me about your chunking strategies",
    ]
  }
  if (lower.includes('agent') || lower.includes('langchain') || lower.includes('langgraph')) {
    return [
      "How do your agents handle state management?",
      "What LLM providers do you integrate with?",
      "Tell me about a complex workflow you automated",
    ]
  }
  if (lower.includes('document') || lower.includes('ocr') || lower.includes('pipeline')) {
    return [
      "How do you handle confidence scoring?",
      "What AWS services power your pipelines?",
      "How do you mitigate hallucinations in document AI?",
    ]
  }
  if (lower.includes('texagon') || lower.includes('xperion') || lower.includes('xavor')) {
    return [
      "What were your key achievements there?",
      "What technologies did you work with?",
      "How did you reduce API latency?",
    ]
  }
  return [
    "What's your experience with RAG systems?",
    "Tell me about your work at Texagon",
    "What AI projects have you built?",
  ]
}

export async function OPTIONS() {
  return new Response(null, {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
