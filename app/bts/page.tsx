'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, MapPin, Clock, Users } from 'lucide-react'

const btsContent = [
  {
    id: 1,
    type: 'image',
    src: '/images/bts/bts-1.jpg',
    title: 'Wedding Setup in Shimla',
    location: 'Shimla, Himachal Pradesh',
    date: '2024-03-15',
    description: 'Setting up multiple camera angles for the mountain wedding ceremony. The challenging terrain required creative positioning.',
    category: 'Wedding',
  },
  {
    id: 2,
    type: 'image',
    src: '/images/bts/bts-2.jpg',
    title: 'Food Photography Studio',
    location: 'Delhi Studio',
    date: '2024-02-28',
    description: 'Preparing the perfect lighting setup for a restaurant menu shoot. Every detail matters in food photography.',
    category: 'Food',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/bts/bts-3.jpg',
    title: 'Corporate Video Production',
    location: 'Gurugram Office',
    date: '2024-01-20',
    description: 'Directing the corporate brand film with a full crew. Professional lighting and sound setup for optimal results.',
    category: 'Corporate',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/bts/bts-4.jpg',
    title: 'Model Portfolio Shoot',
    location: 'Mumbai Studio',
    date: '2024-04-10',
    description: 'Working with natural light and reflectors for a model portfolio session. Communication is key to capturing personality.',
    category: 'Model',
  },
  {
    id: 5,
    type: 'image',
    src: '/images/bts/bts-5.jpg',
    title: 'Hotel Photography Setup',
    location: 'Luxury Resort, Goa',
    date: '2024-03-05',
    description: 'Capturing the essence of luxury hospitality. Each room tells a story of comfort and elegance.',
    category: 'Hotel',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/bts/bts-6.jpg',
    title: 'Product Photography Session',
    location: 'Creative Studio',
    date: '2024-02-15',
    description: 'Macro lens work for jewelry photography. Precision and patience are essential for capturing fine details.',
    category: 'Product',
  },
]

export default function BTSPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <Image
          src="/images/bts-hero.jpg"
          alt="Behind The Scenes"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto px-4"
          >
            <div className="w-16 h-16 mx-auto mb-6 bg-white/10 rounded-full flex items-center justify-center">
              <Camera className="w-8 h-8" />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Behind The Scenes</h1>
            <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
              The art, process, and passion that goes into creating every shot. Discover the stories behind the images.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              The Creative Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              Every great photograph or video begins long before the camera starts rolling. From location scouting 
              and equipment preparation to working with clients and managing unpredictable conditions, each project 
              is a unique adventure that requires creativity, technical skill, and adaptability.
            </p>
          </motion.div>
        </div>
      </section>

      {/* BTS Content Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {btsContent.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.src}
                    alt={item.title}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {item.category}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {item.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {new Date(item.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </div>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment & Tools Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Tools of the Trade
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              The right equipment is essential, but it's the creative vision and technical skill that bring images to life.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Camera className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Photography Gear</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Canon EOS R5 & R6 Mark II</li>
                <li>Professional L-series lenses</li>
                <li>Profoto lighting systems</li>
                <li>High-end tripods & stabilizers</li>
                <li>Reflectors & diffusers</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Video Equipment</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Cinema cameras & DSLRs</li>
                <li>Gimbal stabilizers</li>
                <li>Professional audio gear</li>
                <li>4K recording capabilities</li>
                <li>Drone for aerial shots</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-6">
                <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Post-Production</h3>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>Adobe Lightroom & Photoshop</li>
                <li>Premiere Pro & After Effects</li>
                <li>Color grading tools</li>
                <li>High-resolution monitors</li>
                <li>Powerful workstation setup</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              My Philosophy
            </h2>
            <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
              <blockquote className="text-xl text-gray-600 dark:text-gray-300 italic leading-relaxed mb-6">
                "Photography and videography are not just about technical perfection—they're about capturing 
                the essence of a moment, the emotion in a glance, and the story that unfolds naturally. 
                Every behind-the-scenes moment teaches us something new about light, composition, and the 
                human connection that makes each project unique."
              </blockquote>
              <cite className="text-gray-900 dark:text-white font-semibold">— Mohit Yadav</cite>
            </div>
          </motion.div>
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
              Want to Be Part of the Process?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the creative journey firsthand. Let's collaborate and create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
              >
                Start a Project
              </a>
              <a
                href="/photography"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-black transition-all duration-300"
              >
                View Portfolio
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
