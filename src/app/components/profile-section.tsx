'use client'

import Image from 'next/image'

import { useState, useEffect } from 'react'
import { format } from 'date-fns'
import { Quote } from 'lucide-react'

const quotes = [
    { text: "The world is a book and those who do not travel read only one page.", author: "St. Augustine" },
    { text: "Travel is fatal to prejudice, bigotry, and narrow-mindedness.", author: "Mark Twain" },
    { text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", author: "Marcel Proust" },
    { text: "Travel makes one modest. You see what a tiny place you occupy in the world.", author: "Gustave Flaubert" },
    { text: "We travel not to escape life, but for life not to escape us.", author: "Anonymous" }
]

export default function ProfileSection() {
    // Initialize quote based on the server's rendered value (static for hydration)
    const initialQuoteIndex = new Date().getDate() % quotes.length
    const [quote, setQuote] = useState(quotes[initialQuoteIndex])

    const [formattedDate, setFormattedDate] = useState('')
    useEffect(() => {
        setFormattedDate(format(new Date(), 'd MMMM, yyyy'))
    }, [])

    // Optionally update quote dynamically after hydration
    useEffect(() => {
        const today = new Date()
        const quoteIndex = today.getDate() % quotes.length
        setQuote(quotes[quoteIndex])
    }, [])

    return (
        <section className="relative bg-slate-950 py-16">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row gap-8">
                    {/* Profile Section */}
                    <div className="md:w-1/2">
                        <div className="bg-white/60 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center mb-4">
                                    <Image
                                        src="/profile/ronak.jpg"
                                        alt="Ronaksinh"
                                        width={100}
                                        height={100}
                                        className="rounded-full border-4 border-blue-500"
                                    />
                                    <div className="ml-4">
                                        <h2 className="text-2xl font-bold text-gray-800">Ronak</h2>
                                        <p className="text-gray-600">Travel Photographer</p>
                                    </div>
                                </div>
                                <p className="text-gray-700 leading-relaxed">
                                    Passionate travel photographer with a keen eye for capturing the essence of diverse cultures and breathtaking landscapes.
                                    My journey has taken me across continents, allowing me to share the worlds beauty through my lens.
                                    Join me as I continue to explore and document the wonders our planet has to offer.
                                </p>
                            </div>
                        </div>
                    </div>
                    {/* Quote Section */}
                    <div className="md:w-1/2">
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg shadow-lg overflow-hidden">
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center">
                                        <Quote className="text-blue-500 mr-2" size={24} />
                                        <h3 className="text-xl font-semibold text-gray-800">Quote of the Day</h3>
                                    </div>
                                    <span className="text-gray-500 text-sm">
                                        {formattedDate}
                                    </span>
                                </div>
                                <blockquote className="text-gray-700 italic mb-2">&quot;{quote.text}&quot;</blockquote>
                                <p className="text-right text-gray-600">- {quote.author}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}