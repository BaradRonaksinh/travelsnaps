'use client'

import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { X } from 'lucide-react'

interface ImageModalProps {
    isOpen: boolean
    onClose: () => void
    photo: {
        src: string
        alt: string
        likes: number
    }
}

export default function ImageModal({ isOpen, onClose, photo }: ImageModalProps) {
    const altTextParts = photo.alt.split('#')
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-50 flex items-center justify-center"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        transition={{ type: 'spring', damping: 15 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative bg-black rounded-lg overflow-hidden shadow-xl max-w-3xl w-full mx-4"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-2 right-2 text-white bg-black bg-opacity-50 rounded-full p-1"
                            aria-label="Close modal"
                        >
                            <X size={24} />
                        </button>
                        <Image
                            src={photo.src}
                            alt={photo.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto object-contain max-h-[90vh]"
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                            <p className="text-lg font-semibold">{altTextParts[0]}</p>
                            <p className="text-sm">Likes: {photo.likes}
                                {altTextParts.slice(1).map((hashtag, index) => (
                                    <span key={index} className="text-blue-600 font-bold"> #{hashtag}</span>
                                ))}</p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

