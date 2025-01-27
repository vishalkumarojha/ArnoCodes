//import "../styles/globals.css"
import { Inter, Caveat } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })
const caveat = Caveat({ subsets: ["latin"], variable: "--font-caveat" })

export const metadata = {
  title: "ArnoCodes - Elevate Your Coding Skills",
  description: "Learn coding from industry experts and advance your career with ArnoCodes",
}

export default function RootLayout(props) {
  const { children } = props;
  return (
    <html lang="en">
      <body className={`${inter.className} ${caveat.variable}`}>{children}</body>
    </html>
  )
}

