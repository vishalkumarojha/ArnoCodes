import { Clock, Code, Zap, Terminal, Database, Cpu } from "lucide-react"

interface ComingSoonSheetProps {
  title: string
}

export function ComingSoonSheet({ title }: ComingSoonSheetProps) {
  const techIcons = [Code, Terminal, Database, Cpu]

  return (
    <div className="max-w-5xl mx-auto relative">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${20 + index * 20}%`,
              top: `${15 + index * 15}%`,
              animationDelay: `${index * 0.8}s`,
            }}
          >
            <Icon className="w-12 h-12 md:w-16 md:h-16 text-arno-blue-400" />
          </div>
        ))}
      </div>

      <div className="mb-6 sm:mb-8 relative z-10">
        <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
          <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">SHEET_LOADING</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 font-mono">{title}</h1>
      </div>

      <div className="flex flex-col items-center justify-center py-12 sm:py-20 relative z-10">
        {/* Animated Tech Display */}
        <div className="relative mb-6 sm:mb-8">
          <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-arno-blue-400/20 via-purple-400/20 to-cyan-400/20 flex items-center justify-center backdrop-blur-sm border border-arno-blue-400/30 shadow-2xl shadow-arno-blue-400/20">
            <Clock className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-arno-blue-400 animate-pulse" />
          </div>

          {/* Orbital rings */}
          <div
            className="absolute inset-0 rounded-full border border-arno-blue-400/20 animate-spin"
            style={{ animationDuration: "8s" }}
          />
          <div
            className="absolute inset-2 rounded-full border border-purple-400/20 animate-spin"
            style={{ animationDuration: "6s", animationDirection: "reverse" }}
          />

          {/* Floating particles */}
          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-yellow-400 rounded-full animate-bounce"></div>
          <div className="absolute -bottom-1 -left-1 sm:-bottom-2 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
        </div>

        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4 font-mono">
          <span className="text-arno-blue-400">&lt;</span>
          COMPILING
          <span className="text-arno-blue-400">/&gt;</span>
        </h2>

        <div className="bg-arno-dark-800/50 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 p-4 sm:p-6 max-w-md mx-auto mb-6 sm:mb-8">
          <p className="text-gray-300 text-center text-sm sm:text-base font-mono mb-4">
            Advanced problem sets are being engineered...
          </p>

          {/* Progress indicators */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
              <span className="text-gray-400">Generating algorithms...</span>
              <span className="text-arno-blue-400">78%</span>
            </div>
            <div className="w-full bg-arno-dark-600 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-arno-blue-400 to-purple-400 h-full rounded-full animate-pulse"
                style={{ width: "78%" }}
              ></div>
            </div>
          </div>

          <div className="space-y-3 mt-4">
            <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
              <span className="text-gray-400">Optimizing difficulty curve...</span>
              <span className="text-green-400">85%</span>
            </div>
            <div className="w-full bg-arno-dark-600 rounded-full h-1.5">
              <div
                className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full animate-pulse"
                style={{ width: "85%" }}
              ></div>
            </div>
          </div>
        </div>

        {/* Features Preview */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8 w-full max-w-2xl">
          {[
            { icon: Code, title: "Smart Problems", desc: "AI-curated" },
            { icon: Zap, title: "Real-time Hints", desc: "Adaptive help" },
            { icon: Terminal, title: "Code Editor", desc: "Built-in IDE" },
            { icon: Database, title: "Progress Track", desc: "Analytics" },
          ].map((feature, index) => (
            <div
              key={index}
              className="bg-arno-dark-800/30 backdrop-blur-lg rounded-lg p-2 sm:p-3 border border-arno-blue-400/20 text-center group hover:border-arno-blue-400/40 transition-colors"
            >
              <feature.icon className="w-4 h-4 sm:w-6 sm:h-6 text-arno-blue-400 mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform" />
              <h3 className="text-white font-bold text-xs sm:text-sm font-mono mb-0.5 sm:mb-1">{feature.title}</h3>
              <p className="text-gray-400 text-xs">{feature.desc}</p>
            </div>
          ))}
        </div>

        <p className="text-gray-400 text-xs sm:text-sm text-center max-w-md font-mono">
          // Stay tuned for the most comprehensive problem-solving experience
        </p>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 sm:w-1 sm:h-1 bg-arno-blue-400 rounded-full animate-pulse opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}
