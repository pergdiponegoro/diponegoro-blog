'use client';

import React, { useRef, useEffect, FC, useState } from 'react';
import { useKeenSlider } from 'keen-slider/react';
import { KeenSliderInstance } from 'keen-slider';
import { urlFor } from '../lib/sanity';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';

interface ImageSliderProps {
  images: { image: any; caption: string }[]; // Updated type to include caption
}

const ImageSlider: FC<ImageSliderProps> = ({ images }) => {
  const sliderInstance = useRef<KeenSliderInstance | null>(null);
  
  const [imageHeight, setImageHeight] = useState('600px');
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setImageHeight('300px');
      } else {
        setImageHeight('600px');
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const [sliderRefCallback] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'snap',
    slides: {
      perView: 1,
      spacing: 10,
    },
    created(s) {
      sliderInstance.current = s;
    },
    slideChanged(s) {
      setCurrentSlide(s.track.details.rel);
    },
    destroyed() {
      sliderInstance.current = null;
    },
  });

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    const autoplaySlider = () => {
      timeout = setTimeout(() => {
        if (sliderInstance.current) {
          sliderInstance.current.next();
        }
        autoplaySlider();
      }, 4000);
    };

    autoplaySlider();
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  const handlePrev = () => {
    if (sliderInstance.current) {
      sliderInstance.current.prev();
    }
  };

  const handleNext = () => {
    if (sliderInstance.current) {
      sliderInstance.current.next();
    }
  };

  return (
    <div
      ref={sliderRefCallback}
      className="keen-slider"
      style={{
        width: '100%',
        height: 'auto',
        position: 'relative',
      }}
    >
      {images.map((imageData, idx) => (
        <div
          key={idx}
          className="keen-slider__slide"
          style={{
            width: '100%',
            height: imageHeight,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            position: 'relative',
            borderRadius: '10px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)', // Add shadow for depth
          }}
        >
          <Image
            src={urlFor(imageData.image).url()}
            alt={imageData.caption || `Slide ${idx + 1}`}
            width={1260}
            height={600}
            style={{
              objectFit: 'cover',
              transition: 'transform 0.5s ease', // Smooth zoom effect
            }}
          />
          
          {/* Caption Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '20px',
              left: '50%',
              transform: 'translateX(-50%)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)', // Semi-transparent black
              padding: '10px 20px',
              borderRadius: '8px',
              color: 'white',
              fontSize: '1.2rem',
              fontWeight: '500',
              textAlign: 'center',
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)', // Text shadow for better readability
              width: '90%', // Responsive width
            }}
            className="caption"
          >
            {imageData.caption}
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={handlePrev}
        style={{
          position: 'absolute',
          top: '50%',
          left: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '50%', // Circular button
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 1,
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
      >
        ◀
      </button>

      <button
        onClick={handleNext}
        style={{
          position: 'absolute',
          top: '50%',
          right: '10px',
          transform: 'translateY(-50%)',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          padding: '10px',
          borderRadius: '50%',
          boxShadow: '0 2px 10px rgba(0,0,0,0.3)',
          cursor: 'pointer',
          zIndex: 1,
          transition: 'background-color 0.3s ease',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.7)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(0, 0, 0, 0.5)')}
      >
        ▶
      </button>

      {/* Indicator Dots */}
      <div
        style={{
          position: 'absolute',
          bottom: '10px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '8px',
        }}
      >
        {images.map((_, idx) => (
          <div
            key={idx}
            style={{
              width: '10px',
              height: '10px',
              borderRadius: '50%',
              backgroundColor: currentSlide === idx ? '#fff' : 'rgba(255, 255, 255, 0.5)',
              transition: 'background-color 0.3s ease',
              cursor: 'pointer',
            }}
            onClick={() => sliderInstance.current?.moveToIdx(idx)}
          ></div>
        ))}
      </div>

      <style jsx>{`
        .caption {
          font-size: 1rem;
          padding: 8px 16px;
        }
        @media (max-width: 768px) {
          .caption {
            font-size: 1rem; // Reduce font size for smaller screens
            padding: 5px 10px; // Reduce padding on smaller devices
            width: 100%;
            bottom: 10px; // Move caption higher on smaller screens
          }
        }
        @media (max-width: 480px) {
          .caption {
            font-size: 0.9rem; // Further reduce font size for very small screens
            padding: 5px 8px;
            width: 90%;
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default ImageSlider;
