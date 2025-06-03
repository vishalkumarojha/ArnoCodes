import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink, Code, Brain, Zap, Users, Award, TrendingUp, Terminal, Database } from "lucide-react"
import { Link } from "react-router-dom"

export default function MentorshipPage() {
  const mentors = [
    {
      name: "Vishal Ojha",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67a936a000306ebb2683/view?project=67a074a3000f8ad60523&mode=admin",
      achievements: [
        "Founder @ Arnocodes | Tech Lead @ Notion Community VIT & @ CIC VIT B , Co-Lead @ E-Cell VIT B",
        "Web & Flutter Developer | UI/UX Designer.",
        "Winner @CNH | Finalist in Buildathon & Project-Expo VITB.",
        "Worked with Next.Js,  Python Frameworks(Django, Flask) , MERN stack & More",
        "65K+ impressions on LinkedIn | 3X Hacktoberfest Contributor | Tech Team @Advitya'25",
        "Technical Content Writer @Earth5R , @TeamEverestNGO",
      ],
      bookingLink: "https://topmate.io/vishal_ojha10",
      portfolioLink: "https://vishalkumarojha.github.io/LinkSpace/",
      specialties: ["Full Stack", "UI/UX", "Startups"],
    },
    {
      name: "Rishav Mishra",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67a1a506002d97d47b4b/view?project=67a074a3000f8ad60523&mode=admin",
      achievements: [
        "Founder @ Arnocodes |President @ Notion Community VIT B ",
        "PR & Outreach @ AIC VIT B",
        "Front-End Developer | Java developer | DSA",
        "Top 20 @INEA SERB Youth Conclave'23 | Top 100 in @EY Tecathon '23",
        "Growth & Management | Startup Strategy | PW SOS Fellow | Product Maker",
        "500K+ impressions & Top voice on LinkedIn",
        "Worked with brands : GrabOn | Collarhood | Pixstory | YouthIndia & more",
      ],
      bookingLink: "https://topmate.io/rishav_mishra_002/",
      portfolioLink: "https://www.linkedin.com/in/rishavmishra002/overlay/about-this-profile/",
      specialties: ["Growth", "Strategy", "Leadership"],
    },
    {
      name: "Aadish Jagde",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67a936fb0016d76effa6/view?project=67a074a3000f8ad60523&mode=admin",
      achievements: [
        "Co-Founder @ArnoCodes, @ScrambleLabs ",
        "Front-End Developer | UI UX Designer ",
        "Executive Manager @NotionCommunity VIT Bhopal University",
        "Top 100 @EY techathon 23",
        "Corporate Relations Lead @ Notion Community",
        "50K+ impressions on LinkedIn",
        "2X Hacktoberfest Contributor",
      ],
      bookingLink: "https://topmate.io/aadish_jagde",
      portfolioLink: "https://www.linkedin.com/in/aadishjagde/",
      specialties: ["Frontend", "Design", "Community"],
    },
    {
      name: "Abhishek kumar",
      image:
        "https://cloud.appwrite.io/v1/storage/buckets/67a0d5c50025df0b0264/files/67bfcc96001304d71abb/view?project=67a074a3000f8ad60523&mode=admin",
      achievements: [
        "Founder @ Scramble Labs | Founding Team @ Arno Codes",
        "Joint Secretary Student Council, VIT B",
        "Founder @ Notion Community VIT B | Operations Lead @ E Cell VIT B | Partnership @ A.I Club VIT B",
        "Community @ Notion | PW SOS Fellow",
        "Top 20 @ INAE SERB Youth Conclave | Top 100 in EY Techathon",
        "300K+ Impression on LinkedIn",
        "Worked with brands like Notion | PW SOS",
      ],
      bookingLink: "https://topmate.io/heyabhishekkumar",
      portfolioLink: "https://www.linkedin.com/in/heyabhishekkumar/",
      specialties: ["Community", "Operations", "Partnerships"],
    },
    {
      name: "Tejus Gupta",
      image:
        "https://github.com/notion-vit/NotionCommunityVITB/blob/main/images/team-members/Tejus%20Gupta%2023bce11334.jpg?raw=true",
      achievements: [
        "Founding Team @ Arno Codes",
        "C.M.O. @ Scramble Labs",
        "AIR 1 in research paper writing in VIVIBHA'25 hosted by Bhariya shikshan mandal(BSM)",
        "Community @ Notion | Vice president @Notion Community VITB",
        "Social media manager @ furnishing mall",
        "E commerce | dropshipping",
        "30K+ Impression on LinkedIn",
      ],
      bookingLink: "https://topmate.io/heyabhishekkumar",
      portfolioLink: "https://www.linkedin.com/in/heyabhishekkumar/",
      specialties: ["Marketing", "E-commerce", "Research"],
    },
  ]

  const techIcons = [Brain, Code, Zap, Users, Award, TrendingUp, Terminal, Database]

  return (
    <main className="flex-1 bg-arno-dark-900 relative overflow-hidden">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Tech Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${15 + index * 10}%`,
              top: `${10 + index * 12}%`,
              animationDelay: `${index * 0.5}s`,
            }}
          >
            <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-20 md:h-20 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-20">
          <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">MENTORSHIP_PROTOCOL</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-6xl lg:text-7xl font-bold text-white mb-4 sm:mb-6 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            ELITE_MENTORS
            <span className="text-arno-blue-400">/&gt;</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-mono">
            // Connect with industry experts who've built the future
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8 mt-6 sm:mt-8">
            {[
              { label: "Active Mentors", value: "5+" },
              { label: "Success Rate", value: "98%" },
              { label: "Avg Response", value: "< 24h" },
              { label: "Expertise Areas", value: "10+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-arno-dark-800/50 backdrop-blur-lg px-2 py-1 sm:px-4 sm:py-2 rounded-lg border border-arno-blue-400/20"
              >
                <div className="text-arno-blue-400 font-bold text-sm sm:text-base md:text-lg lg:text-xl">
                  {stat.value}
                </div>
                <div className="text-gray-400 text-xs sm:text-sm font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Mentors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto">
          {mentors.map((mentor, index) => (
            <Card
              key={index}
              className="bg-arno-dark-800/50 backdrop-blur-lg border-arno-blue-400/20 hover:border-arno-blue-400/50 transition-all duration-500 group relative overflow-hidden"
            >
              {/* Card Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Tech Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

              <CardContent className="p-4 sm:p-6 relative z-10">
                <div className="space-y-4 sm:space-y-6">
                  {/* Profile Section */}
                  <div className="flex flex-col items-center text-center">
                    {/* Profile Image with Tech Frame */}
                    <div className="relative mb-3 sm:mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-arno-blue-400/30 group-hover:border-arno-blue-400/60 transition-colors">
                        <img
                          src={mentor.image || "/placeholder.svg"}
                          alt={mentor.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Status Indicator */}
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-6 sm:h-6 bg-green-500 rounded-full border-2 border-arno-dark-800 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Name */}
                    <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 font-mono">
                      {mentor.name}
                    </h2>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2 justify-center mb-3 sm:mb-4">
                      {mentor.specialties.map((specialty, i) => (
                        <span
                          key={i}
                          className="px-1.5 py-0.5 sm:px-2 sm:py-1 bg-arno-blue-400/10 text-arno-blue-400 text-xs rounded-full border border-arno-blue-400/20 font-mono"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-2 sm:space-y-3">
                    <h3 className="text-xs sm:text-sm font-bold text-arno-blue-400 font-mono">// ACHIEVEMENTS</h3>
                    <ul className="space-y-1.5 sm:space-y-2 text-gray-300 text-xs sm:text-sm max-h-32 sm:max-h-40 overflow-y-auto scrollbar-hide">
                      {mentor.achievements.slice(0, 4).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <div className="w-0.5 h-0.5 sm:w-1 sm:h-1 bg-arno-blue-400 rounded-full mt-1.5 sm:mt-2 flex-shrink-0"></div>
                          <span className="leading-relaxed">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-arno-blue-400/20">
                    <Link to={mentor.bookingLink} className="flex-1">
                      <Button className="w-full bg-arno-blue-400 text-white hover:bg-arno-blue-500 transition-colors font-mono text-xs sm:text-sm">
                        <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        BOOK SESSION
                      </Button>
                    </Link>
                    <a href={mentor.portfolioLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-arno-blue-400/30 text-arno-blue-400 hover:bg-arno-blue-400/10 hover:border-arno-blue-400/60 transition-colors font-mono text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        PROFILE
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>

              {/* Bottom Tech Line */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 sm:mt-16 md:mt-24">
          <div className="bg-arno-dark-800/30 backdrop-blur-lg rounded-lg border border-arno-blue-400/20 p-6 sm:p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 to-purple-500/5"></div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-white mb-3 sm:mb-4 font-mono">
                Ready to <span className="text-arno-blue-400">Level Up</span>?
              </h2>
              <p className="text-gray-400 mb-6 sm:mb-8 font-mono text-sm sm:text-base">
                // Join thousands of developers who've accelerated their careers
              </p>
              <Button className="bg-arno-blue-400 text-white hover:bg-arno-blue-500 px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base lg:text-lg font-mono">
                <Users className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                START YOUR JOURNEY
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Ambient Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(25)].map((_, i) => (
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
    </main>
  )
}
