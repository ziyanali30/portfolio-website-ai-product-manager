// Polymorphic Content System
// Controls all persona-specific content across the portfolio

export type Persona = "pm" | "builder" | "consultant"

// Get current persona from environment variable, default to "pm"
export function getPersona(): Persona {
  const persona = process.env.NEXT_PUBLIC_PERSONA as Persona
  if (persona === "builder" || persona === "consultant") {
    return persona
  }
  return "pm" // default
}

// =============================================================================
// SECTION 1: HERO CONTENT
// =============================================================================

export const heroContent = {
  pm: {
    headline: "I'm Ziyan, building AI systems that",
    typewriterWords: ["ship to production", "scale on cloud", "reduce latency", "automate workflows", "just work"],
    tagline: "GenAI Engineer specializing in LLM systems, RAG pipelines, multi-agent orchestration, and production-grade AI infrastructure on AWS and GCP.",
  },
  builder: {
    headline: "I'm Ziyan, engineering AI that",
    typewriterWords: ["works in production", "scales globally", "runs in <1s", "processes at scale"],
    tagline: "AI Engineer building RAG pipelines with 100K+ embeddings, multi-agent systems, and inference pipelines — from prototype to production.",
  },
  consultant: {
    headline: "I'm Ziyan, automating pipelines that",
    typewriterWords: ["eliminate manual work", "scale infinitely", "process documents", "never sleep"],
    tagline: "AI Engineer who builds document processing pipelines, retrieval systems, and backend services that significantly reduce manual workflows.",
  },
}

// =============================================================================
// SECTION 2: STICKY NOTES
// =============================================================================

export const stickyNotesContent = {
  pm: {
    left: [
      "If it's not in prod, it doesn't exist.",
      "Latency is the silent killer of user trust.",
      "RAG is easy. Good RAG is hard.",
    ],
    right: [
      "Context engineering > prompt engineering.",
      "Agents are just while loops with ambition.",
      "Trace everything. Assume nothing.",
    ],
  },
  builder: {
    left: [
      "If it's not in prod, it doesn't exist.",
      "Latency is the silent killer of user trust.",
      "RAG is easy. Good RAG is hard.",
    ],
    right: [
      "The best code is the code you don't write.",
      "Agents are just while loops with ambition.",
      "Trace everything. Assume nothing.",
    ],
  },
  consultant: {
    left: [
      "If it takes you 3 hours, it takes AI 30 seconds.",
      "Automate the boring. Focus on the billable.",
      "RAG is easy. Good RAG is hard.",
    ],
    right: [
      "ROI isn't optional. Measure everything.",
      "Context engineering > prompt engineering.",
      "Ship fast, iterate faster.",
    ],
  },
}

// =============================================================================
// SECTION 3: KPI SECTION
// =============================================================================

export const kpiContent = {
  pm: {
    header: "Engineering Benchmarks",
    subheader: "Performance metrics from production AI systems",
    quickStats: [
      { label: "Years Experience", value: "2+" },
      { label: "RAG Embeddings", value: "100K+" },
      { label: "API Latency Reduced", value: "30x" },
      { label: "LLM Providers Integrated", value: "5+" },
    ],
    impactKpis: [
      { value: "<1s", label: "API Latency Achieved" },
      { value: "100K+", label: "Embeddings in Production RAG" },
      { value: "30x", label: "Latency Reduction (30s to <1s)" },
      { value: "90%+", label: "Manual Work Eliminated" },
      { value: "3.43", label: "CGPA in BS Software Engineering" },
      { value: "5+", label: "End-to-End AI Systems Delivered" },
    ],
  },
  builder: {
    header: "Engineering Benchmarks",
    subheader: "Performance metrics from production systems",
    quickStats: [
      { label: "Years Experience", value: "2+" },
      { label: "RAG Embeddings", value: "100K+" },
      { label: "API Latency Reduced", value: "30x" },
      { label: "LLM Providers Integrated", value: "5+" },
    ],
    impactKpis: [
      { value: "<1s", label: "API Latency Achieved" },
      { value: "100K+", label: "Embeddings in Production RAG" },
      { value: "30x", label: "Latency Reduction (30s to <1s)" },
      { value: "90%+", label: "OCR Accuracy Improved" },
      { value: "Auto-scale", label: "Concurrent User Support" },
      { value: "5+", label: "End-to-End AI Systems Shipped" },
    ],
  },
  consultant: {
    header: "Impact Dashboard",
    subheader: "Measurable results from AI automation",
    quickStats: [
      { label: "Years Experience", value: "2+" },
      { label: "RAG Embeddings", value: "100K+" },
      { label: "Document Pipelines", value: "3+" },
      { label: "Cloud Platforms", value: "2" },
    ],
    impactKpis: [
      { value: "90%+", label: "Manual Work Eliminated" },
      { value: "<1s", label: "API Response Latency" },
      { value: "100K+", label: "Documents Processed at Scale" },
      { value: "30x", label: "Speed Improvement Achieved" },
      { value: "Auto-scale", label: "Concurrent Processing" },
      { value: "5+", label: "Production Systems Delivered" },
    ],
  },
}

