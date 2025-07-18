"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const wildlifeImages = [
  {
    src: "/images/photography/wildlife/thumb.jpg",
    alt: "Close-up portrait of a Bengal tiger in its natural habitat",
    caption: "Bengal Tiger – India",
  },
  {
    src: "/images/photography/wildlife/travel1.jpg",
    alt: "Elephant family walking across the savannah during golden hour",
    caption: "Elephants – Kenya",
  },
  {
    src: "/images/photography/wildlife/travel2.jpg",
    alt: "Colorful toucan perched on a branch in the rainforest",
    caption: "Toucan – Costa Rica",
  },
  {
    src: "/images/photography/wildlife/travel3.jpg",
    alt: "A lion resting under the shade in Serengeti National Park",
    caption: "Lion – Tanzania",
  },
  {
    src: "/images/photography/wildlife/food1.jpg",
    alt: "Snow leopard caught mid-leap in the Himalayas",
    caption: "Snow Leopard – Himalayas",
  },
  {
    src: "/images/photography/wildlife/food2.jpg",
    alt: "A family of deer grazing in the dense forest",
    caption: "Deer – Canada",
  },
  {
    src: "/images/photography/wildlife/food3.jpg",
    alt: "Flamingos standing in a lake at sunset",
    caption: "Flamingos – Chile",
  },
];

export default function WildlifePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-green-50 to-green-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <Head>
        <title>Wildlife Photography Gallery | Nature Captured Through the Lens</title>
        <meta
          name="description"
          content="Explore a stunning wildlife photography gallery showcasing animals in their natural habitat from across the globe. Captured moments in nature, curated for you."
        />
        <meta property="og:title" content="Wildlife Photography Gallery" />
        <meta
          property="og:description"
          content="Immerse yourself in breathtaking wildlife photography — from tigers to toucans, lions to leopards."
        />
        <meta property="og:image" content="/images/photography/wildlife/thumb.jpg" />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-20 px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-extrabold text-green-900 dark:text-green-200 tracking-tight"
        >
          Wildlife Photography
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mt-4"
        >
          Discover the untamed beauty of wildlife across continents — from majestic predators to serene forest dwellers.
        </motion.p>
      </section>

      {/* Gallery Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-20">
        <div className="columns-1 sm:columns-2 md:columns-3 gap-6 space-y-6">
          {wildlifeImages.map((image, idx) => (
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
                  {image.caption}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-12 bg-white dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Want to Collaborate or Purchase Prints?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-xl mx-auto">
          Let's bring your space or story to life with powerful wildlife visuals. Get in touch today.
        </p>
        <a
          href="/contact"
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-full transition"
        >
          Contact Me
        </a>
      </section>
    </main>
  );
}
