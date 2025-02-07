import { useParams, Link } from "react-router-dom"
import { ArrowLeft } from "lucide-react"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { articles } from "@/lib/articles"

export default function ArticlePage() {
  const { articleId } = useParams<{ articleId: string }>()
  const article = articles.find((a) => a.id === articleId)

  if (!article) {
    return (
      <div className="min-h-screen bg-arno-dark-900 text-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <Link to="/courses" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Courses
              </Link>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold text-red-500 mb-4">Article Not Found</h1>
              <p className="text-gray-400">The article you're looking for doesn't exist.</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-arno-dark-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/courses" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
              <ArrowLeft className="w-4 h-4 mr-2" />
              <span className="text-sm sm:text-base">Back to Courses</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">{article.title}</h1>
          <article className="prose prose-invert prose-sm sm:prose-base lg:prose-lg max-w-none">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.content}</ReactMarkdown>
          </article>
        </div>
      </div>
    </div>
  )
}

