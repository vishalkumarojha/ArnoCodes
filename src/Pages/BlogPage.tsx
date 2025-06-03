import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Eye, Code, BookOpen, Zap, FileText, Terminal, Database } from "lucide-react"
import { blogPosts, type BlogPost } from "../lib/data/blogPosts"

const BLOG_POST_LIMIT = 6

export default function BlogPage() {
  const techIcons = [Code, BookOpen, FileText, Zap, Terminal, Database]

  const renderBlogCard = (post: BlogPost | null, index: number) => {
    if (post) {
      return (
        <Link to={`/blog/${post.slug}`} key={post.slug}>
          <Card className="h-full bg-arno-dark-800/50 backdrop-blur-lg border-arno-blue-400/20 hover:border-arno-blue-400/50 transition-all duration-500 relative overflow-hidden group">
            {/* Card Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Tech Corner Accent */}
            <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

            {/* Status Indicator */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>

            <CardContent className="p-4 sm:p-6 relative z-10">
              {/* Article Type Badge */}
              <div className="mb-3 sm:mb-4">
                <span className="inline-flex items-center px-2 py-0.5 sm:px-2.5 sm:py-0.5 rounded-md text-xs font-medium bg-arno-blue-400/10 text-arno-blue-400 border border-arno-blue-400/20 font-mono">
                  <Code className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1" />
                  TECH_ARTICLE
                </span>
              </div>

              <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 line-clamp-2 font-mono group-hover:text-arno-blue-400 transition-colors">
                {post.title}
              </h2>

              {/* Meta Info */}
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm mb-3 sm:mb-4 space-y-2 sm:space-y-0">
                <div className="flex items-center space-x-2 sm:space-x-4">
                  <span className="text-arno-blue-400 font-mono">{post.author}</span>
                  <div className="w-px h-3 sm:h-4 bg-arno-blue-400/30"></div>
                  <span className="text-gray-400 font-mono">{post.date}</span>
                </div>
                <div className="flex items-center space-x-1 text-gray-400">
                  <Eye className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-mono">{post.views}</span>
                </div>
              </div>

              {/* Content Preview */}
              <p className="text-gray-400 mb-4 sm:mb-6 line-clamp-3 leading-relaxed text-sm sm:text-base">
                {post.content
                  .split("\n")
                  .find((line) => line.trim() && !line.startsWith("#") && !line.startsWith("//")) ||
                  "Explore advanced programming concepts..."}
              </p>

              {/* Read More Button */}
              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-arno-blue-400/20">
                <div className="flex items-center text-arno-blue-400 group-hover:text-white transition-colors font-mono">
                  <span className="text-xs sm:text-sm">READ_MORE</span>
                  <ArrowRight className="ml-1 sm:ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </div>
                <div className="text-xs text-gray-500 font-mono">{Math.ceil(post.content.length / 1000)} min read</div>
              </div>
            </CardContent>

            {/* Bottom Tech Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
          </Card>
        </Link>
      )
    } else {
      return (
        <Card
          key={`coming-soon-${index}`}
          className="h-full bg-arno-dark-800/50 backdrop-blur-lg border-arno-blue-400/20 relative overflow-hidden group"
        >
          {/* Card Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-arno-blue-400/5 via-transparent to-purple-500/5"></div>

          {/* Tech Corner */}
          <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-bl from-arno-blue-400/20 to-transparent"></div>

          <CardContent className="p-4 sm:p-6 flex flex-col items-center justify-center h-full relative z-10">
            {/* Loading Animation */}
            <div className="relative mb-4 sm:mb-6">
              <Clock className="w-8 h-8 sm:w-12 sm:h-12 text-arno-blue-400 animate-pulse" />
              <div className="absolute inset-0 w-8 h-8 sm:w-12 sm:h-12 border-2 border-arno-blue-400/20 rounded-full animate-spin"></div>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-3 sm:mb-4 font-mono text-center">
              <span className="text-arno-blue-400">&lt;</span>
              LOADING
              <span className="text-arno-blue-400">/&gt;</span>
            </h2>

            <p className="text-gray-400 text-center font-mono text-xs sm:text-sm">// New content compiling...</p>

            {/* Progress Bar */}
            <div className="w-full max-w-24 sm:max-w-32 mt-3 sm:mt-4">
              <div className="h-0.5 sm:h-1 bg-arno-dark-600 rounded-full overflow-hidden">
                <div className="h-full bg-arno-blue-400 rounded-full animate-pulse" style={{ width: "60%" }}></div>
              </div>
            </div>
          </CardContent>

          {/* Bottom Tech Line */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>
        </Card>
      )
    }
  }

  return (
    <main className="flex-1 bg-arno-dark-900 relative overflow-hidden min-h-screen">
      {/* Tech Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>

      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className="absolute animate-float opacity-5"
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + index * 12}%`,
              animationDelay: `${index * 0.6}s`,
            }}
          >
            <Icon className="w-8 h-8 sm:w-12 sm:h-12 md:w-16 md:h-16 text-arno-blue-400" />
          </div>
        ))}
      </div>

      {/* Circuit Lines */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-arno-blue-400/50 to-transparent"></div>

      <div className="container mx-auto px-4 py-8 md:py-16 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <div className="inline-flex items-center space-x-2 mb-4 sm:mb-6 px-3 py-1.5 sm:px-4 sm:py-2 bg-arno-dark-800/50 backdrop-blur-lg rounded-full border border-arno-blue-400/20">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-arno-blue-400 rounded-full animate-pulse"></div>
            <span className="text-arno-blue-400 font-mono text-xs sm:text-sm">KNOWLEDGE_BASE</span>
          </div>

          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6 font-mono">
            <span className="text-arno-blue-400">&lt;</span>
            TECH_BLOG
            <span className="text-arno-blue-400">/&gt;</span>
          </h1>

          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto font-mono mb-6 sm:mb-8">
            // Deep dives into algorithms, data structures, and cutting-edge tech
          </p>

          {/* Stats Bar */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 md:gap-8">
            {[
              { label: "Articles", value: `${blogPosts.length}` },
              { label: "Total Views", value: `${blogPosts.reduce((sum, post) => sum + post.views, 0)}+` },
              { label: "Categories", value: "5+" },
              { label: "Weekly Updates", value: "3+" },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-arno-dark-800/50 backdrop-blur-lg px-2 py-1 sm:px-4 sm:py-2 rounded-lg border border-arno-blue-400/20"
              >
                <div className="text-arno-blue-400 font-bold text-sm sm:text-base md:text-lg">{stat.value}</div>
                <div className="text-gray-400 text-xs sm:text-sm font-mono">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {blogPosts
            .concat(Array(BLOG_POST_LIMIT - blogPosts.length).fill(null))
            .map((post, index) => renderBlogCard(post, index))}
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
    </main>
  )
}
