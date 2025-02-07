import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./pages/HomePage"
import SheetPage from "./pages/SheetPage"
import CoursesPage from "./pages/CoursesPage"
import MentorshipPage from "./pages/MentorshipPage"
import CompetitionsPage from "./pages/CompetitionsPage"
import JobsPage from "./pages/JobsPage"
import BlogPage from "./pages/BlogPage"
import BlogPostPage from "./pages/BlogPostPage"
import PracticePage from "./pages/PracticePage"
import ArticlePage from "./pages/ArticlePage"

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

