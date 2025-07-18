"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const travelImages = [
  {
    src: "/images/hero/travel1.webp",
    alt: "Sunrise over mountain range in the Himalayas",
    location: "Himalayas, India",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Colorful street in Lisbon, Portugal",
    location: "Lisbon, Portugal",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Night view of Tokyo cityscape",
    location: "Tokyo, Japan",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Snowy forest in Norway",
    location: "Tromsø, Norway",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Traditional boat on Lake Bled",
    location: "Lake Bled, Slovenia",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Desert dunes under sunset sky",
    location: "Sahara Desert, Morocco",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Historic architecture in Prague",
    location: "Prague, Czech Republic",
  },
  {
    src: "/images/hero/travel1.webp",
    alt: "Historic architecture in Prague",
    location: "Prague, Czech Republic",
  },
];

export default function TravelGallery() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-blue-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Head>
        <title>Travel Photography Gallery | Explore the World Through My Lens</title>
        <meta
          name="description"
          content="A breathtaking travel photography gallery capturing moments from around the globe. Explore destinations, culture, and landscapes through stunning imagery."
        />
        <meta property="og:title" content="Travel Photography Gallery" />
        <meta
          property="og:description"
          content="Explore the world through stunning travel photos. Mountains, beaches, cities & more."
        />
        <meta property="og:image" content="/images/photography/travel/travel1.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-blue-900 dark:text-blue-200 tracking-tight"
        >
          Travel Photography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Journey across continents through my lens. Each image tells a story, captures an emotion, and brings a piece of the world to you.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {travelImages.map((image, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative mb-6 break-inside-avoid group rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={800}
                className="object-cover w-full h-auto max-h-[500px] transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                loading={idx === 0 ? "eager" : "lazy"}
                priority={idx === 0}
              />
              <figcaption className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-start p-4 transition-opacity duration-300">
                <span className="text-white text-lg font-semibold drop-shadow-lg">
                  {image.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Interested in Prints or Booking a Shoot?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Let's bring your travel story to life. Reach out to collaborate or purchase high-resolution prints.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
