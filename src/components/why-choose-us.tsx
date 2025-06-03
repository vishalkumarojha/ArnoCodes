import { Card } from "@/components/ui/card"
import { Code, Zap, Target, Terminal, Database, Cpu } from "lucide-react"

const whyChooseUs = [
  {
    number: "01",
    title: "The Perfect Blend of Theory & Practice",
    description:
      'Most sheets either overload you with theory or drown you in endless problems. Arnocodes strikes the perfect balance between concise explanations and must-solve problems, so you understand the "why" behind every concept.',
    icon: Code,
    color: "arno-blue-400",
  },
  {
    number: "02",
    title: "No More 'Where Do I Start?' Confusion",
    description:
      "Beginners often struggle with which problem to solve first or which topic to focus on. Our sheet provides a clear, progressive path, ensuring you build strong fundamentals before tackling advanced problems.",
    icon: Target,
    color: "green-400",
  },
  {
    number: "03",
    title: "Beyond Just DSA – Real-World Application",
    description:
      "DSA is not just about solving problems but applying concepts in real-world scenarios. Our sheet integrates mini-projects, debugging techniques, and optimization tricks to help you ace both interviews and development.",
    icon: Zap,
    color: "purple-400",
  },
]

const floatingIcons = [Terminal, Database, Cpu]

export function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-arno-dark-800 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${15 + index * 35}%`,
              top: `${20 + index * 15}%`,
              animationDelay: `${index * 1.5}s`,
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
          <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-700/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">WHY_CHOOSE_US</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            Why choose us?
            <span className="text-arno-blue-400">/&gt;</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 text-center font-mono">
            // Unlock Your Potential with Our Comprehensive Learning Approach
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {whyChooseUs.map((item, index) => {
            const Icon = item.icon
            return (
              <Card
                key={index}
                className="bg-arno-dark-700/50 backdrop-blur-lg border-arno-blue-400/20 hover:border-arno-blue-400/50 p-4 sm:p-6 transition-all duration-500 group relative overflow-hidden hover:-translate-y-1 hover:shadow-2xl hover:shadow-arno-blue-400/10"
              >
                {/* Card Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Tech Corner */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

                {/* Status Indicator */}
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-arno-blue-400 font-mono">
                      {item.number}
                    </div>
                    <Icon
                      className={`w-6 h-6 sm:w-8 sm:h-8 text-${item.color} group-hover:scale-110 transition-transform duration-300`}
                    />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-red-500 mb-3 sm:mb-4 font-mono group-hover:text-arno-blue-400 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 text-sm sm:text-base leading-relaxed">
                    {item.description}
                  </p>

                  {/* Tech Footer */}
                  <div className="mt-4 pt-3 sm:pt-4 border-t border-arno-blue-400/20">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-gray-500">// FEATURE_{item.number}</span>
                      <div className="w-2 h-2 bg-arno-blue-400 rounded-full group-hover:animate-ping"></div>
                    </div>
                  </div>
                </div>

                {/* Bottom Tech Line */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
              </Card>
            )
          })}
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
