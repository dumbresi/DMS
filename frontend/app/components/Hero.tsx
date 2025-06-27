'use client'
import { useEffect, useState } from "react";

const images = [
  "/images/hero1.avif",
  "/images/hero2.jpg",
  "/images/hero3.jpg",
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000); // change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="relative h-[60vh] flex items-center justify-center text-white transition-all duration-1000"
      style={{
        backgroundImage: `url(${images[current]})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Expertise in Medical Care For You
        </h1>
        <div className="flex justify-center space-x-4">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded hover:bg-yellow-300 transition">
            Get a Quick Quote
          </button>
          <button className="border border-white px-5 py-2 rounded hover:bg-white hover:text-black transition">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}
