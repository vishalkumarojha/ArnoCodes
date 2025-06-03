"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import {
  type User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth"
import { auth } from "../lib/firebase"

interface AuthContextType {
  currentUser: User | null
  loading: boolean
  signUp: (email: string, password: string, name: string) => Promise<void>
  signIn: (email: string, password: string) => Promise<void>
  signInWithGoogle: () => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Sign up with email and password
  async function signUp(email: string, password: string, name: string) {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      // Update profile with display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, {
          displayName: name,
        })
      }
    } catch (error) {
      console.error("Error signing up:", error)
      throw error
    }
  }

  // Sign in with email and password
  async function signIn(email: string, password: string) {
    try {
      await signInWithEmailAndPassword(auth, email, password)
    } catch (error) {
      console.error("Error signing in:", error)
      throw error
    }
  }

  // Sign in with Google
  async function signInWithGoogle() {
    try {
      const provider = new GoogleAuthProvider()
      await signInWithPopup(auth, provider)
    } catch (error) {
      console.error("Error signing in with Google:", error)
      throw error
    }
  }

  // Sign out
  async function logout() {
    try {
      await signOut(auth)
    } catch (error) {
      console.error("Error signing out:", error)
      throw error
    }
  }

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    loading,
    signUp,
    signIn,
    signInWithGoogle,
    logout,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
