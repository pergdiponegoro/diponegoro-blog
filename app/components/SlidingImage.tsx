// components/SlidingImage.tsx
"use client"; // Ensure this is a client component

import { motion } from 'framer-motion';
import React from 'react';

const SlidingImage: React.FC = () => {
  return (
    <div
      style={{
        position: 'relative', // Required for absolute positioning of text
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',  // Hide overflow while image is sliding in
      }}
    >
      {/* Darkened sliding image */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}  // Start position (above viewport)
        animate={{ y: 0, opacity: 1 }}     // End position (in viewport)
        transition={{ duration: 1 }}        // Animation duration
        style={{
          width: '100%',
          position: 'relative', // Maintain context for absolute children
        }}
      >
        <img
          src="/images/gambar-1.jpg"
          alt="Sliding from Above"
          style={{
            width: '1216px',  // Default width for larger screens
            height: 'auto',  // Maintain aspect ratio
            filter: 'brightness(50%)',  // Darken the image
          }}
        />

        {/* Overlay text */}
        <div
          style={{
            position: 'absolute',
            top: '45%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center text
            color: 'white',  // Text color
            fontSize: '2vw',  // Responsive font size
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Optional: Add shadow to text for better readability
            zIndex: 2,  // Ensure text appears above the image
          }}
        >
          PERGURUAN
        </div>
        <div style={{
            position: 'absolute',
            top: '52%',
            left: '50%',
            transform: 'translate(-50%, -50%)', // Center text
            color: 'white',  // Text color
            fontSize: '2vw',  // Responsive font size
            fontWeight: 'bold',
            textShadow: '2px 2px 5px rgba(0, 0, 0, 0.7)', // Optional: Add shadow to text for better readability
            zIndex: 2,  // Ensure text appears above the image
          }}
        >
          DIPONEGORO KISARAN
        </div>
      </motion.div>
    </div>
  );
};

export default SlidingImage;
