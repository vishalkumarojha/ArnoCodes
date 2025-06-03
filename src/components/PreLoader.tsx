"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { useLoading } from "./LoadingContext"

const Doodle = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <motion.path
      d="M 50,100 C 50,70 90,70 90,100 C 90,130 130,130 130,100"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path
      d="M 60,80 C 60,50 100,50 100,80"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
    />
    <motion.circle
      cx="140"
      cy="80"
      r="5"
      fill="currentColor"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.5, delay: 2 }}
    />
  </svg>
)

export function PreLoader() {
  const [isLoading, setIsLoading] = useState(true)
  const [text, setText] = useState("")
  const fullText = "ArnoCodes"
  const [index, setIndex] = useState(0)
  const [showCursor, setShowCursor] = useState(true)
  const [showDoodles, setShowDoodles] = useState(false)
  const { setPreloaderComplete } = useLoading()

  // Typewriter effect with slower timing
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + fullText[index])
        setIndex(index + 1)
      }, 200)

      return () => clearTimeout(timeout)
    } else {
      setShowDoodles(true)

      const timeout = setTimeout(() => {
        setIsLoading(false)
        setPreloaderComplete(true) // Signal that preloader is complete
      }, 1500)

      return () => clearTimeout(timeout)
    }
  }, [index, setPreloaderComplete])

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 530) // Slightly slower blink rate

    return () => clearInterval(interval)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#111827]"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" },
          }}
        >
          <div className="relative">
            {/* Animated background elements */}
            <motion.div
              className="absolute inset-0 -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <div className="absolute top-[-120px] left-[-120px] w-60 h-60 bg-arno-blue-400/5 rounded-full blur-xl"></div>
              <div className="absolute bottom-[-120px] right-[-120px] w-60 h-60 bg-arno-blue-400/10 rounded-full blur-xl"></div>
            </motion.div>

            {/* Main content */}
            <motion.div
              className="flex items-center justify-center"
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <div className="relative">
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
                  <span className="text-arno-blue-400">&lt;</span>
                  <span className="text-white">{text}</span>
                  {showCursor && <span className="text-arno-blue-400 animate-pulse">|</span>}
                  {index === fullText.length && <span className="text-arno-blue-400">&gt;</span>}
                </h1>

                {/* Decorative doodles */}
                {showDoodles && (
                  <>
                    <motion.div
                      className="absolute -top-16 -left-16"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                      <Doodle className="w-32 h-32 text-arno-blue-400/30" />
                    </motion.div>
                    <motion.div
                      className="absolute -bottom-16 -right-16"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                      <Doodle className="w-32 h-32 text-arno-blue-400/30 transform rotate-180" />
                    </motion.div>
                  </>
                )}
              </div>
            </motion.div>

            {/* Animated code snippets */}
            <motion.div
              className="absolute -bottom-24 left-0 text-arno-blue-400/20 text-xs font-mono"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                &lt;div className="future-of-coding"&gt;
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                &nbsp;&nbsp;const journey = "begins";
              </motion.div>
            </motion.div>

            <motion.div
              className="absolute -top-20 right-0 text-arno-blue-400/20 text-xs font-mono text-right"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                import &#123; success &#125; from "your-journey";
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
              >
                console.log("Welcome to ArnoCodes");
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
