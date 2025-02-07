"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { account } from "@/lib/appwrite"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const userId = urlParams.get("userId")
    const secret = urlParams.get("secret")

    if (userId && secret) {
      account
        .updateVerification(userId, secret)
        .then(() => {
          navigate("/")
        })
        .catch((error) => {
          console.error("Verification failed:", error)
          navigate("/auth/error")
        })
    }
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center bg-arno-dark-900">
      <div className="text-white text-center">
        <h1 className="text-2xl font-bold mb-4">Verifying your account...</h1>
        <p className="text-gray-400">Please wait while we complete the verification process.</p>
      </div>
    </div>
  )
}

