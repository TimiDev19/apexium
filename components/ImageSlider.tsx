"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const images = [
    "/images/img1.png",
    "/images/img1.png",
    "/images/img1.png",
    "/images/img1.png",
    "/images/img1.png",
    "/images/img1.png",
    "/images/img1.png",
];

export default function ImageSlider() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change image every 3 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[50vh] flex justify-center items-center overflow-hidden">
            <motion.img
                key={index}
                src={images[index]}
                alt="Slideshow"
                className="absolute h-auto max-w-sm object-cover shadow-lg z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            />
        </div>
    );
}
