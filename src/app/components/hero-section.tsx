'use client'

import { useState, useEffect } from 'react'
// import Image from 'next/image'

const videos = [
  '/videos/blog.mp4',
  '/videos/ujjain.mp4',
  '/videos/thar.mp4',
  // Add more video URLs as needed
]

export default function HeroSection() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Indicate the component has mounted
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length)
    }, 9000)

    return () => clearInterval(interval)
  }, [])

  if (!isClient) {
    return null // Avoid rendering until on the client
  }

  return (
    <section className="relative h-screen">
      {isClient && (
        <video
          key={videos[currentVideoIndex]}
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={videos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center">
          Capturing the World's Beauty
        </h1>
      </div>
    </section>
  )
}
