import Layout from '../components/layout'

export default function About() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">About TravelSnaps</h1>
        <p className="text-gray-600 mb-4">
          Welcome to TravelSnaps, my personal journey through the world most beautiful destinations. 
          I am a passionate photographer and avid traveler, always seeking to capture the essence of the 
          places I visit through my lens.
        </p>
        <p className="text-gray-600 mb-4">
          This website is a collection of my favorite moments and sights from my travels. Each photo 
          tells a story, and I hope they inspire you to explore and appreciate the beauty of our world.
        </p>
        <p className="text-gray-600">
          Feel free to browse through my gallery and like the photos that resonate with you. Your 
          appreciation means a lot and helps me understand which images connect most with viewers.
        </p>
        <h3>Soon, I will develop this site to make it as perfect as possible . . .</h3>
      </div>
    </Layout>
  )
}