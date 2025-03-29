"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const images = [
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
  "/images/img1.png",
  "/images/img2.png",
  "/images/img3.png",
  "/images/img4.png",
];

const InfiniteCarousel = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex space-x-4"
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{
          repeat: Infinity,
          repeatType: "loop",
          duration: 20, // Adjust for speed
          ease: "linear",
        }}
      >
        {[...images, ...images].map((src, index) => (
          <div key={index} className=" w-[50px] h-[50px] lg:w-[80px] lg:h-[80px] rounded-full flex-shrink-0 overflow-hidden relative">
            <Image
              src={src}
              alt={`carousel-image-${index}`}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteCarousel;
