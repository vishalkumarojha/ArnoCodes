"use client"

import type React from "react"

import { createContext, useContext, useState } from "react"

interface LoadingContextType {
  isPreloaderComplete: boolean
  setPreloaderComplete: (value: boolean) => void
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined)

export function LoadingProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaderComplete, setPreloaderComplete] = useState(false)

  return (
    <LoadingContext.Provider value={{ isPreloaderComplete, setPreloaderComplete }}>{children}</LoadingContext.Provider>
  )
}

export function useLoading() {
  const context = useContext(LoadingContext)
  if (context === undefined) {
    throw new Error("useLoading must be used within a LoadingProvider")
  }
  return context
}

