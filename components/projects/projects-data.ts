import type { Project } from "./types"

export const projectsData: Project[] = [
  {
    id: "rag-knowledge-retrieval",
    slug: "rag-knowledge-retrieval",
    title: "RAG-Based Knowledge Retrieval System",
    image: "projects/rag-knowledge",
    imageAlt: "RAG-Based Knowledge Retrieval System with 100K+ Embeddings",
    briefDescription:
      "Built a scalable Retrieval-Augmented Generation (RAG) system with 100K+ embeddings using LangChain, FastAPI, and Weaviate. Optimized retrieval accuracy with embedding pipelines, chunking strategies, and context window management.",
    problem:
      "Organizations needed to search and retrieve information from large document collections quickly and accurately, but traditional keyword search failed to understand context and meaning.",
    detailedDescription:
      "Built a scalable RAG system with 100K+ embeddings for real-world document processing use cases. Implemented embedding pipelines using OpenAI embeddings and BGE (open-source) models, optimizing retrieval accuracy and cost efficiency.\n\nIntegrated open-source LLMs (LLaMA via Ollama / llama.cpp) for local inference and fallback strategies. Designed semantic retrieval using chunking strategies, context window optimization, and grounding techniques to minimize hallucinations.",
    outcomeBullets: [
      "100K+ embeddings indexed and searchable in production",
      "Improved query response time across large-scale document datasets",
      "Reduced hallucinations through grounding techniques and context optimization",
      "Deployed in production handling high-volume document ingestion",
    ],
    technologies: [
      "LangChain",
      "FastAPI",
      "Weaviate",
      "OpenAI Embeddings",
      "BGE Models",
      "Ollama",
      "llama.cpp",
      "Python",
    ],
    status: "Active",
    statusColor: "green",
    isFeatured: true,
    kpi: "100K+",
    kpiLabel: "Embeddings",
    kpiValue: "Production RAG system",
    demoUrl: "",
    youtubeUrl: "",
  },
  {
    id: "multi-agent-automation",
    slug: "multi-agent-automation",
    title: "Multi-Agent AI Automation System",
    image: "projects/multi-agent",
    imageAlt: "Multi-Agent AI Automation System with LangGraph",
    briefDescription:
      "Designed and orchestrated multi-agent workflows using LangGraph and LangChain for complex task execution. Integrated LLMs with external systems via APIs, messaging, and automation platforms.",
    problem:
      "Complex business workflows required manual coordination across multiple services and platforms, creating bottlenecks and errors in multi-step processes.",
    detailedDescription:
      "Designed and orchestrated multi-agent workflows using LangGraph and LangChain for complex task execution across multiple services. Built context-aware agent pipelines with tool-calling, memory handling, and state management.\n\nIntegrated LLMs (OpenAI APIs) with external systems via REST APIs, messaging platforms, and automation services. Supports multiple LLM providers for fallback and cost optimization.",
    outcomeBullets: [
      "Automated multi-step workflows across multiple services",
      "Context-aware agents with tool-calling and memory handling",
      "Integrated with multiple LLM providers for cost optimization",
      "Reduced manual intervention in complex business processes",
    ],
    technologies: [
      "LangGraph",
      "LangChain",
      "OpenAI API",
      "Python",
      "FastAPI",
      "REST APIs",
    ],
    status: "Active",
    statusColor: "green",
    isFeatured: true,
    kpi: "Multi-Agent",
    kpiLabel: "Orchestration",
    kpiValue: "Automated workflows",
    demoUrl: "",
    youtubeUrl: "",
  },
  {
    id: "document-ai-ocr-pipeline",
    slug: "document-ai-ocr-pipeline",
    title: "Document AI & OCR Pipeline",
    image: "projects/document-ai",
    imageAlt: "Document AI and OCR Processing Pipeline on AWS",
    briefDescription:
      "Built an end-to-end document processing system using AWS Lambda, SQS, S3, and OCR engines. Implements pipelines for document ingestion, classification, validation, and structured data extraction at scale.",
    problem:
      "Large-scale document processing required manual data entry and validation, creating bottlenecks in receipt processing and document handling workflows.",
    detailedDescription:
      "Built an end-to-end document processing system using AWS Lambda, SQS, S3, and OCR engines for large-scale document automation. Implemented pipelines for document ingestion, classification, validation, and structured data extraction.\n\nApplied confidence scoring, output validation, and hallucination mitigation techniques to improve system reliability. Designed scalable workflows using event-driven architecture and asynchronous processing.",
    outcomeBullets: [
      "Automated large-scale receipt processing workflows",
      "Significantly reduced manual effort and improved processing speed",
      "Confidence scoring and output validation for reliable outputs",
      "Scalable event-driven architecture handling high-volume ingestion",
    ],
    technologies: [
      "AWS Lambda",
      "SQS",
      "S3",
      "DynamoDB",
      "OpenSearch",
      "OCR",
      "Python",
      "Event-Driven Architecture",
    ],
    status: "Active",
    statusColor: "green",
    isFeatured: true,
    kpi: "90%+",
    kpiLabel: "Manual Work Reduced",
    kpiValue: "Automated document processing",
    demoUrl: "",
    youtubeUrl: "",
  },
]
