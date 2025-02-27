import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./Pages/HomePage"
import SheetPage from "./Pages/SheetPage"
import CoursesPage from "./Pages/CoursesPage"
import MentorshipPage from "./Pages/MentorshipPage"
import CompetitionsPage from "./Pages/CompetitionsPage"
import JobsPage from "./Pages/JobsPage"
import JobDetailsPage from "./Pages/JobDetailsPage"
import BlogPage from "./Pages/BlogPage"
import BlogPostPage from "./Pages/BlogPostPage"
import PracticePage from "./Pages/PracticePage"
import ArticlePage from "./Pages/ArticlePage"

function App() {
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
            <Route path="/mentorship" element={<MentorshipPage />} />
            <Route path="/competitions" element={<CompetitionsPage />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="/jobs/:id" element={<JobDetailsPage />} />
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

export default App

