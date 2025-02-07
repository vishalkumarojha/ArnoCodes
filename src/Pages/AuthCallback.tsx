import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { account } from "@/lib/appwrite"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.get()
        // Redirect to homepage
        navigate("/")
      } catch (error) {
        console.error("Auth callback error:", error)
        navigate("/signin")
      }
    }

    checkSession()
  }, [navigate])

  return (
    <div className="min-h-screen bg-arno-dark-900 flex items-center justify-center">
      <div className="text-white text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
        <p>Completing sign in...</p>
      </div>
    </div>
  )
}

