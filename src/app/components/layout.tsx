"use client"
import { motion, useSpring, useScroll } from "motion/react"
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default 


function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen ${inter.className}`}>
      <header className="bg-black/10 backdrop-blur-sm shadow-sm fixed top-0 left-0 right-0 z-10">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-xl font-bold text-white-800">TravelSnaps</span>
              </Link>
            </div>
            <div className="flex items-center">
              <Link href="/about" className="text-white-600 hover:text-gray-800 px-3 py-2 rounded-md text-sm font-medium">
                About
              </Link>
            </div>
          </div>
        </nav>
      </header>
      <main className="pt-16">{children}</main>
      <footer className="bg-white mt-8">
        <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 text-lg">
            © 2024 TravelSnaps. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}

