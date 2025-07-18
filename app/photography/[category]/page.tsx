'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ArrowLeft, X, ChevronLeft, ChevronRight } from 'lucide-react'
import { PhotoProvider, PhotoView } from 'react-photo-view'
import 'react-photo-view/dist/react-photo-view.css'

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryData: Record<string, {
  name: string
  description: string
  images: string[]
}> = {
  model: {
    name: 'Model Photography',
    description: 'Capturing the essence of beauty, personality, and style through intimate and fashion portraits.',
    images: Array.from({ length: 10 }, (_, i) => `/images/photography/model/model${i + 1}.jpg`)
  },
  food: {
    name: 'Food Photography',
    description: 'Making culinary creations irresistible through artistic composition and lighting.',
    images: Array.from({ length: 10 }, (_, i) => `/images/photography/food/food${i + 1}.jpg`)
  },
  travel: {
    name: 'Travel Photography',
    description: 'Documenting adventures and capturing the soul of places around the world.',
    images: Array.from({ length: 10 }, (_, i) => `/images/photography/travel/travel${i + 1}.jpg`)
  },
  hotel: {
    name: 'Hotel Photography',
    description: 'Showcasing hospitality spaces with architectural precision and inviting atmosphere.',
    images: Array.from({ length: 10 }, (_, i) => `/images/photography/hotel/hotel${i + 1}.jpg`)
  },
  product: {
    name: 'Product Photography',
    description: 'Commercial photography that highlights features and creates desire for products.',
    images: Array.from({ length: 10 }, (_, i) => `/images/photography/product/product${i + 1}.jpg`)
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const category = categoryData[params.category]

  if (!category) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Category Not Found</h1>
          <Link href="/photography" className="text-blue-600 hover:underline">
            ← Back to Photography
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Link
              href="/photography"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Photography
            </Link>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              {category.name}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl">
              {category.description}
            </p>
            <div className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              {category.images.length} photos in this collection
            </div>
          </motion.div>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-8 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PhotoProvider
            speed={() => 800}
            easing={(type) => (type === 2 ? 'cubic-bezier(0.36, 0, 0.66, -0.56)' : 'cubic-bezier(0.34, 1.56, 0.64, 1)')}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {category.images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="group cursor-pointer"
                >
                  <PhotoView src={image}>
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
                      <Image
                        src={image}
                        alt={`${category.name} ${index + 1}`}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 dark:bg-black/90 p-3 rounded-full">
                          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </PhotoView>
                </motion.div>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </section>

      {/* Navigation to other categories */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Explore Other Collections
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(categoryData)
              .filter(([slug]) => slug !== params.category)
              .slice(0, 4)
              .map(([slug, data]) => (
                <Link key={slug} href={`/photography/${slug}`}>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-3">
                      <Image
                        src={`/images/photography/${slug}/thumb.jpg`}
                        alt={data.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="font-semibold">{data.name.replace(' Photography', '')}</h3>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  )
}
