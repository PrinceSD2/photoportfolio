'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { Video, Play, X } from 'lucide-react'

// Custom hook for autoplay on scroll
function useAutoplayOnScroll(ref: React.RefObject<HTMLVideoElement>) {
  useEffect(() => {
    const video = ref.current
    if (!video) return

    const handlePlay = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          video.play()
        } else {
          video.pause()
        }
      })
    }

    const observer = new window.IntersectionObserver(handlePlay, {
      threshold: 0.5,
    })
    observer.observe(video)

    return () => observer.disconnect()
  }, [ref])
}

export default function VideographyPage() {
  // Refs for videos
  const featuredVideoRef = useRef<HTMLVideoElement>(null)
  const otherVideo1Ref = useRef<HTMLVideoElement>(null)
  const otherVideo2Ref = useRef<HTMLVideoElement>(null)

  useAutoplayOnScroll(featuredVideoRef)
  useAutoplayOnScroll(otherVideo1Ref)
  useAutoplayOnScroll(otherVideo2Ref)

  // Hover states for overlays
  const [hoveredFeatured, setHoveredFeatured] = useState(false)
  const [hoveredOther1, setHoveredOther1] = useState(false)
  const [hoveredOther2, setHoveredOther2] = useState(false)

  // Modal states
  const [modalVideo, setModalVideo] = useState<null | 'featured' | 'wildlife' | 'bts'>(null)
  const modalVideoSrc = {
    featured: "/images/hero/tigerrrr.mp4",
    wildlife: "/images/hero/wildlife.mp4",
    bts: "/images/hero/Behind The Scenes.mp4"
  }
  const modalPoster = {
    featured: "/images/videos/featured-thumb.jpg",
    wildlife: "/images/videos/wedding-1.jpg",
    bts: "/images/videos/corporate-1.jpg"
  }

  // Close modal when video ends
  const handleVideoEnd = () => setModalVideo(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="absolute inset-0 w-full h-full"
        >
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover brightness-90"
          >
            <source src="/images/hero/TIGER (insta).mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-transparent to-black/60" />
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <motion.div
              initial={{ rotate: -10, scale: 0.7, opacity: 0 }}
              animate={{ rotate: 0, scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="flex justify-center"
            >
              <Video className="w-20 h-20 mx-auto mb-6 text-blue-400 drop-shadow-lg animate-bounce" />
            </motion.div>
            <motion.h1
              initial={{ letterSpacing: '0.5em', opacity: 0 }}
              animate={{ letterSpacing: 'normal', opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8 }}
              className="text-6xl md:text-7xl font-extrabold mb-4 drop-shadow-xl"
            >
              Videography
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-2xl md:text-3xl font-light mb-2 drop-shadow"
            >
              Cinematic storytelling for brands, couples, and creators.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-lg text-blue-200 drop-shadow"
            >
              Professional films that inspire, engage, and move your audience.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Featured Video */}
      <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-2xl relative group border-4 border-blue-200 dark:border-blue-900"
            onMouseEnter={() => setHoveredFeatured(true)}
            onMouseLeave={() => setHoveredFeatured(false)}
            onClick={() => setModalVideo('featured')}
            style={{ cursor: 'pointer' }}
          >
            <div className="relative w-full aspect-video">
              <motion.video
                ref={featuredVideoRef}
                src="/images/hero/tigerrrr.mp4"
                controls
                muted
                className={`w-full h-full object-cover rounded-3xl transition-transform duration-500 ${hoveredFeatured ? 'scale-105 brightness-110' : ''}`}
                poster="/images/videos/featured-thumb.jpg"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: 'easeOut' }}
              />
              {/* Overlay on hover */}
              {hoveredFeatured && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.9 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-purple-700/70 to-blue-900/80 flex items-center justify-center"
                >
                  <Play className="w-16 h-16 text-white animate-pulse" />
                </motion.div>
              )}
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute top-4 left-4 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-semibold shadow-lg"
              >
                Featured
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.5 }}
                className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded text-sm"
              >
                5:00
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="p-8 bg-white dark:bg-gray-900"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-2 text-blue-900 dark:text-blue-200 group-hover:text-purple-700 transition-colors duration-300">Featured Film: The Journey</h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-lg">
                A cinematic story that captures the essence of adventure and emotion.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Other Videos */}
      <section className="py-16 bg-gradient-to-r from-blue-100 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-blue-900 dark:text-blue-200 tracking-tight">
              More Creations
            </h2>
            <p className="text-lg text-blue-700 dark:text-blue-300 max-w-2xl mx-auto">
              Explore our portfolio of creative videos.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12">
            {/* Video 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border-4 border-pink-200 dark:border-pink-900 relative"
              onMouseEnter={() => setHoveredOther1(true)}
              onMouseLeave={() => setHoveredOther1(false)}
              onClick={() => setModalVideo('wildlife')}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative w-full aspect-video">
                <motion.video
                  ref={otherVideo1Ref}
                  src="/images/hero/wildlife.mp4"
                  controls
                  muted
                  className={`w-full h-full object-cover rounded-3xl transition-transform duration-500 ${hoveredOther1 ? 'scale-105 brightness-110' : ''}`}
                  poster="/images/videos/wedding-1.jpg"
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                {/* Overlay on hover */}
                {hoveredOther1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-pink-700/80 via-purple-700/70 to-pink-900/80 flex items-center justify-center"
                  >
                    <Play className="w-16 h-16 text-white animate-pulse" />
                  </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                >
                  Wildlife
                </motion.div>
              </div>
            </motion.div>
            {/* Video 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 1, ease: 'easeOut', delay: 0.1 }}
              viewport={{ once: true }}
              className="group rounded-3xl overflow-hidden shadow-xl bg-white dark:bg-gray-900 border-4 border-blue-200 dark:border-blue-900 relative"
              onMouseEnter={() => setHoveredOther2(true)}
              onMouseLeave={() => setHoveredOther2(false)}
              onClick={() => setModalVideo('bts')}
              style={{ cursor: 'pointer' }}
            >
              <div className="relative w-full aspect-video">
                <motion.video
                  ref={otherVideo2Ref}
                  src="/images/hero/Behind The Scenes.mp4"
                  controls
                  muted
                  className={`w-full h-full object-cover rounded-3xl transition-transform duration-500 ${hoveredOther2 ? 'scale-105 brightness-110' : ''}`}
                  poster="/images/videos/corporate-1.jpg"
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                />
                {/* Overlay on hover */}
                {hoveredOther2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.9 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 bg-gradient-to-br from-blue-700/80 via-purple-700/70 to-blue-900/80 flex items-center justify-center"
                  >
                    <Play className="w-16 h-16 text-white animate-pulse" />
                  </motion.div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                  className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-lg"
                >
                  Behind The Scenes
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                  className="absolute top-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-xs"
                >
                  2:30
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modal for enlarged video */}
      <AnimatePresence>
        {modalVideo && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative w-[90vw] max-w-5xl h-[70vh] flex items-center justify-center"
            >
              <video
                src={modalVideoSrc[modalVideo]}
                poster={modalPoster[modalVideo]}
                controls
                autoPlay
                onEnded={handleVideoEnd}
                className="w-full h-full object-cover rounded-3xl shadow-2xl border-4 border-blue-400"
              />
              <button
                onClick={() => setModalVideo(null)}
                className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2 hover:bg-black/90 transition"
                aria-label="Close"
              >
                <X className="w-7 h-7" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
              Ready to Tell Your Story?
            </h2>
            <p className="text-lg mb-8">
              Let's collaborate to create a film that captures your vision and connects with your audience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-100 transition-all duration-300 shadow-lg hover:scale-105"
              >
                Start Your Project
              </Link>
              <Link
                href="/bts"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-900 transition-all duration-300 shadow-lg hover:scale-105"
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