// import type React from "react"
// import { createContext, useContext, useEffect, useState } from "react"
// import { account } from "@/lib/appwrite"
// import type { Models } from "appwrite"
// import { ID } from "appwrite"

// interface AuthContextType {
//   user: Models.User<Models.Preferences> | null
//   loading: boolean
//   signIn: (email: string, password: string) => Promise<void>
//   signUp: (email: string, password: string, name: string) => Promise<void>
//   signOut: () => Promise<void>
// }

// const AuthContext = createContext<AuthContextType | undefined>(undefined)

// export function AuthProvider({ children }: { children: React.ReactNode }) {
//   const [user, setUser] = useState<Models.User<Models.Preferences> | null>(null)
//   const [loading, setLoading] = useState(true)

//   useEffect(() => {
//     checkUser()
//   }, [])

//   async function checkUser() {
//     try {
//       const currentUser = await account.get()
//       setUser(currentUser)
//     } catch (error) {
//       setUser(null)
//     } finally {
//       setLoading(false)
//     }
//   }

//   async function signIn(email: string, password: string) {
//     try {
//       await account.createEmailSession(email, password)
//       await checkUser()
//     } catch (error) {
//       console.error("Sign in error:", error)
//       throw error
//     }
//   }

//   async function signUp(email: string, password: string, name: string) {
//     try {
//       await account.create(ID.unique(), email, password, name)
//       await signIn(email, password)
//     } catch (error) {
//       console.error("Sign up error:", error)
//       throw error
//     }
//   }

//   async function signOut() {
//     try {
//       await account.deleteSession("current")
//       setUser(null)
//     } catch (error) {
//       console.error("Sign out error:", error)
//       throw error
//     }
//   }

//   const value = {
//     user,
//     loading,
//     signIn,
//     signUp,
//     signOut,
//   }

//   return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
// }

// export function useAuth() {
//   const context = useContext(AuthContext)
//   if (context === undefined) {
//     throw new Error("useAuth must be used within an AuthProvider")
//   }
//   return context
// }

