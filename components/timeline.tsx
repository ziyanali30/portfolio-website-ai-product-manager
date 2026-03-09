"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from "lucide-react"
import { AnimatedCard } from "@/components/animations/animated-card"
import { ScrollReveal } from "@/components/animations/scroll-reveal"
import { highlightMetrics } from "@/lib/utils/highlight-metrics"
import { journeyContent, getPersona } from "@/lib/content-data"

type TimelineItem = {
  title: string
  company: string
  date: string
  roleId: keyof typeof journeyContent.pm
}

const getTimelineItems = (_persona: string): TimelineItem[] => [
  {
    title: "AI Context Engineer",
    company: "Xperion (Remote)",
    date: "Jan 2026 – Present",
    roleId: "xperion",
  },
  {
    title: "AI Engineer (GenAI / Backend Systems)",
    company: "Texagon",
    date: "Jan 2024 – Present",
    roleId: "texagon",
  },
  {
    title: "AI Intern",
    company: "Xavor Corporation",
    date: "May 2024 – Aug 2024",
    roleId: "xavor",
  },
]

export function Timeline() {
  const persona = getPersona()
  const personaJourney = journeyContent[persona]
  const timelineItems = getTimelineItems(persona)
  
  const [isExpanded, setIsExpanded] = useState(false)
  const visibleItems = isExpanded ? timelineItems : timelineItems.slice(0, 2)

  return (
    <section id="journey" className="py-20 px-4 bg-muted/50 dark:bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal variant="fadeInUp" delay={0.2}>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Journey</h2>
            <p className="text-lg text-muted-foreground">Building production AI systems from day one</p>
          </div>
        </ScrollReveal>

        <div className="space-y-8">
          {visibleItems.map((item, index) => (
            <ScrollReveal
              key={index}
              variant={index % 2 === 0 ? "fadeInLeft" : "fadeInRight"}
              delay={index * 0.15}
            >
              <div className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background ring-4 ring-primary/20"></div>
                  {index < visibleItems.length - 1 && <div className="w-0.5 flex-1 bg-border mt-4"></div>}
                </div>

                <div className="flex-1 pb-8">
                  <AnimatedCard
                    variant="all"
                    className="bg-card rounded-lg p-6 border"
                  >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-primary font-medium">{item.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded w-fit">
                      {item.date}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {personaJourney[item.roleId].map((achievement, i) => (
                      <li key={i} className="text-muted-foreground leading-relaxed flex items-start gap-3">
                        <span className="text-primary mt-1 flex-shrink-0 text-lg leading-none">•</span>
                        <span className="flex-1">{highlightMetrics(achievement)}</span>
                      </li>
                    ))}
                  </ul>
                  </AnimatedCard>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal variant="fadeInUp" delay={0.4}>
          <div className="flex justify-center mt-12">
            <Button
              onClick={() => setIsExpanded(!isExpanded)}
              size="lg"
              className="gap-2"
            >
            {isExpanded ? (
              <>
                Show Less
                <ChevronUp className="w-4 h-4" />
              </>
            ) : (
              <>
                View Full Journey
                <ChevronDown className="w-4 h-4" />
              </>
            )}
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
