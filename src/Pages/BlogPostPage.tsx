import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import { blogPosts } from "../lib/data/blogPosts"
import ReactMarkdown from "react-markdown"

export default function BlogPostPage() {
  const { postId } = useParams<{ postId: string }>()
  const post = blogPosts.find((p) => p.slug === postId)

  if (!post) {
    return (
      <div className="min-h-screen bg-arno-dark-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-500 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-400">The blog post you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-arno-dark-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/blog" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">{post.title}</h1>
          <div className="text-gray-400 mb-8">
            <span>By {post.author}</span>
            <span className="mx-2">•</span>
            <span>{post.views} views</span>
            <span className="mx-2">•</span>
            <span>{new Date(post.date).toLocaleDateString()}</span>
          </div>
          <div className="prose prose-invert max-w-none">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  )
}

