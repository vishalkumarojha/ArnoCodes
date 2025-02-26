// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Link, useNavigate } from "react-router-dom"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Card, CardContent, CardHeader } from "@/components/ui/card"
// import { useAuth } from "../components/contexts/AuthContext"
// import { AppwriteException } from "appwrite"

// export default function SignUpPage() {
//   const [name, setName] = useState("")
//   const [email, setEmail] = useState("")
//   const [password, setPassword] = useState("")
//   const [error, setError] = useState("")
//   const { signUp } = useAuth()
//   const navigate = useNavigate()

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault()
//     setError("")
//     try {
//       await signUp(email, password, name)
//       navigate("/")
//     } catch (error) {
//       if (error instanceof AppwriteException) {
//         setError(error.message)
//       } else {
//         setError("An unexpected error occurred. Please try again.")
//       }
//       console.error("Sign up error:", error)
//     }
//   }

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-arno-dark-900 py-12 px-4 sm:px-6 lg:px-8">
//       <Card className="w-full max-w-md space-y-8 bg-arno-dark-800 border-arno-dark-600">
//         <CardHeader>
//           <div className="flex justify-center">
//             <img
//               src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-01%20213153-lD68TE2s6MNdHLbX5IRaXMuVloTjpq.png"
//               alt="Logo"
//               className="h-12 w-auto"
//             />
//           </div>
//           <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">Create an account</h2>
//         </CardHeader>
//         <CardContent>
//           {error && <p className="text-red-500 text-center mb-4">{error}</p>}
//           <form className="space-y-6" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-300">
//                 Full Name
//               </label>
//               <Input
//                 id="name"
//                 name="name"
//                 type="text"
//                 required
//                 className="bg-arno-dark-700 border-arno-dark-600 text-white"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-300">
//                 Email address
//               </label>
//               <Input
//                 id="email"
//                 name="email"
//                 type="email"
//                 autoComplete="email"
//                 required
//                 className="bg-arno-dark-700 border-arno-dark-600 text-white"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//             </div>
//             <div>
//               <label htmlFor="password" className="block text-sm font-medium text-gray-300">
//                 Password
//               </label>
//               <Input
//                 id="password"
//                 name="password"
//                 type="password"
//                 autoComplete="new-password"
//                 required
//                 className="bg-arno-dark-700 border-arno-dark-600 text-white"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//               />
//             </div>
//             <div>
//               <Button type="submit" className="w-full bg-white text-black hover:bg-gray-100">
//                 Sign up
//               </Button>
//             </div>
//           </form>
//           <div className="text-center mt-4">
//             <span className="text-gray-300">Already have an account? </span>
//             <Link to="/signin" className="text-arno-blue-400 hover:text-arno-blue-500">
//               Sign in
//             </Link>
//           </div>
//         </CardContent>
//       </Card>
//     </div>
//   )
// }

