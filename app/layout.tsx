import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";
import { Toaster } from "sonner";

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.ziyanalim.com";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: "Ziyan Ali Murtaza - GenAI Engineer",
  description:
    "GenAI Engineer specializing in LLM systems, RAG pipelines, multi-agent systems, and production-grade AI infrastructure.",
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: BASE_URL,
    title: "Ziyan Ali Murtaza - GenAI Engineer",
    description:
      "GenAI Engineer specializing in LLM systems, RAG pipelines, multi-agent systems, and production-grade AI infrastructure.",
    siteName: "Ziyan Ali Murtaza",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ziyan Ali Murtaza - GenAI Engineer",
    description:
      "GenAI Engineer specializing in LLM systems, RAG pipelines, multi-agent systems, and production-grade AI infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ziyan Ali Murtaza",
  jobTitle: "GenAI Engineer",
  url: BASE_URL,
  description:
    "GenAI Engineer specializing in LLM systems, RAG pipelines, multi-agent systems, and production-grade AI infrastructure.",
  knowsAbout: [
    "Large Language Models",
    "RAG Pipelines",
    "Multi-Agent Systems",
    "AI Infrastructure",
    "Vector Databases",
    "Conversational AI",
    "Machine Learning",
    "Python",
    "TypeScript",
    "Next.js",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://assets.calendly.com"
          crossOrigin=""
        />
        <link rel="preconnect" href="https://calendly.com" crossOrigin="" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}
        suppressHydrationWarning
      >
        <Suspense fallback={<div>Loading...</div>}>
          <ThemeProvider>{children}</ThemeProvider>
          <Analytics />
        </Suspense>
        <Toaster
          position="top-center"
          richColors
          closeButton
          toastOptions={{
            duration: 3500,
            classNames: {
              toast:
                "rounded-xl border bg-card/95 shadow-2xl backdrop-blur-md px-5 py-4 text-base",
              title: "font-semibold",
              description: "text-sm opacity-90",
              actionButton: "rounded-md",
              cancelButton: "rounded-md",
            },
          }}
        />
      </body>
    </html>
  );
}
