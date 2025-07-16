'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Play, Video, ExternalLink } from 'lucide-react'

const videos = [
  {
    id: 1,
    title: 'Wedding Highlights - Rohan & Priya',
    category: 'Wedding',
    duration: '3:45',
    thumbnail: '/images/videos/wedding-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'A beautiful celebration of love captured in the hills of Shimla',
  },
  {
    id: 2,
    title: 'Corporate Brand Film - Tech Solutions',
    category: 'Corporate',
    duration: '2:30',
    thumbnail: '/images/videos/corporate-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Dynamic corporate video showcasing innovation and technology',
  },
  {
    id: 3,
    title: 'Product Launch - Fashion Collection',
    category: 'Promo',
    duration: '1:20',
    thumbnail: '/images/videos/promo-1.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Stylish promotional video for a new fashion line',
  },
  {
    id: 4,
    title: 'Destination Wedding - Goa',
    category: 'Wedding',
    duration: '4:15',
    thumbnail: '/images/videos/wedding-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Beach wedding celebration with stunning ocean views',
  },
  {
    id: 5,
    title: 'Hotel Showcase - Luxury Resort',
    category: 'Corporate',
    duration: '2:45',
    thumbnail: '/images/videos/corporate-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Elegant presentation of premium hospitality services',
  },
  {
    id: 6,
    title: 'Music Video - Indie Artist',
    category: 'Promo',
    duration: '3:20',
    thumbnail: '/images/videos/promo-2.jpg',
    videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ',
    description: 'Creative music video with artistic cinematography',
  },
]

const categories = ['All', 'Wedding', 'Corporate', 'Promo']

export default function VideographyPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/videography-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto px-4"
          >
            <Video className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Videography</h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              Bringing stories to life through motion, emotion, and cinematic excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
              Video Portfolio
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From intimate weddings to dynamic corporate stories, each video is crafted with passion and precision.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center mb-12"
          >
            <div className="flex bg-gray-100 dark:bg-gray-800 rounded-full p-1">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-white hover:shadow-md dark:hover:bg-gray-700"
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Videos Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative aspect-video overflow-hidden rounded-lg mb-4 bg-gray-900">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300">
                    <div className="bg-white/90 p-4 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-gray-900 ml-1" />
                    </div>
                  </div>
                  
                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                    {video.duration}
                  </div>
                  
                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {video.category}
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {video.description}
                  </p>
                  <a
                    href={video.videoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 text-sm font-medium"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Production Services */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Video Production Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional videography services tailored to your unique needs and vision.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center">
                  <Play className="w-4 h-4 text-white ml-0.5" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Wedding Films</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Cinematic wedding videos that capture every emotion and precious moment of your special day.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Pre-wedding shoots</li>
                <li>• Ceremony highlights</li>
                <li>• Reception coverage</li>
                <li>• Multi-camera setup</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                  <Video className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Corporate Videos</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Professional corporate content that effectively communicates your brand message and values.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Brand documentaries</li>
                <li>• Product launches</li>
                <li>• Company profiles</li>
                <li>• Training videos</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Promotional Content</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Creative promotional videos that engage your audience and drive results for your business.
              </p>
              <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
                <li>• Social media content</li>
                <li>• Music videos</li>
                <li>• Event coverage</li>
                <li>• Commercial ads</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Ready to Tell Your Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's collaborate to create a video that captures your vision and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start Your Project
              </Link>
              <Link
                href="/bts"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                See Behind The Scenes
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
