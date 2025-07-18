'use client'

import { motion, useAnimation, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Camera, ArrowRight, MoveRight } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const categories = [
  {
    name: 'Model',
    slug: 'model',
    description: 'Portrait and fashion photography showcasing beauty and personality',
    images: Array(6).fill('/images/photography/model/thumb.jpg'),
    count: 1,
  },
  {
    name: 'Food',
    slug: 'food',
    description: 'Culinary artistry captured in delicious detail',
    images: Array(6).fill('/images/photography/food/thumb.jpg'),
    count: 1,
  },
  {
    name: 'Travel',
    slug: 'travel',
    description: 'Adventures and landscapes from around the world',
    images: Array(6).fill('/images/photography/travel/thumb.jpg'),
    count: 1,
  },
  {
    name: 'Hotel',
    slug: 'hotel',
    description: 'Architectural and interior photography for hospitality',
    images: Array(6).fill('/images/photography/hotel/thumb.jpg'),
    count: 1,
  },
  {
    name: 'Product',
    slug: 'product',
    description: 'Commercial photography that makes products shine',
    images: Array(6).fill('/images/photography/product/thumb.jpg'),
    count: 1,
  },
]

const PhotographyPage = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  // Auto-scrolling effect for galleries
  useEffect(() => {
    const galleryWrappers = document.querySelectorAll('.gallery-wrapper');
    
    galleryWrappers.forEach(wrapper => {
      const gallery = wrapper.querySelector('.gallery');
      if (!gallery) return;
      
      let scrollAmount = 0;
      const scrollSpeed = 0.5; // Slower scroll
      let animationId: number;
      
      const scrollGallery = () => {
        if (!wrapper.matches(':hover')) {
          scrollAmount += scrollSpeed;
          if (scrollAmount >= gallery.scrollWidth / 2) {
            scrollAmount = 0;
          }
          gallery.scrollLeft = scrollAmount;
        }
        animationId = requestAnimationFrame(scrollGallery);
      };
      
      scrollGallery();
      
      return () => {
        cancelAnimationFrame(animationId);
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section with Snow Mountains */}
     <section className="relative h-[80vh] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black z-10" />
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-40" />
          <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-[80px] opacity-30" />
        </div>
        
        <Image
          src="/images/photography-hero.jpg"
          alt="Photography"
          fill
          className="object-cover"
          priority
        />
        
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1, rotate: 360 }}
              transition={{ 
                duration: 0.8,
                type: "spring",
                stiffness: 200,
                damping: 15
              }}
              className="mb-8 inline-block"
            >
              <Camera className="w-16 h-16 mx-auto text-white" />
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Photography
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-gray-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 1 }}
            >
              Every frame tells a story. Explore my universe through these cosmic collections.
            </motion.p>
            
           
          </motion.div>
        </div>
      </section>

      {/* Photography Collections */}
      <section className="py-20" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
            }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
              Photography <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Collections</span>
            </h2>
            <p className="text-xl text-blue-700 max-w-3xl mx-auto">
              Discover different perspectives through my lens. Each collection represents a unique vision and style.
            </p>
          </motion.div>

          {/* Collection Sections */}
          <div className="space-y-32">
            {categories.map((category, index) => (
              <motion.div 
                key={category.slug}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
                onMouseEnter={() => setHoveredCategory(index)}
                onMouseLeave={() => setHoveredCategory(null)}
              >
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row items-center justify-between mb-8 gap-4">
                    <div className="text-center md:text-left">
                      <h3 className="text-3xl md:text-4xl font-bold text-blue-900 flex items-center justify-center md:justify-start gap-3">
                        <motion.span 
                          className="w-3 h-3 bg-blue-600 rounded-full"
                          animate={{ 
                            scale: hoveredCategory === index ? [1, 1.5, 1] : 1,
                          }}
                          transition={{ duration: 0.5 }}
                        />
                        {category.name} Collection
                      </h3>
                      <p className="text-blue-700 mt-2 max-w-xl">{category.description}</p>
                    </div>
                    <Link 
                      href={`/photography/${category.slug}`} 
                      className="group flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors font-medium px-6 py-3 bg-white rounded-full shadow-md hover:shadow-lg transition-shadow"
                    >
                      View all
                      <MoveRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  {/* Horizontal Scrolling Gallery */}
                  <div className="gallery-wrapper relative group">
                    {/* Fade effect on sides */}
                    <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                    
                    <div 
                      className="gallery flex overflow-x-auto pb-8 gap-8 scrollbar-hide"
                      style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                      {category.images.map((image, imgIndex) => (
                        <motion.div
                          key={imgIndex}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: imgIndex * 0.05 }}
                          viewport={{ once: true }}
                          className="flex-shrink-0 w-96 h-[28rem] relative rounded-2xl overflow-hidden group/card shadow-xl"
                        >
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent z-10" />
                          
                          <Image
                            src={image}
                            alt={`${category.name} ${imgIndex + 1}`}
                            fill
                            className="object-cover transition-all duration-700 group-hover/card:scale-105"
                          />
                          
                          {/* Hover overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 z-20">
                            <motion.div
                              initial={{ y: 30, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 0.4 }}
                              className="translate-y-6 group-hover/card:translate-y-0 transition-transform duration-300"
                            >
                              <h4 className="text-2xl font-bold text-white mb-2">
                                {category.name} #{imgIndex + 1}
                              </h4>
                              <p className="text-blue-100 text-base">
                                {category.description}
                              </p>
                            </motion.div>
                          </div>
                          
                          {/* Floating frame effect */}
                          <div className="absolute inset-0 border-4 border-transparent group-hover/card:border-white/40 transition-all duration-500 rounded-2xl" />
                          
                          {/* Floating badge */}
                          <div className="absolute top-6 right-6 bg-white/90 text-blue-900 px-4 py-2 rounded-full font-medium shadow-lg z-20">
                            <span className="flex items-center gap-2">
                              <Camera className="w-4 h-4" />
                              {category.name}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6 text-blue-900">
              Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-sky-500">Testimonials</span>
            </h2>
            <p className="text-xl text-blue-700 max-w-2xl mx-auto">
              What people say about working with me
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-xl border border-blue-100"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-blue-200 rounded-full flex items-center justify-center text-blue-800 font-bold mr-4">
                    {item}
                  </div>
                  <div>
                    <h4 className="font-bold text-blue-900">Sarah Johnson</h4>
                    <p className="text-blue-600 text-sm">Marketing Director</p>
                  </div>
                </div>
                <p className="text-blue-700 italic">
                  "Working with this photographer transformed our brand imagery. The attention to detail and creative vision exceeded all expectations."
                </p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden bg-gradient-to-r from-blue-700 to-sky-600">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full filter blur-[100px] opacity-40" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-blue-500/20 rounded-full filter blur-[120px] opacity-30" />
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-100">Capture Moments</span>?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              From portraits to products, I bring your vision to life with creativity and technical excellence.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 bg-white text-blue-800 px-8 py-4 rounded-full font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg shadow-blue-900/30 hover:shadow-blue-900/40 group"
            >
              Book a Session
              <motion.div 
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="relative"
              >
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </motion.div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center gap-3">
                <Camera className="w-8 h-8 text-blue-300" />
                <span className="text-2xl font-bold text-white">Photography</span>
              </div>
              <p className="mt-2 text-blue-200">Capturing the world, one frame at a time</p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-6">
                {['Instagram', 'Twitter', 'Facebook', 'Pinterest'].map((social, index) => (
                  <a 
                    key={index} 
                    href="#" 
                    className="text-blue-200 hover:text-white transition-colors"
                  >
                    {social}
                  </a>
                ))}
              </div>
              <p className="mt-4 text-blue-300">© {new Date().getFullYear()} Photography Portfolio. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default PhotographyPage;