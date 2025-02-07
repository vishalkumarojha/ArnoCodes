import React from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import HomePage from "@/components/pages/HomePage"
import SheetPage from "@/components/pages/SheetPage"
import CoursesPage from "@/components/pages/CoursesPage"
import MentorshipPage from "@/components/pages/MentorshipPage"
import CompetitionsPage from "@/components/pages/CompetitionsPage"
import JobsPage from "@/components/pages/JobsPage"
import BlogPage from "@/components/pages/BlogPage"
import BlogPostPage from "@/components/pages/BlogPostPage"
import PracticePage from "@/components/pages/PracticePage"
import ArticlePage from "@/components/pages/ArticlePage"

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-arno-dark-900">
        <Navbar />
        <div className="flex-1 relative">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/sheet/:sheetId" element={<SheetPage />} />
            <Route path="/practice" element={<PracticePage />} />
            <Route path="/practice/:practiceId" element={<PracticePage />} />
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:postId" element={<BlogPostPage />} />
            <Route path="/article/:articleId" element={<ArticlePage />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

