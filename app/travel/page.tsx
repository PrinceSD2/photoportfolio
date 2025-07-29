"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";

const travelImages = [
  {
    src: "/images/photography/travel/t1.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Chicham bridge (Highest Suspension bridges in asia)",
  },
  {
    src: "/images/photography/travel/t2.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Kid portrait in spiti",
  },
  {
   src: "/images/photography/travel/t3.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Mountain dog- Manali",
  },
  {
   src: "/images/photography/travel/t4.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Kibber, spiti",
  },

  {
    src: "/images/photography/travel/t6.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Snow leopard expidition in Ladakh",
  },
  {
   src: "/images/photography/travel/t7.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Black & white portrait in spiti",
  },
  {
    src: "/images/photography/travel/t8.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "B & W Portrait in Spiti",
  },
  {
    src: "/images/photography/travel/t9.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Kibber village",
  },
  {
    src: "/images/photography/travel/t10.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Last village of spiti)",
  },
  {
    src: "/images/photography/travel/t11.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },
  {
    src: "/images/photography/travel/t12.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Sun rising in kibber village",
  },
  {
    src: "/images/photography/travel/t15.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Stunning sunrise at chandrshila", 
  },
  {
    src: "/images/photography/travel/t17.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "chopta view point",
  },
  {
    src: "/images/photography/travel/t18.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "several prominent peaks like Trishul, Nanda Devi, and Chaukhamba",
  },{
    src: "/images/photography/travel/t19.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Chandrshila peak",
  },
  {
    src: "/images/photography/travel/t20.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Himalayan peaks - Meru, Sumeru, Ganesh Parwat, Chaukhamba, Bandarpunch, Nilkantha, Tirsuli, Nanda Devi",
  },
  {
    src: "/images/photography/travel/t21.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Manna village",

  },{
    src: "/images/photography/travel/t22.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },{
    src: "/images/photography/travel/t23.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },{
    src: "/images/photography/travel/t25.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },{
    src: "/images/photography/travel/t27.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },{
    src: "/images/photography/travel/t28.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },{
    src: "/images/photography/travel/t29.jpg",
    alt: "Palm trees on a tropical beach in Bali",
    location: "Bali, Indonesia",
  },
];

export default function TravelGallery() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  function openImage(image) {
    setSelectedImage(image);
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
    setSelectedImage(null);
  }

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
      <section className="max-w-screen-2xl mx-auto px-2 sm:px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {travelImages.map((image, idx) => (
            <motion.figure
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.08 }}
              viewport={{ once: true }}
              className="relative group rounded-2xl overflow-hidden shadow-2xl hover:shadow-2xl transition-shadow cursor-pointer border-2 border-blue-200 dark:border-blue-800 bg-white dark:bg-gray-900"
              onClick={() => openImage(image)}
            >
              <div className="relative w-full h-[450px] md:h-[550px] lg:h-[650px] bg-black flex items-center justify-center">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: "contain" }}
                  className="transition-transform duration-500 group-hover:scale-105"
                  loading={idx === 0 ? "eager" : "lazy"}
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 flex items-end justify-start p-4 transition-opacity duration-300">
                <span className="text-white text-xl font-semibold drop-shadow-lg">
                  {image.location}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>

      {/* Modal for selected image */}
      {modalOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="w-screen h-screen flex items-center justify-center relative"
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-6 right-10 text-white text-4xl font-bold z-10"
              onClick={closeModal}
            >
              &times;
            </button>
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                style={{ objectFit: "contain" }}
                className="w-full h-full"
                priority
              />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-center font-semibold text-2xl text-white bg-gradient-to-t from-black/80 via-transparent to-transparent">
              {selectedImage.location}
            </div>
          </div>
        </div>
      )}

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
