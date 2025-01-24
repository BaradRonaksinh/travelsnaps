'use client'

import Image from 'next/image'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart } from 'lucide-react'
import ImageModal from './image-modal'

interface Photo {
  id: number
  src: string
  alt: string
  likes: number
}

interface PhotoGridProps {
  photos: Photo[]
  onLike: (id: number) => Promise<void>
}

export default function PhotoGrid({ photos, onLike }: PhotoGridProps) {
  const [likedPhotos, setLikedPhotos] = useState<Set<number>>(new Set())
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null)

  const handleLike = async (id: number) => {
    if (!likedPhotos.has(id)) {
      await onLike(id)
      setLikedPhotos(new Set(likedPhotos).add(id))
    }
  }

  const handlePhotoClick = (photo: Photo) => {
    setSelectedPhoto(photo)
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {photos.map((photo) => (
        <motion.div
          key={photo.id}
          className="relative overflow-hidden rounded-lg shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={300}
            className="w-full h-auto object-cover cursor-pointer"
            onClick={() => handlePhotoClick(photo)}
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-2 flex justify-between items-center">
            <span>{photo.alt}</span>
            <button
              onClick={() => handleLike(photo.id)}
              className="flex items-center space-x-1"
              aria-label={`Like ${photo.alt}`}
            >
              <Heart
                className={`w-5 h-5 ${
                  likedPhotos.has(photo.id) ? 'text-red-500 fill-current' : 'text-white'
                }`}
              />
              <span>{photo.likes}</span>
            </button>
          </div>
        </motion.div>
      ))}
      {selectedPhoto && (
        <ImageModal
          isOpen={!!selectedPhoto}
          onClose={() => setSelectedPhoto(null)}
          photo={selectedPhoto}
        />
      )}
    </div>
  )
}

