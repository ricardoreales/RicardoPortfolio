'use client'
import { useEffect, useRef, useState } from 'react';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import Image from 'next/image';

const AppleGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    { src: gallery1, title: "Arquitectura Moderna", subtitle: "Diseño contemporáneo y funcional" },
    { src: gallery2, title: "Diseño de Producto", subtitle: "Elegancia en cada detalle" },
    { src: gallery3, title: "Espacios Interiores", subtitle: "Ambientes que inspiran" },
    { src: gallery4, title: "Arte Digital", subtitle: "Creatividad sin límites" }
  ];

  useEffect(() => {
    
    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const windowHeight = window.innerHeight;

      // Calculate when the gallery section is in view
      const startOffset = windowHeight * 0.1; // Start animation when 10% from top
      const endOffset = windowHeight * 0.9;   // End animation when 90% from top

      if (containerTop <= startOffset && containerTop >= -(containerHeight - endOffset)) {
        // Simplified calculation - the gallery should complete its horizontal scroll
        // when we've scrolled through the entire container height minus one viewport
        const totalScrollDistance = containerHeight - windowHeight;
        const currentScroll = Math.max(0, startOffset - containerTop);
        const progress = Math.max(0, Math.min(1, currentScroll / totalScrollDistance));

        // Smooth easing function for natural movement
        const easeProgress = progress * progress * (3 - 2 * progress); // smoothstep

        // Calculate translation based on track width and image positioning
        // Each image takes (100 / images.length)% of the track width
        // To show all images, we need to translate (images.length - 1) * (100 / images.length)%
        const imageWidthPercentage = 100 / images.length;
        const maxTranslate = (images.length - 1) * imageWidthPercentage;
        const translateX = easeProgress * maxTranslate;

        // Apply transformation with GPU acceleration
        trackRef.current.style.transform = `translate3d(-${translateX}%, 0, 0)`;

        // Update current index for progress indicator - sync with actual image position
        // Calculate based on the actual translation percentage relative to image width
        const currentImageIndex = Math.round(translateX / imageWidthPercentage);
        setCurrentIndex(Math.max(0, Math.min(images.length - 1, currentImageIndex)));
      }
    };

    // Use requestAnimationFrame for smooth scrolling
    let ticking = false;
    const smoothScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', smoothScroll, { passive: true });
    return () => window.removeEventListener('scroll', smoothScroll);
  }, [images.length]);

  return (
    <section id="gallery" ref={containerRef} className=" relative bg-red-50" 
    
    style={{
      height: `${images.length * 100}vh`
    }}
    >
      <div className="bg-gradient-to-b from-background via-secondary to-background h-screen !sticky top-0 overflow-hidden">
        <div className="h-full flex items-center relative" >
          {/* Gallery content */}
          <div className="w-full overflow-hidden px-6">
            <div 
              ref={trackRef}
              className="flex transition-none will-change-transform"
              style={{ 
                width: `${images.length * 100}%`,
                backfaceVisibility: 'hidden',
                // perspective: '1000px'
              }}
            >
              {images.map((image, index) => (
                <div 
                  key={index}
                  className="flex-shrink-0 px-6 flex items-center justify-center"
                  style={{ width: `${100 / images.length}%` }}
                >
                  <div className="relative group max-w-5xl w-full">
                    <div className="glow-card rounded-3xl overflow-hidden transform transition-all duration-700 group-hover:scale-[1.02]">
                      <div className="relative">
                        <Image 
                          src={image.src}
                          alt={image.title}
                          className="w-full h-[80vh] object-cover"
                        />
                        {/* Gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                        
                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-12">
                          <div className="space-y-4">
                            <div className="inline-block px-4 py-2 bg-gold/20 backdrop-blur-sm rounded-full">
                              <span className="text-gold text-sm font-medium">
                                Proyecto {String(index + 1).padStart(2, '0')}
                              </span>
                            </div>
                            <h3 className="text-4xl lg:text-5xl font-light text-white leading-tight">
                              {image.title}
                            </h3>
                            <p className="text-xl text-white/80 max-w-md">
                              {image.subtitle}
                            </p>
                            <div className="w-24 h-1 bg-gradient-to-r from-gold to-silver rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Enhanced progress indicator */}
          <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2">
            <div className="flex items-center space-x-3 bg-black/20 backdrop-blur-sm px-6 py-3 rounded-full">
              {images.map((_, index) => (
                <div 
                  key={index}
                  className={`transition-all duration-500 rounded-full ${
                    currentIndex === index 
                      ? 'bg-gold w-8 h-2' 
                      : 'bg-white/30 w-2 h-2 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default AppleGallery;