"use client"

import type React from "react"

import { Navigate } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

interface ProtectedRouteProps {
  children: React.ReactNode
}

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser, loading } = useAuth()

  if (loading) {
    // You could render a loading spinner here
    return (
      <div className="min-h-screen flex items-center justify-center bg-arno-dark-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-arno-blue-400"></div>
      </div>
    )
  }

  if (!currentUser) {
    return <Navigate to="/signin" />
  }

  return <>{children}</>
}