// =============================================================================
// SECTION 4: PROCESS WHEEL
// =============================================================================

export const processContent = {
  pm: {
    title: "How I Build AI Systems",
    subtitle: "From prototype to production-grade infrastructure",
    steps: [
      {
        title: "Scope",
        description: "Understand constraints: latency budgets, cost limits, scaling requirements, and data characteristics.",
      },
      {
        title: "Design",
        description: "Choose the right architecture: which models, embedding strategies, chunking approaches, and orchestration patterns.",
      },
      {
        title: "Build",
        description: "Fast prototypes to validate before committing to production code. Iterate on retrieval quality and accuracy.",
      },
      {
        title: "Deploy",
        description: "Ship with observability on AWS/GCP. Docker, CI/CD pipelines, and event-driven architectures.",
      },
      {
        title: "Optimize",
        description: "Improve based on production data: reduce latency, cut costs, improve retrieval accuracy and reduce hallucinations.",
      },
    ],
  },
  builder: {
    title: "Production-Grade Architecture",
    subtitle: "Engineering for reliability, not demos",
    steps: [
      {
        title: "Scope",
        description: "Understand constraints: latency budgets, cost limits, scaling requirements, and data characteristics.",
      },
      {
        title: "Design",
        description: "Choose the right architecture: which models, where to cache, how to orchestrate agents.",
      },
      {
        title: "Build",
        description: "Fast prototypes to validate before committing to production code.",
      },
      {
        title: "Deploy",
        description: "Ship with observability. Trace every token, log every decision, monitor every edge case.",
      },
      {
        title: "Optimize",
        description: "Improve based on production data: reduce latency, cut costs, improve accuracy.",
      },
    ],
  },
  consultant: {
    title: "The AI Automation Sprint",
    subtitle: "From manual workflows to automated pipelines",
    steps: [
      {
        title: "Audit",
        description: "Map your workflows to find bottlenecks and tasks that eat time without creating value.",
      },
      {
        title: "Prioritize",
        description: "Fix the biggest pain first. ROI decides the order.",
      },
      {
        title: "Build",
        description: "Working pipeline in days, not weeks. You see results before committing.",
      },
      {
        title: "Deploy",
        description: "AI handles 95%, you approve edge cases. Human-in-the-loop only where it matters.",
      },
      {
        title: "Expand",
        description: "Continuous monitoring to grow scope, fix edge cases, and measure impact.",
      },
    ],
  },
}

// =============================================================================
// SECTION 5: PROJECT PRIORITY ORDERING
// =============================================================================

export const projectPriority = {
  pm: [
    "rag-knowledge-retrieval",
    "multi-agent-automation",
    "document-ai-ocr-pipeline",
  ],
  builder: [
    "rag-knowledge-retrieval",
    "multi-agent-automation",
    "document-ai-ocr-pipeline",
  ],
  consultant: [
    "document-ai-ocr-pipeline",
    "rag-knowledge-retrieval",
    "multi-agent-automation",
  ],
}

// =============================================================================
// SECTION 6: PROJECT PERSONA DESCRIPTIONS
// =============================================================================

export type ProjectPersonaContent = {
  title: string
  brief: string
  detailed: string
}

