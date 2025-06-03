"use client"

import { useAuth } from "../contexts/AuthContext"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LogOut, User } from "lucide-react"
import { Link } from "react-router-dom"

export function UserMenu() {
  const { currentUser, logout } = useAuth()

  if (!currentUser) {
    return (
      <div className="flex items-center space-x-4">
        <Link to="/signin" className="text-gray-300 hover:text-white transition-colors">
          Sign In
        </Link>
        <Link
          to="/signup"
          className="bg-white text-arno-dark-800 hover:bg-gray-200 px-4 py-2 rounded-md transition-colors"
        >
          Sign Up
        </Link>
      </div>
    )
  }

  const handleSignOut = async () => {
    try {
      await logout()
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="h-8 w-8">
          <AvatarImage src={currentUser.photoURL || ""} />
          <AvatarFallback>{currentUser.displayName?.charAt(0) || currentUser.email?.charAt(0) || "U"}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-56 bg-arno-dark-800 border-arno-dark-600">
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1">
            <p className="text-sm font-medium text-white">{currentUser.displayName || "User"}</p>
            <p className="text-xs text-gray-400">{currentUser.email}</p>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-arno-dark-600" />
        <DropdownMenuItem className="text-gray-300 hover:text-white hover:bg-arno-dark-700 cursor-pointer">
          <User className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>Profile</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="text-gray-300 hover:text-white hover:bg-arno-dark-700 cursor-pointer"
          onClick={handleSignOut}
        >
          <LogOut className="mr-2 h-4 w-4" aria-hidden="true" />
          <span>Sign out</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
