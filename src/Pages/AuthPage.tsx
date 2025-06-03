"use client"

import type React from "react"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { useAuth } from "../contexts/AuthContext"
import { FcGoogle } from "react-icons/fc"
import { FirebaseError } from "firebase/app"
import { Code, Database, Cpu, Globe, Zap, Terminal, Shield, Rocket } from "lucide-react"

export default function AuthPage() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const { signUp, signIn, signInWithGoogle } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (isSignUp) {
      if (password !== confirmPassword) {
        return setError("Passwords do not match")
      }
      if (password.length < 6) {
        return setError("Password must be at least 6 characters")
      }
    }

    setLoading(true)

    try {
      if (isSignUp) {
        await signUp(email, password, name)
      } else {
        await signIn(email, password)
      }
      navigate("/")
    } catch (error) {
      console.error("Auth error:", error)
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
          case "auth/email-already-in-use":
            setError("Email already in use. Please sign in instead.")
            break
          case "auth/invalid-email":
            setError("Invalid email address.")
            break
          case "auth/weak-password":
            setError("Password is too weak. Please use a stronger password.")
            break
          case "auth/too-many-requests":
            setError("Too many failed attempts. Please try again later.")
            break
          default:
            setError(`Failed to ${isSignUp ? "create account" : "sign in"}. Please try again.`)
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
      navigate("/")
    } catch (error) {
      console.error("Google sign in error:", error)
      setError("Failed to sign in with Google. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-arno-dark-900 via-arno-dark-800 to-arno-dark-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />

        {/* Floating Tech Icons - Responsive */}
        <div className="absolute top-10 left-5 sm:top-20 sm:left-10 animate-float">
          <Code className="w-6 h-6 sm:w-8 sm:h-8 text-arno-blue-400/30" />
        </div>
        <div className="absolute top-20 right-10 sm:top-40 sm:right-20 animate-float-delayed">
          <Database className="w-8 h-8 sm:w-10 sm:h-10 text-green-400/20" />
        </div>
        <div className="absolute bottom-20 left-10 sm:bottom-40 sm:left-20 animate-float">
          <Cpu className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400/25" />
        </div>
        <div className="absolute bottom-10 right-5 sm:bottom-20 sm:right-10 animate-float-delayed">
          <Globe className="w-7 h-7 sm:w-9 sm:h-9 text-cyan-400/30" />
        </div>
        <div className="absolute top-1/3 left-1/4 animate-float">
          <Zap className="w-5 h-5 sm:w-7 sm:h-7 text-yellow-400/20" />
        </div>
        <div className="absolute bottom-1/3 right-1/4 animate-float-delayed">
          <Terminal className="w-9 h-9 sm:w-11 sm:h-11 text-pink-400/25" />
        </div>

        {/* Geometric Shapes - Responsive */}
        <div className="absolute top-16 right-1/3 w-20 h-20 sm:w-32 sm:h-32 border border-arno-blue-400/10 rotate-45 animate-spin-slow"></div>
        <div className="absolute bottom-16 left-1/3 w-16 h-16 sm:w-24 sm:h-24 border border-arno-blue-400/15 rotate-12 animate-pulse"></div>

        {/* Matrix-like lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-arno-blue-400/20 to-transparent animate-pulse" />
        <div className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-green-400/20 to-transparent animate-pulse delay-1000" />

        {/* Gradient Orbs - Responsive */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 sm:w-64 sm:h-64 bg-arno-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-40 h-40 sm:w-80 sm:h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse-delayed"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-sm sm:max-w-md backdrop-blur-xl bg-white/10 border border-white/20 shadow-2xl shadow-arno-blue-400/10">
          <CardHeader className="text-center p-4 sm:p-6">
            <div className="flex justify-center mb-4 sm:mb-6">
              <div className="relative">
                <div className="w-12 h-12 sm:w-16 sm:h-16 relative">
                  <img src="/src/assets/codes-arno.png" alt="ArnoCodes Logo" className="w-full h-full object-contain" />
                  <div className="absolute inset-0 bg-arno-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Tech-style header */}
            <div className="mb-3 sm:mb-4">
              <div className="inline-flex items-center bg-gradient-to-r from-arno-blue-400/20 to-purple-400/20 backdrop-blur-sm border border-arno-blue-400/30 rounded-full px-2 py-1 sm:px-3 sm:py-1 mb-2 sm:mb-3">
                <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-green-400 mr-1 sm:mr-2" />
                <span className="text-xs sm:text-sm text-gray-300 font-mono">SECURE ACCESS</span>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 font-mono">
              <span className="text-arno-blue-400">&lt;</span>ArnoCodes<span className="text-arno-blue-400">&gt;</span>
            </h1>
            <h2 className="text-lg sm:text-xl font-semibold text-white/90 mb-2">
              {isSignUp ? "Initialize Account" : "Access Terminal"}
            </h2>
            <p className="text-white/70 text-xs sm:text-sm font-mono">
              <span className="text-green-400">$ </span>
              {isSignUp ? "Join the developer ecosystem" : "Authenticate to continue"}
            </p>
          </CardHeader>

          <CardContent className="space-y-4 sm:space-y-6 p-4 sm:p-6">
            {error && (
              <div className="bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-lg p-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 to-transparent" />
                <p className="text-red-300 text-xs sm:text-sm text-center font-mono relative z-10">
                  <span className="text-red-400">ERROR:</span> {error}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              {isSignUp && (
                <div>
                  <label
                    htmlFor="name"
                    className="block text-xs sm:text-sm font-medium text-white/90 mb-1 sm:mb-2 font-mono"
                  >
                    <Terminal className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-arno-blue-400 focus:ring-arno-blue-400 font-mono text-sm sm:text-base h-10 sm:h-12"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    disabled={loading}
                  />
                </div>
              )}

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs sm:text-sm font-medium text-white/90 mb-1 sm:mb-2 font-mono"
                >
                  <Code className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-arno-blue-400 focus:ring-arno-blue-400 font-mono text-sm sm:text-base h-10 sm:h-12"
                  placeholder="user@domain.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={loading}
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-xs sm:text-sm font-medium text-white/90 mb-1 sm:mb-2 font-mono"
                >
                  <Shield className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                  Password
                </label>
                <Input
                  id="password"
                  type="password"
                  required
                  className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-arno-blue-400 focus:ring-arno-blue-400 font-mono text-sm sm:text-base h-10 sm:h-12"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  disabled={loading}
                />
              </div>

              {isSignUp && (
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-xs sm:text-sm font-medium text-white/90 mb-1 sm:mb-2 font-mono"
                  >
                    <Shield className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1 sm:mr-2" />
                    Confirm Password
                  </label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    required
                    className="bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-white/50 focus:border-arno-blue-400 focus:ring-arno-blue-400 font-mono text-sm sm:text-base h-10 sm:h-12"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    disabled={loading}
                  />
                </div>
              )}

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-arno-blue-400 to-arno-blue-500 hover:from-arno-blue-500 hover:to-arno-blue-600 text-white font-semibold py-2 sm:py-3 transition-all duration-200 transform hover:scale-105 font-mono text-sm sm:text-base h-10 sm:h-12 tech-button"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-4 w-4 sm:h-5 sm:w-5 border-t-2 border-b-2 border-white mr-2"></div>
                    <span className="loading-dots">{isSignUp ? "Initializing" : "Authenticating"}</span>
                  </div>
                ) : (
                  <div className="flex items-center justify-center">
                    <Rocket className="w-4 h-4 mr-2" />
                    {isSignUp ? "Create Account" : "Sign In"}
                  </div>
                )}
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-white/20"></div>
              </div>
              <div className="relative flex justify-center text-xs sm:text-sm">
                <span className="px-3 sm:px-4 bg-transparent text-white/70 font-mono">OR CONTINUE WITH</span>
              </div>
            </div>

            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200 transform hover:scale-105 font-mono text-sm sm:text-base h-10 sm:h-12 tech-button"
              disabled={loading}
            >
              <FcGoogle className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3" />
              Google OAuth
            </Button>

            <div className="text-center">
              <button
                type="button"
                onClick={() => setIsSignUp(!isSignUp)}
                className="text-arno-blue-400 hover:text-arno-blue-300 text-xs sm:text-sm font-medium transition-colors font-mono hover:underline"
                disabled={loading}
              >
                {isSignUp ? "< Back to Sign In" : "Create New Account >"}
              </button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Tech border effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-16 h-px bg-gradient-to-r from-transparent via-arno-blue-400 to-transparent" />
        <div className="absolute bottom-0 right-1/4 w-16 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
        <div className="absolute left-0 top-1/4 h-16 w-px bg-gradient-to-b from-transparent via-green-400 to-transparent" />
        <div className="absolute right-0 bottom-1/4 h-16 w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent" />
      </div>
    </div>
  )
}
