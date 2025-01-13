
import Layout from './components/layout'
import HeroSection from './components/hero-section'
import ProfileSection from './components/profile-section'
import PhotoGrid from './components/photo-grid'
import { getPhotos, likePhoto } from './actions/like-photo'
import { motion, useSpring, useScroll } from "motion/react"

export default async function Home() {
  
  const photos = await getPhotos()

  return (
    <Layout>
      <HeroSection />
      <ProfileSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-700 mb-4">My Travel Gallery</h2>
          <p className="text-gray-600">Click on any photo to view it in full size. Don't forget to like your favorites!</p>
        </div>
        <PhotoGrid photos={photos} onLike={likePhoto} />
      </div>
    </Layout>
  )
}
