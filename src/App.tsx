import { Analytics } from "@vercel/analytics/react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import HomePage from "./Pages/HomePage"
import AuthPage from "./Pages/AuthPage"
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
import { AuthProvider } from "./contexts/AuthContext"
import ProtectedRoute from "./components/ProtectedRoute"

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen flex flex-col bg-arno-dark-900">
          <Navbar />
          <div className="flex-1 relative">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/auth" element={<AuthPage />} />

              {/* Protected routes */}
              <Route
                path="/courses"
                element={
                  <ProtectedRoute>
                    <CoursesPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/sheet/:sheetId"
                element={
                  <ProtectedRoute>
                    <SheetPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/practice"
                element={
                  <ProtectedRoute>
                    <PracticePage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/mentorship"
                element={
                  <ProtectedRoute>
                    <MentorshipPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/competitions"
                element={
                  <ProtectedRoute>
                    <CompetitionsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs"
                element={
                  <ProtectedRoute>
                    <JobsPage />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/jobs/:id"
                element={
                  <ProtectedRoute>
                    <JobDetailsPage />
                  </ProtectedRoute>
                }
              />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/blog/:postId" element={<BlogPostPage />} />
              <Route
                path="/article/:articleId"
                element={
                  <ProtectedRoute>
                    <ArticlePage />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
          <Analytics />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
