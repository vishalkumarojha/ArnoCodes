"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { LectureTable } from "./lecture-table"

interface Lesson {
  name: string
  hasArticle: boolean
  hasVideo: boolean
  hasPractice: boolean
  difficulty: string
}

interface Lecture {
  title: string
  lessons: Lesson[]
}

interface Step {
  title: string
  count: string
  lectures: Lecture[]
}

interface ContentProps {
  steps: Step[]
  sheetId?: string
}

export function CourseContent({ steps, sheetId = "0" }: ContentProps) {
  return (
    <Accordion type="single" collapsible className="space-y-4">
      {steps.map((step, stepIndex) => (
        <AccordionItem
          key={stepIndex}
          value={`step-${stepIndex}`}
          className="border border-arno-dark-600 rounded-lg overflow-hidden"
        >
          <AccordionTrigger className="px-6 py-4 bg-arno-dark-800 hover:bg-arno-dark-700 text-white">
            <div className="flex items-center justify-between w-full">
              <span className="font-medium">{step.title}</span>
              <span className="text-sm text-gray-400">{step.count} lessons</span>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <div className="bg-arno-dark-800 p-4">
              {step.lectures.map((lecture, lectureIndex) => (
                <Accordion key={lectureIndex} type="single" collapsible className="mb-4">
                  <AccordionItem value={`lecture-${lectureIndex}`} className="border-b border-arno-dark-600">
                    <AccordionTrigger className="hover:bg-arno-dark-700 text-white py-2">
                      <div className="flex items-center justify-between w-full">
                        <span>{lecture.title}</span>
                        <span className="text-sm text-gray-400">{lecture.lessons.length} lessons</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <LectureTable
                        lessons={lecture.lessons}
                        stepIndex={stepIndex}
                        lectureIndex={lectureIndex}
                        sheetId={sheetId}
                      />
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

