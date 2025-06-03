import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { HelpCircle, Code, Terminal, Database } from "lucide-react"

const faqData = [
  {
    question: "How is Arnocodes DSA Sheet different from other sheets?",
    answer:
      "Most sheets are just long lists of problems with no clear learning path. Arnocodes is structured for progressive learning—starting from the basics and moving to advanced topics without redundancy. Every problem serves a purpose, ensuring you don't just solve problems but actually understand DSA",
  },
  {
    question: " Will solving this sheet be enough for interviews?",
    answer:
      "This sheet covers all core concepts with so many problems, ensuring you grasp every essential topic. Once completed, your focus should be on tackling new variations and improving problem-solving speed, but concept-wise, you'll be well-prepared for any interview.",
  },
  {
    question: "Is this only for Java programmers?",
    answer:
      "The sheet is optimized for Java, but DSA concepts remain language-independent. If you're comfortable in C++, Python, or any other language, you can still follow the sheet while writing code in your preferred language.",
  },
  {
    question: "What's the best way to follow this sheet?",
    answer:
      "Follow the problems in sequence,they are arranged for gradual concept-building. Avoid skipping topics, take notes, and implement variations to deepen your understanding. Think of it as a structured roadmap, not just a checklist.",
  },
  {
    question: "Is Arnocodes free?",
    answer:
      "Yes! 100% free. No paywalls, no hidden charges ,just quality learning for everyone. If it helps you, sharing it with others would be the best way to support our work!",
  },
  {
    question: "Do you offer any mentorship or career guidance programs?",
    answer: "Yes, we offer personalized mentorship in mentorship section",
  },
]

const floatingIcons = [HelpCircle, Code, Terminal, Database]

export function FAQSection() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${10 + index * 25}%`,
              top: `${15 + index * 18}%`,
              animationDelay: `${index * 1.3}s`,
            }}
          >
            <Icon className="w-16 h-16 md:w-20 md:h-20 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">FAQ_DATABASE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 sm:mb-6 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            Frequently Asked Questions
            <span className="text-arno-blue-400">/&gt;</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-400 text-center font-mono">// Quick answers to common queries</p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-arno-dark-800/30 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 p-4 sm:p-6 md:p-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 to-purple-500/5"></div>

            <Accordion type="single" collapsible className="space-y-3 sm:space-y-4 relative z-10">
              {faqData.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-arno-dark-600/50 rounded-lg bg-arno-dark-700/30 backdrop-blur-sm hover:border-arno-blue-400/30 transition-colors duration-300 overflow-hidden"
                >
                  <AccordionTrigger className="flex justify-between py-3 sm:py-4 px-4 sm:px-6 text-sm sm:text-base md:text-lg hover:text-arno-blue-400 transition-colors duration-300 font-mono [&[data-state=open]]:text-arno-blue-400">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
                      <span className="text-left">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="py-3 sm:py-4 px-4 sm:px-6 text-gray-400 text-sm sm:text-base leading-relaxed border-t border-arno-dark-600/30">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <span className="text-green-400 font-mono text-xs sm:text-sm mt-0.5">//</span>
                      <span>{item.answer}</span>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {/* Tech Footer */}
            <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-arno-blue-400/20 text-center">
              <p className="text-xs sm:text-sm text-gray-500 font-mono">
                // Still have questions? Contact our support team
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Circuit Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/30 to-transparent"></div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-arno-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </section>
  )
}
