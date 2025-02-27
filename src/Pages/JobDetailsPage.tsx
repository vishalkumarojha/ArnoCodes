"use client"

import { ArrowLeft, MapPin, TrendingUp, Building2, CheckCircle2 } from "lucide-react"
import { Link, useParams } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

// Replace the current hardcoded jobDetails object with a collection of job details

// This would typically come from an API
type JobDetails = {
  id: number;
  title: string;
  company: string;
  type: string;
  locations: string[];
  isActive: boolean;
  startDate: string;
  duration: string;
  stipend: string;
  applyBy: string;
  postedDays: number;
  responsibilities: string[];
  requiredSkills: { name: string; level: string }[];
  certifications: { name: string; link: string }[];
  eligibility: string[];
  openings: number;
  companyInfo: {
    name: string;
    description: string;
    metrics: {
      hiringSince: string;
      opportunitiesPosted: number;
      candidatesHired: number;
    };
  };
};

const jobDetailsCollection: { [key: string]: JobDetails } = {
  "1": {
    id: 1,
    title: "Web Development Internship",
    company: "ArnoCodes",
    type: "Travel & Tourism",
    locations: ["Remote"],
    isActive: true,
    startDate: "immediately",
    duration: "3 Months",
    stipend: "unpaid",
    applyBy: "27 Mar 25",
    postedDays: 3,
    responsibilities: [
      "Maintain and update the website (React.js, Git, Appwrite).",
    "Debug issues and optimize website performance.",
    "Implement new features and integrations based on user feedback.",
    "Manage version control using Git and GitHub.",
    "Ensure security and data management with Appwrite.",
    ],
    requiredSkills: [
        { name: "React.js,", level: "Required" },
        { name: "Git, and Appwrite.", level: "Required" },
        { name: "front-end development and API integrations.", level: "Required" },
        { name: "debugging and performance optimization.", level: "Required" },
    ],
    certifications: [
        { name: "Letter Of Appreciation", link: "#" },
    ],
    eligibility: [
      "are available for Remote internship",
      "can start the internship between 25th Feb'25 and 1st Apr'25",
      "are available for duration of 3 months",
      "have relevant skills and interests",
    ],
    openings: 5,
    companyInfo: {
      name: "ArnoCodes",
      description: `ArnoCodes is a platform for developers to learn, practice, and compete in coding challenges. We provide a wide range of courses, mentorship, and competitions to help you grow your skills and land your dream job. Join us and start your journey to become a better developer today!`,
      metrics: {
        hiringSince: "Feb 2025",
        opportunitiesPosted: 5,
        candidatesHired: 3,
      },
    },
  },
  "2": {
    id: 2,
    title: "Content Curator",
    company: "ArnoCodes",
    type: "Content Writing",
    locations: ["remote"],
    isActive: true,
    startDate: "immediately",
    duration: "3 Months",
    stipend: "Unpaid",
    applyBy: "15 Apr 25",
    postedDays: 5,
    responsibilities: [
      "Research and create engaging content on coding, development, and problem-solving.",
      "Curate and repurpose technical content for social media, blogs, and community platforms.",
      "Collaborate with developers and designers for interactive learning experiences.",
      "Monitor trends in tech, open-source, and coding challenges to keep content fresh.",
      "Optimize content for SEO and reach.",
    ],
    requiredSkills: [
      { name: "research skills in coding and tech topics.", level: "Required" },
      { name: "Experience with blogs", level: "Preferred" },
      { name: "SEO and content marketing strategies", level: "Required" },
      { name: "GitHub, Notion, or any content management tools.", level: "Required" },
    ],
    certifications: [
        { name: "Letter Of Appreciation", link: "#" },
    ],
    eligibility: [
        "are available for Remote internship",
        "can start the internship between 25th Feb'25 and 1st Apr'25",
        "are available for duration of 3 months",
        "have relevant skills and interests",
      ],
      openings: 5,
      companyInfo: {
        name: "ArnoCodes",
        description: `ArnoCodes is a platform for developers to learn, practice, and compete in coding challenges. We provide a wide range of courses, mentorship, and competitions to help you grow your skills and land your dream job. Join us and start your journey to become a better developer today!`,
        metrics: {
          hiringSince: "Feb 2025",
          opportunitiesPosted: 5,
          candidatesHired: 3,
        },
      },
  },
  "3": {
    id: 3,
    title: "Growth & Marketing Specialist",
    company: "ArnoCodes",
    type: "Marketing",
    locations: ["Remote"],
    isActive: true,
    startDate: "immediately",
    duration: "2 Months",
    stipend: "Unpaid",
    applyBy: "30 Mar 25",
    postedDays: 2,
    responsibilities: [
      "Develop and execute growth strategies for user acquisition.",
      "Optimize and scale social media marketing (Instagram, LinkedIn, Twitter)",
      "Analyze audience insights and engagement metrics.",
      "Experiment with viral content, collaborations, and referral strategies.",
      "Work on email campaigns, automation, and lead generation.",
    ],
    requiredSkills: [
      { name: "social media growth strategie", level: "Required" },
      { name: "SEO, digital marketing, analytics tools", level: "Required" },
  { name: "marketing tools (Google Analytics, Meta Ads,", level: "Required" },
      { name: "analytics tools", level: "Required" },
    ],
    certifications: [
        { name: "Letter Of Appreciation", link: "#" },
    ],
    eligibility: [
        "are available for Remote internship",
        "can start the internship between 25th Feb'25 and 1st Apr'25",
        "are available for duration of 3 months",
        "have relevant skills and interests",
      ],
      openings: 5,
      companyInfo: {
        name: "ArnoCodes",
        description: `ArnoCodes is a platform for developers to learn, practice, and compete in coding challenges. We provide a wide range of courses, mentorship, and competitions to help you grow your skills and land your dream job. Join us and start your journey to become a better developer today!`,
        metrics: {
          hiringSince: "Feb 2025",
          opportunitiesPosted: 5,
          candidatesHired: 3,
        },
      },
  },
}