export const projectPersonaDescriptions: Record<string, Record<Persona, ProjectPersonaContent>> = {
  "rag-knowledge-retrieval": {
    pm: {
      title: "RAG-Based Knowledge Retrieval System",
      brief: "Scalable Retrieval-Augmented Generation system with 100K+ embeddings using LangChain, FastAPI, and Weaviate. Optimized retrieval accuracy with chunking strategies and context window management.",
      detailed: `Built a scalable RAG system with 100K+ embeddings for real-world document processing use cases. Implemented embedding pipelines using OpenAI embeddings and BGE (open-source) models, optimizing retrieval accuracy and cost efficiency.

Integrated open-source LLMs (LLaMA via Ollama / llama.cpp) for local inference and fallback strategies. Designed semantic retrieval using chunking strategies, context window optimization, and grounding techniques.

Improved query response time and answer relevance across large-scale document datasets. Deployed in production handling high-volume document ingestion.`,
    },
    builder: {
      title: "RAG-Based Knowledge Retrieval System",
      brief: "Production RAG pipeline with 100K+ embeddings, LangChain orchestration, FastAPI backend, and Weaviate vector database. Supports OpenAI and BGE embedding models with local LLM fallback via Ollama.",
      detailed: `Built an end-to-end RAG system handling 100K+ embeddings with LangChain for orchestration and Weaviate as the vector database.

Embedding pipeline: OpenAI text-embedding-3-small for production, BGE models for cost-efficient alternatives. Chunking strategies optimized for different document types.

Retrieval: Semantic search with context window optimization and grounding techniques to reduce hallucinations. Integrated open-source LLMs (LLaMA via Ollama / llama.cpp) for local inference and fallback. FastAPI backend with async processing for high throughput.`,
    },
    consultant: {
      title: "RAG-Based Knowledge Retrieval System",
      brief: "Enterprise knowledge retrieval system that transforms large document collections into instant-answer systems. Reduces information search time from hours to seconds with 100K+ document embeddings.",
      detailed: `Built a system that transforms existing document collections into a searchable knowledge base. Ask a question in natural language and get accurate answers with source citations.

Handles real-world datasets with high-volume document ingestion. Optimized for retrieval accuracy using chunking strategies and grounding techniques to minimize hallucinations.

Impact: What took hours of manual document searching now takes seconds. Deployed in production for real-world document processing use cases.`,
    },
  },

  "multi-agent-automation": {
    pm: {
      title: "Multi-Agent AI Automation System",
      brief: "Orchestrated multi-agent workflows using LangGraph and LangChain for complex task execution. Integrated LLMs with external systems via APIs, messaging, and automation platforms.",
      detailed: `Designed and orchestrated multi-agent workflows using LangGraph and LangChain for complex task execution across multiple services.

Built context-aware agent pipelines with tool-calling, memory handling, and state management. Integrated LLMs (OpenAI APIs) with external systems via APIs, messaging, and automation platforms.

Enabled automated execution of multi-step workflows across services, improving operational efficiency and reducing manual intervention.`,
    },
    builder: {
      title: "Multi-Agent AI Automation System",
      brief: "Multi-agent system built with LangGraph and LangChain featuring tool-calling, memory handling, and state management. Integrates OpenAI APIs with external platforms for automated multi-step workflows.",
      detailed: `Designed and built a multi-agent orchestration system using LangGraph for stateful agent workflows and LangChain for LLM integration.

Agent architecture: Context-aware pipelines with tool-calling capabilities, persistent memory handling, and state management across conversation turns.

Integration layer: Connected LLMs to external systems via REST APIs, messaging platforms, and automation services. Supports multiple LLM providers for fallback and cost optimization.`,
    },
    consultant: {
      title: "Multi-Agent AI Automation System",
      brief: "AI system that automates complex multi-step workflows across services. Multiple specialized agents handle different tasks, reducing manual intervention and improving operational efficiency.",
      detailed: `Built an AI system where multiple specialized agents work together to automate complex business workflows that previously required manual coordination.

Each agent handles a specific domain with tool-calling capabilities, and they coordinate through LangGraph's state management to complete multi-step tasks.

Impact: Automated execution of workflows that previously required manual intervention across multiple services and platforms.`,
    },
  },

  "document-ai-ocr-pipeline": {
    pm: {
      title: "Document AI & OCR Pipeline",
      brief: "End-to-end document processing system using AWS Lambda, SQS, S3, and OCR engines. Implements pipelines for document ingestion, classification, validation, and structured data extraction.",
      detailed: `Built an end-to-end document processing system using AWS Lambda, SQS, S3, and OCR engines for large-scale document automation.

Implemented pipelines for document ingestion, classification, validation, and structured data extraction. Applied confidence scoring, output validation, and hallucination mitigation techniques.

Designed scalable workflows using event-driven architecture and asynchronous processing. Deployed in production handling high-volume document ingestion with automated receipt processing.`,
    },
    builder: {
      title: "Document AI & OCR Pipeline",
      brief: "Event-driven document processing pipeline on AWS (Lambda, SQS, S3) with OCR engines. Confidence scoring, output validation, and async processing for high-volume document ingestion.",
      detailed: `Built an event-driven document processing system on AWS infrastructure.

Pipeline: S3 triggers Lambda functions for document ingestion, SQS queues for async processing, OCR engines for text extraction, classification and validation logic, structured data output.

Quality: Confidence scoring on extracted data, output validation against schemas, and hallucination mitigation techniques. Handles edge cases in numerical data extraction and complex document layouts.`,
    },
    consultant: {
      title: "Document AI & OCR Pipeline",
      brief: "Automated large-scale receipt and document processing, significantly reducing manual effort and improving processing speed. Built on AWS with event-driven architecture for scalable throughput.",
      detailed: `Automated document processing workflows that previously required manual data entry and validation.

The system handles document ingestion, classification, validation, and structured data extraction automatically. Human-in-the-loop systems for validation, correction, and exception handling ensure data quality.

Impact: Significantly reduced manual effort in receipt processing workflows. Scalable architecture handles high-volume asynchronous processing with confidence scoring and data integrity checks.`,
    },
  },
}

