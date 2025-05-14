import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"
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
    },
  
  ]

  return (
    <main className="flex-1 bg-arno-dark-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-16">
          Meet Our Exceptional Instructors
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1300px] mx-auto">
          {mentors.map((mentor, index) => (
            <Card key={index} className="bg-arno-dark-800 border-arno-dark-600 w-full">
              <CardContent className="p-6">
                <div className="space-y-6">
                  {/* Profile Image */}
                  <div className="aspect-video w-full overflow-hidden rounded-lg">
                      <img
                        src={mentor.image || "/placeholder.svg"}
                        alt={mentor.name}
                        className="w-full h-full object-contain"
                      />
                  </div>

                  {/* Profile Info */}
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-4">{mentor.name}</h2>
                    {/* Achievements */}
                    <ul className="space-y-3 text-gray-300">
                      {mentor.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-arno-blue-400 rounded-full"></span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to={mentor.bookingLink} className="flex-1">
                      <Button className="w-full bg-white text-arno-dark-800 hover:bg-gray-200">Book a Session</Button>
                    </Link>
                    <a href={mentor.portfolioLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button
                        variant="outline"
                        className="w-full border-white text-white hover:bg-white hover:text-arno-dark-800"
                      >
                        View Portfolio <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

