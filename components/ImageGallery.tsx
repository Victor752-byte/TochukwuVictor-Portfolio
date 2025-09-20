"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

type ImageGalleryProps = {
  images: string[]; // array of image URLs
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const closeModal = () => setSelectedIndex(null);
  const showPrev = () =>
    setSelectedIndex((i) =>
      i !== null ? (i - 1 + images.length) % images.length : null
    );
  const showNext = () =>
    setSelectedIndex((i) => (i !== null ? (i + 1) % images.length : null));

  // Lock scroll when modal is open
  useEffect(() => {
    if (selectedIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto"; // cleanup
    };
  }, [selectedIndex]);

  return (
    <div className="absolute bottom-0 inset-0 m-auto max-w-full max-h-full">
      {/* Card */}
      <div
        className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
        onClick={() => setSelectedIndex(0)}
      >
        <img
          src={images[0]}
          alt="design project"
          className="z-10 absolute bottom-0 inset-0 m-auto max-w-full max-h-full"
        />
      </div>

      {/* Fullscreen modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white text-3xl"
            >
              <X size={32} />
            </button>

            {/* Prev button */}
            {images.length > 1 && (
              <button
                onClick={showPrev}
                className="absolute left-4 text-white text-3xl"
              >
                <ChevronLeft size={40} />
              </button>
            )}

            {/* Image */}
            <motion.img
              key={selectedIndex}
              src={images[selectedIndex]}
              alt="Project screenshot"
              className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg z-20"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
            />

            {/* Next button */}
            {images.length > 1 && (
              <button
                onClick={showNext}
                className="absolute right-4 text-white text-3xl"
              >
                <ChevronRight size={40} />
              </button>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