// =============================================================================
// SECTION 7: JOURNEY / TIMELINE
// =============================================================================

export const journeyContent = {
  pm: {
    "xperion": [
      "Designed AI-driven document processing pipelines using AWS Lambda, SQS, and event-driven architecture",
      "Built workflows for document ingestion, classification, validation, and structured data extraction",
      "Implemented context-aware retrieval and grounding techniques to improve output accuracy",
      "Developed human-in-the-loop systems for validation, correction, and exception handling",
      "Integrated AWS services including DynamoDB, S3, and OpenSearch for scalable data storage",
      "Automated large-scale receipt processing workflows, significantly reducing manual effort",
    ],
    "texagon": [
      "Built a large-scale RAG system with 100K+ embeddings, reducing query latency to <30 seconds",
      "Reduced API latency from ~30s to <1s through system optimization and edge deployment",
      "Built and orchestrated multi-agent AI systems using LangChain and LangGraph across multiple LLM providers",
      "Developed scalable backend services using FastAPI, PostgreSQL, and cloud platforms (AWS, GCP)",
      "Built inference pipelines and model serving workflows using APIs and open-source LLMs (Ollama, vLLM)",
      "Developed a scalable license plate recognition system supporting concurrent users with auto-scaling",
    ],
    "xavor": [
      "Developed computer vision pipelines for human pose estimation and motion tracking",
      "Implemented models for detecting COCO keypoints and body landmarks",
      "Built logic for calculating biomechanical metrics (e.g., joint angles)",
      "Optimized pipelines for real-time inference performance",
    ],
  },
  builder: {
    "xperion": [
      "Designed scalable document AI pipelines handling high-volume asynchronous processing on AWS",
      "Built event-driven workflows with Lambda, SQS, S3 for document ingestion, classification, and extraction",
      "Implemented context-aware retrieval and grounding techniques for improved output accuracy",
      "Applied confidence scoring, output validation, and data integrity checks for reliable AI outputs",
      "Integrated DynamoDB, S3, and OpenSearch for scalable storage and observability",
    ],
    "texagon": [
      "Built large-scale RAG system with 100K+ embeddings using LangChain, FastAPI, and Weaviate",
      "Reduced API latency from ~30s to <1s through optimization and edge deployment",
      "Orchestrated multi-agent systems using LangChain and LangGraph across multiple LLM providers",
      "Built inference pipelines using APIs and open-source LLMs (Ollama, vLLM, LLaMA)",
      "Deployed systems using Docker, CI/CD pipelines, and event-driven architectures",
      "Improved OCR accuracy and numerical data extraction reliability in document AI pipelines",
    ],
    "xavor": [
      "Developed computer vision pipelines for human pose estimation and motion tracking",
      "Implemented COCO keypoint detection and body landmark models",
      "Optimized pipelines for real-time inference performance",
    ],
  },
  consultant: {
    "xperion": [
      "Automated large-scale receipt processing workflows, significantly reducing manual effort",
      "Designed scalable document AI pipelines handling high-volume asynchronous processing",
      "Developed human-in-the-loop systems for validation, correction, and exception handling",
      "Applied confidence scoring and data integrity checks to ensure reliable AI outputs",
    ],
    "texagon": [
      "Built RAG system with 100K+ embeddings, reducing query latency and improving retrieval efficiency",
      "Reduced API latency 30x (30s to <1s) through system optimization and edge deployment",
      "Delivered multiple end-to-end AI systems independently and in small teams",
      "Integrated automation systems across APIs, messaging, voice (STT/TTS), and external platforms",
      "Developed scalable license plate recognition system supporting concurrent users with auto-scaling",
    ],
    "xavor": [
      "Developed computer vision pipelines for human pose estimation and motion tracking",
      "Optimized pipelines for real-time inference performance",
    ],
  },
}

