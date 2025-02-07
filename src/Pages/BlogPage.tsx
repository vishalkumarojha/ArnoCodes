import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock } from "lucide-react"
import { blogPosts, type BlogPost } from "../lib/data/blogPosts"

const BLOG_POST_LIMIT = 6

export default function BlogPage() {
  const renderBlogCard = (post: BlogPost | null, index: number) => {
    if (post) {
      return (
        <Link to={`/blog/${post.slug}`} key={post.slug}>
          <Card className="h-full bg-arno-dark-800 border-arno-dark-600 hover:border-arno-blue-400 transition-colors relative overflow-hidden group">
            <CardContent className="p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-white mb-2 line-clamp-2">{post.title}</h2>
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-500 mb-4">
                <span className="mb-1 sm:mb-0">{post.author}</span>
                <span>{post.views} views</span>
              </div>
              <p className="text-gray-400 mb-4 line-clamp-3">{post.content.split("\n")[0]}</p>
              <div className="flex items-center text-arno-blue-400 group-hover:text-white transition-colors mt-4">
                Read more
                <ArrowRight className="ml-2 h-4 w-4" />
              </div>
            </CardContent>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-arno-blue-400/10 to-transparent opacity-50 rounded-full transform translate-x-16 translate-y-16" />
          </Card>
        </Link>
      )
    } else {
      return (
        <Card
          key={`coming-soon-${index}`}
          className="h-full bg-arno-dark-800 border-arno-dark-600 relative overflow-hidden"
        >
          <CardContent className="p-6 flex flex-col items-center justify-center h-full">
            <Clock className="w-12 h-12 text-arno-blue-400 mb-4" />
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Coming Soon</h2>
            <p className="text-gray-400 text-center">Exciting new content is on its way!</p>
          </CardContent>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-radial from-arno-blue-400/10 to-transparent opacity-50 rounded-full transform translate-x-16 translate-y-16" />
        </Card>
      )
    }
  }

  return (
    <main className="flex-1 bg-arno-dark-900">
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8">Blog Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts
            .concat(Array(BLOG_POST_LIMIT - blogPosts.length).fill(null))
            .map((post, index) => renderBlogCard(post, index))}
        </div>
      </div>
    </main>
  )
}