export default function JobDetailsPage() {
  const { id } = useParams()
  const jobDetails = jobDetailsCollection[id || "1"] || jobDetailsCollection["1"]

  return (
    <div className="min-h-screen bg-arno-dark-900 py-8 px-4 md:px-8">
      <div className="container mx-auto max-w-5xl">
        {/* Back button */}
        <Link to="/jobs" className="inline-flex items-center text-gray-400 hover:text-white mb-6 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Jobs
        </Link>

        {/* Main content */}
        <Card className="bg-arno-dark-800 border-arno-dark-600">
          <div className="p-6">
            {/* Header */}
            <div className="mb-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="mb-2">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-400/10 text-blue-400">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Actively hiring
                    </span>
                  </div>
                  <h1 className="text-2xl font-bold text-white mb-2">{jobDetails.title}</h1>
                  <p className="text-gray-400">{jobDetails.company}</p>
                </div>
                <a href="https://tally.so/r/3X2aYj">
                    <Button className="w-full bg-arno-blue-400 hover:bg-arno-blue-500 text-white">Apply now</Button>
                </a>
              </div>

              {/* Location */}
              <div className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <p>{jobDetails.locations.join(", ")}</p>
              </div>
            </div>

            {/* Key Information Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-arno-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">START DATE</p>
                <p className="text-white capitalize">{jobDetails.startDate}</p>
              </div>
              <div className="bg-arno-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">DURATION</p>
                <p className="text-white">{jobDetails.duration}</p>
              </div>
              <div className="bg-arno-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">STIPEND</p>
                <p className="text-white">{jobDetails.stipend}</p>
              </div>
              <div className="bg-arno-dark-700 p-4 rounded-lg">
                <p className="text-sm text-gray-400 mb-1">APPLY BY</p>
                <p className="text-white">{jobDetails.applyBy}</p>
              </div>
            </div>

            <Separator className="my-8 bg-arno-dark-600" />

            {/* About the Internship */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">About the Internship</h2>
              <p className="text-gray-400 mb-2">Selected intern's day-to-day responsibilities include:</p>
              <ul className="space-y-2">
                {jobDetails.responsibilities.map((resp: string, index: number) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <CheckCircle2 className="w-5 h-5 text-arno-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Required */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Skill(s) required</h2>
              <div className="flex flex-wrap gap-2">
                {jobDetails.requiredSkills.map((skill: { name: string; level: string }, index: number) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-arno-dark-700 text-gray-300 hover:bg-arno-dark-600"
                  >
                    {skill.name}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Earn certifications */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Earn certifications in these skills</h2>
              <div className="flex flex-wrap gap-4">
                {jobDetails.certifications.map((cert: { name: string; link: string }, index: number) => (
                  <Link key={index} to={cert.link} className="text-arno-blue-400 hover:text-arno-blue-500 underline">
                    Learn {cert.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Who can apply */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Who can apply</h2>
              <p className="text-gray-400 mb-2">Only those candidates can apply who:</p>
              <ul className="list-decimal list-inside space-y-2 text-gray-300 ml-4">
                {jobDetails.eligibility.map((item: string, index: number) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Number of openings */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">Number of openings</h2>
              <p className="text-gray-300">{jobDetails.openings}</p>
            </div>

            {/* About Company */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-white mb-4">About {jobDetails.companyInfo.name}</h2>
              <div className="bg-arno-dark-700 rounded-lg p-6">
                <div className="flex items-start gap-4">
                  <Building2 className="w-12 h-12 text-arno-blue-400 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300 mb-4">{jobDetails.companyInfo.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                      <div>
                        <p className="text-gray-400">Hiring since</p>
                        <p className="text-white">{jobDetails.companyInfo.metrics.hiringSince}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Opportunities posted</p>
                        <p className="text-white">{jobDetails.companyInfo.metrics.opportunitiesPosted}</p>
                      </div>
                      <div>
                        <p className="text-gray-400">Candidates hired</p>
                        <p className="text-white">{jobDetails.companyInfo.metrics.candidatesHired}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Apply Button */}
            <a href="https://tally.so/r/3X2aYj">
               <Button className="w-full bg-arno-blue-400 hover:bg-arno-blue-500 text-white">Apply now</Button>
            </a>
          </div>
        </Card>
      </div>
    </div>
  )
}

