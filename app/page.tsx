'use client'

import { motion } from 'framer-motion'
import { ChevronDown, Play, Camera, Video, Instagram, Mail } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect, useRef } from 'react'

const heroImages = [
  '/images/hero/hero1.jpg',
  '/images/hero/hero2.jpg',
  '/images/hero/hero3.jpg',
  '/images/hero/hero4.jpg',
]

// Added slider images
const sliderImages = [
  '/images/slider/slide1.jpg',
  '/images/slider/slide2.jpg',
  '/images/slider/slide3.jpg',
  '/images/slider/slide4.jpg',
]

export default function HomePage() {
  const [currentImage, setCurrentImage] = useState(0)
  const [currentSlider, setCurrentSlider] = useState(0)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Hero image slideshow effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  // Slider auto-play effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlider((prev) => (prev + 1) % sliderImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  // Handle slider navigation
  const goToSlide = (index: number) => {
    setCurrentSlider(index)
  }

  return (
    <div className="min-h-screen">
      <div className="hidden md:block">
        <div className="fixed bottom-8 right-8 flex space-x-2 z-50">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentImage(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImage ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hero Section - Height decreased */}
      <section className="relative h-[85vh] overflow-hidden">
        {/* Background Slideshow */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImage ? 1 : 0 }}
              transition={{ duration: 1.5 }}
            >
              <Image
                src={image}
                alt={`Hero ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
            </motion.div>
          ))}
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-left h-full text-white">
          {/* Left Content - Profile photo added */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full md:w-1/2 px-6 md:px-12 py-12"
          >
            <div className="max-w-lg">
              {/* Profile Photo - Added */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="mb-6"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <Image
                    src="/images/hero/hero1.jpg"
                    alt="Mohit Yadav"
                    width={128}
                    height={128}
                    className="object-cover w-full h-full"
                  />
                </div>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.7 }}
                className="text-4xl md:text-6xl font-bold mb-4 leading-tight"
              >
                Mohit Yadav
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.9 }}
                className="text-xl md:text-2xl mb-6 font-light"
              >
                Wildlife & Travel Photographer
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.1 }}
                className="text-base md:text-lg mb-8 max-w-xl opacity-90"
              >
                <p className="mb-4">
                  Based in Gurugram, India, I'm a passionate photographer specializing in wildlife and travel. 
                  From intimate portraits to grand landscapes, I bring stories to life through my lens.
                </p>
                <p>
                  When I'm not behind the camera, you'll find me exploring jungle safaris 
                  and discovering the beauty of nature photography.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href="/wildlife"
                  className="group bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center gap-2"
                >
                  <Camera className="w-5 h-5" />
                  Wildlife Gallery
                </Link>
                
                <Link
                  href="/travel"
                  className="group border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
                >
                  <Video className="w-5 h-5" />
                  Travel Adventures
                </Link>
              </motion.div>
            </div>
          </motion.div>

          
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
        Featured Work
      </h2>
      <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
        A curated selection of my best photography and cinematography work
      </p>
    </motion.div>
    
    <div className="flex flex-col items-center gap-16">
      {/* Wildlife Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        viewport={{ once: true }}
        className="group cursor-pointer w-full max-w-[1950px] max-h-auto"
        // style={{ marginLeft: 'calc(50% - 50vw)', marginRight: 'calc(50% - 50vw)' }}
      >
        <Link href="/wildlife">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <video
              src="/images/hero/wildlife.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0 group-hover:scale-110 transition-transform duration-700"
              poster="/images/hero/hero4.jpg"
            />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-8 left-8 text-white">
          <Camera className="w-8 h-8 mb-3" />
          <h3 className="text-3xl font-bold mb-2">Wildlife</h3>
          <p className="text-base opacity-90">Animals • Nature • Safari</p>
        </div>
          </div>
        </Link>
      </motion.div>

      

      {/* Travel Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="group cursor-pointer w-full max-w-[1950px] max-h-auto"
      >
        <Link href="/travel">
            <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <video
              src="/images/hero/travel.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0 group-hover:scale-110 transition-transform duration-700"
              poster="/images/hero/hero4.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <Video className="w-8 h-8 mb-3" />
              <h3 className="text-3xl font-bold mb-2">Travel</h3>
              <p className="text-base opacity-90">Landscapes • Culture • Adventures</p>
            </div>
            </div>
        </Link>
      </motion.div>

      
      {/* Behind The Scenes Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
        className="group cursor-pointer w-full max-w-[1950px] max-h-auto"
      >
        <Link href="/bts">
          <div className="relative aspect-video overflow-hidden rounded-xl shadow-2xl">
            <video
              src="/images/hero/Behind The Scenes.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="object-cover w-full h-full absolute inset-0 group-hover:scale-110 transition-transform duration-700"
              poster="/images/hero/hero4.jpg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <div className="w-8 h-8 mb-3 rounded-full bg-white/20 flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-full" />
              </div>
              <h3 className="text-3xl font-bold mb-2">Behind The Scenes</h3>
              <p className="text-base opacity-90">Process • Setup • Stories</p>
            </div>
          </div>
        </Link>
      </motion.div>
    </div>
  </div>
</section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to capture your story? I'd love to hear about your project and bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Get In Touch
              </Link>
              <div className="flex items-center gap-4">
                <a
                  href="mailto:mohitydv6014@gmail.com"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Mail className="w-6 h-6" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-white/20 rounded-full hover:bg-white/10 transition-colors"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}