// =============================================================================
// SECTION 8: SKILLS & STACK ORDERING
// =============================================================================

export const skillsOrder = {
  pm: [
    "Generative AI & LLM Systems",
    "Frameworks & Tools",
    "Backend & Cloud",
    "Systems & Infrastructure",
    "Machine Learning",
  ],
  builder: [
    "Generative AI & LLM Systems",
    "Frameworks & Tools",
    "Backend & Cloud",
    "Systems & Infrastructure",
    "Machine Learning",
  ],
  consultant: [
    "Generative AI & LLM Systems",
    "Backend & Cloud",
    "Systems & Infrastructure",
    "Frameworks & Tools",
    "Machine Learning",
  ],
}

export const techStackOrder = {
  pm: [
    "Frameworks & Tools",
    "Backend & Cloud",
    "Systems & Infrastructure",
  ],
  builder: [
    "Frameworks & Tools",
    "Backend & Cloud",
    "Systems & Infrastructure",
  ],
  consultant: [
    "Backend & Cloud",
    "Systems & Infrastructure",
    "Frameworks & Tools",
  ],
}

// =============================================================================
// SECTION 9: CONTACT & FOOTER
// =============================================================================

export const contactContent = {
  pm: {
    header: "Let's Build Something",
    subheader: "Looking to build production AI systems or need a GenAI engineer? Let's talk architecture.",
    calendlyCta: "Book a 30-minute technical deep-dive",
  },
  builder: {
    header: "Let's Build Something",
    subheader: "Looking for an AI engineer to build production-grade systems? Let's talk architecture.",
    calendlyCta: "Book a 30-minute technical deep-dive",
  },
  consultant: {
    header: "Let's Automate Your Workflows",
    subheader: "Ready to reduce manual work with AI pipelines? Let's discuss your use case.",
    calendlyCta: "Book a free 30-minute consultation",
  },
}

export const footerContent = {
  pm: {
    headline: "Ready to ship? Let's build production AI together.",
    subheadline: "I turn ideas into production systems — not just prototypes.",
  },
  builder: {
    headline: "Ready to ship? Let's build something incredible.",
    subheadline: "I turn ideas into production in weeks, not months.",
  },
  consultant: {
    headline: "Your AI pipeline is just one conversation away.",
    subheadline: "Let's stop doing manually what AI can automate.",
  },
}

// =============================================================================
// SECTION 10: TESTIMONIALS / WALL OF LOVE
// =============================================================================

type Testimonial = {
  avatar: string
  name: string
  title: string
  quote: string
  linkedin: string
}

export const testimonialsContent: Record<Persona, Testimonial[]> = {
  pm: [],
  builder: [],
  consultant: [],
}
