"use client"

import type React from "react"

import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useAuth } from "../contexts/AuthContext"
import { FcGoogle } from "react-icons/fc"
import { FirebaseError } from "firebase/app"

export default function SignInPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      await signIn(email, password)
      navigate("/courses") // Redirect to courses page after successful login
    } catch (error) {
      console.error("Sign in error:", error)
      if (error instanceof FirebaseError) {
        switch (error.code) {
          case "auth/invalid-credential":
            setError("Invalid email or password. Please try again.")
            break
          case "auth/user-not-found":
            setError("No account found with this email. Please sign up.")
            break
          case "auth/wrong-password":
            setError("Incorrect password. Please try again.")
            break
          case "auth/too-many-requests":
            setError("Too many failed login attempts. Please try again later.")
            break
          default:
            setError("Failed to sign in. Please try again.")
        }
      } else {
        setError("An unexpected error occurred. Please try again.")
      }
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setError("")
    setLoading(true)

    try {
      await signInWithGoogle()
      navigate("/courses")
    } catch (error) {
      console.error("Google sign in error:", error)
      setError("Failed to sign in with Google. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-arno-dark-900 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md space-y-8 bg-arno-dark-800 border-arno-dark-600">
        <CardHeader>
          <div className="flex justify-center">
            <img src="/src/assets/codes-arno.png" alt="Logo" className="h-12 w-auto" />
          </div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Sign in to your account</h2>
        </CardHeader>
        <CardContent>
          {error && (
            <div className="bg-red-500/10 border border-red-500 rounded-md p-3 mb-6">
              <p className="text-red-500 text-sm text-center">{error}</p>
            </div>
          )}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="bg-arno-dark-700 border-arno-dark-600 text-white"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="bg-arno-dark-700 border-arno-dark-600 text-white"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
              />
            </div>
            <div>
              <Button
                type="submit"
                className="w-full bg-white text-black hover:bg-gray-100 disabled:opacity-50"
                disabled={loading}
              >
                {loading ? "Signing in..." : "Sign in"}
              </Button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-arno-dark-600"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-arno-dark-800 text-gray-400">Or continue with</span>
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="button"
                onClick={handleGoogleSignIn}
                className="w-full bg-arno-dark-700 border border-arno-dark-600 text-white hover:bg-arno-dark-600 flex items-center justify-center"
                disabled={loading}
              >
                <FcGoogle className="w-5 h-5 mr-2" />
                Google
              </Button>
            </div>
          </div>

          <div className="text-center mt-4">
            <span className="text-gray-300">Don't have an account? </span>
            <Link to="/signup" className="text-arno-blue-400 hover:text-arno-blue-500">
              Sign up
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
