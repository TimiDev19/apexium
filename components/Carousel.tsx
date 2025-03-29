"use client"
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
    "/images/img1.jpg",
    "/images/img2.jpg",
    "/images/img3.jpg",
    "/images/img4.jpg",
    "/images/img5.jpg",
    "/images/img6.jpg",
    "/images/img7.jpg",
    "/images/img8.jpg",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative h-auto w-[65vw] mx-auto overflow-hidden rounded-lg shadow-lg bg-red-500">
      <div className="flex transition-transform duration-500 ease-in-out"
           style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full flex-shrink-0" />
        ))}
      </div>

      {/* Previous Button */}
      <button onClick={prevSlide} className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full cursor-pointer">
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button onClick={nextSlide} className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full cursor-pointer">
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
