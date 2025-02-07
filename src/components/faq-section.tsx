import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqData = [
  {
    question: "How is Arnocodes DSA Sheet different from other sheets?",
    answer: "Most sheets are just long lists of problems with no clear learning path. Arnocodes is structured for progressive learning—starting from the basics and moving to advanced topics without redundancy. Every problem serves a purpose, ensuring you don’t just solve problems but actually understand DSA",
  },
  {
    question: " Will solving this sheet be enough for interviews?",
    answer:
      "This sheet covers all core concepts with so many problems, ensuring you grasp every essential topic. Once completed, your focus should be on tackling new variations and improving problem-solving speed, but concept-wise, you’ll be well-prepared for any interview.",
  },
  {
    question: "Is this only for Java programmers?",
    answer: "The sheet is optimized for Java, but DSA concepts remain language-independent. If you're comfortable in C++, Python, or any other language, you can still follow the sheet while writing code in your preferred language.",
  },
  {
    question: "What’s the best way to follow this sheet?",
    answer: "Follow the problems in sequence,they are arranged for gradual concept-building. Avoid skipping topics, take notes, and implement variations to deepen your understanding. Think of it as a structured roadmap, not just a checklist.",
  },
  {
    question: "Is Arnocodes free?",
    answer: "Yes! 100% free. No paywalls, no hidden charges ,just quality learning for everyone. If it helps you, sharing it with others would be the best way to support our work!",
  },
  {
    question: "Do you offer any mentorship or career guidance programs?",
    answer: "Yes, we offer personalized mentorship in mentorship section",
  },
]

export function FAQSection() {
  return (
    <section className="py-20 bg-arno-dark-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-arno-dark-600">
                <AccordionTrigger className="flex justify-between py-4 text-lg hover:text-red-500">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="py-4 text-gray-400">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}

