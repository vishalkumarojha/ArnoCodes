import { Clock, Trophy, Zap, Code, Users, Award, Target, Terminal, Cpu } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CompetitionsPage() {
  const techIcons = [Trophy, Code, Zap, Target, Award, Users, Terminal, Cpu]

  return (
    <div className="flex-1 bg-arno-dark-900 relative overflow-hidden min-h-screen">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${10 + index * 12}%`,
              top: `${15 + index * 10}%`,
              animationDelay: `${index * 0.7}s`,
            }}
          >
            <Icon className="w-8 h-8 md:w-16 md:h-16 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">COMPETITION_MODE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            BATTLE_ARENA
            <span className="text-arno-blue-400">/&gt;</span>
          </h1>

          <p className="text-gray-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto font-mono mb-8">
            // Where legends are forged through code and competition
          </p>
        </div>

        {/* Coming Soon Main Display */}
        <div className="flex flex-col items-center justify-center py-12 md:py-20">
          {/* Animated Icon with Tech Effects */}
          <div className="relative mb-8">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-arno-blue-400/20 via-purple-400/20 to-cyan-400/20 flex items-center justify-center backdrop-blur-sm border border-arno-blue-400/30 shadow-2xl shadow-arno-blue-400/20">
              <Clock className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 text-arno-blue-400 animate-pulse" />
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
            <div
              className="absolute inset-4 rounded-full border border-cyan-400/20 animate-spin"
              style={{ animationDuration: "4s" }}
            />

            {/* Floating particles */}
            <div className="absolute -top-2 -right-2 w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-mono text-center">
            <span className="text-arno-blue-400">INITIALIZING</span> BATTLE SYSTEMS
          </h2>

          <div className="bg-arno-dark-800/50 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 p-4 sm:p-6 md:p-8 max-w-2xl mx-auto mb-8">
            <div className="text-center space-y-4">
              <p className="text-gray-300 text-sm sm:text-base md:text-lg font-mono">
                Epic coding competitions are being engineered...
              </p>

              {/* Progress indicators */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="text-gray-400">Loading competition engine...</span>
                  <span className="text-arno-blue-400">85%</span>
                </div>
                <div className="w-full bg-arno-dark-600 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-gradient-to-r from-arno-blue-400 to-purple-400 h-full rounded-full animate-pulse"
                    style={{ width: "85%" }}
                  ></div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs sm:text-sm font-mono">
                  <span className="text-gray-400">Calibrating difficulty algorithms...</span>
                  <span className="text-green-400">92%</span>
                </div>
                <div className="w-full bg-arno-dark-600 rounded-full h-1.5 sm:h-2">
                  <div
                    className="bg-gradient-to-r from-green-400 to-cyan-400 h-full rounded-full animate-pulse"
                    style={{ width: "92%" }}
                  ></div>
                </div>
              </div>
            </div>
          </div>

          {/* Features Preview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 w-full max-w-4xl">
            {[
              { icon: Trophy, title: "Real Prizes", desc: "Cash & Rewards" },
              { icon: Code, title: "Live Coding", desc: "Real-time Battles" },
              { icon: Users, title: "Team Mode", desc: "Squad Competitions" },
              { icon: Award, title: "Rankings", desc: "Global Leaderboards" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-arno-dark-800/30 backdrop-blur-lg rounded-lg p-3 sm:p-4 border border-arno-blue-400/20 text-center group hover:border-arno-blue-400/40 transition-colors"
              >
                <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-arno-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-bold text-xs sm:text-sm font-mono mb-1">{feature.title}</h3>
                <p className="text-gray-400 text-xs">{feature.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <Button className="bg-gradient-to-r from-arno-blue-400 to-purple-500 hover:from-arno-blue-500 hover:to-purple-600 text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-mono transition-all duration-300 hover:scale-105 shadow-lg shadow-arno-blue-400/20">
            <Zap className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            NOTIFY WHEN READY
          </Button>

          <p className="text-gray-400 text-xs sm:text-sm mt-4 font-mono text-center">
            // Be the first warrior to enter the arena
          </p>
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
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
