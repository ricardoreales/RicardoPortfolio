'use client'

import { motion, PanInfo, useMotionValue, useSpring } from 'framer-motion'
import { useState, useCallback, useEffect, useRef } from 'react'
import svgPaths from "../imports/svg-f28hnmr0fk"
// import imgVector from "figma:asset/219586c08e753a22d465cfaf9731ba3a2c71ac55.png"
const imgVector = "https://cdn.lottiefiles.com/packages/lf20_r3je0esobx.json"
const projects = [
  {
    id: 1,
    title: 'UX Research',
    category: 'User Experience',
    company: 'Emtech Institute',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop',
    description: 'Complete UX research project for fintech application'
  },
  {
    id: 2,
    title: 'UI Design',
    category: 'Interface Design',
    company: 'Tech Solutions',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&h=600&fit=crop',
    description: 'Modern interface design for mobile application'
  },
  {
    id: 3,
    title: 'Brand Identity',
    category: 'Visual Design',
    company: 'Creative Studio',
    image: 'https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=400&h=600&fit=crop',
    description: 'Complete brand identity and visual system'
  },
  {
    id: 4,
    title: 'Web Development',
    category: 'Development',
    company: 'Digital Agency',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=600&fit=crop',
    description: 'Full-stack web application development'
  },
  {
    id: 5,
    title: 'Mobile App',
    category: 'App Development',
    company: 'Startup Inc',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop',
    description: 'Native mobile application for iOS and Android'
  },
  {
    id: 6,
    title: 'Data Analysis',
    category: 'Analytics',
    company: 'Data Corp',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=600&fit=crop',
    description: 'Advanced data analytics and visualization'
  }
]

export function ModernCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  
  // Motion values
  const x = useMotionValue(0)
  const springX = useSpring(x, { damping: 30, stiffness: 400 })
  
  // Responsive configuration
  const isMobile = windowWidth < 768
  const isTablet = windowWidth >= 768 && windowWidth < 1024
  
  // Calculate dimensions based on screen size
  const getCardDimensions = () => {
    if (isMobile) {
      return {
        cardWidth: Math.min(280, windowWidth - 40), // 20px padding on each side
        cardGap: 20,
        cardsToShow: 1
      }
    } else if (isTablet) {
      return {
        cardWidth: 280,
        cardGap: 24,
        cardsToShow: 2.5
      }
    } else {
      return {
        cardWidth: 300,
        cardGap: 32,
        cardsToShow: 3.2
      }
    }
  }
  
  const { cardWidth, cardGap, cardsToShow } = getCardDimensions()
  
  // Update window width
  useEffect(() => {
    const updateWidth = () => setWindowWidth(window.innerWidth)
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => window.removeEventListener('resize', updateWidth)
  }, [])
  
  // Calculate drag constraints
  const calculateConstraints = () => {
    if (windowWidth === 0) return { left: 0, right: 0 }
    
    const totalWidth = projects.length * (cardWidth + cardGap) - cardGap
    const visibleWidth = windowWidth - 40 // Account for container padding
    
    return {
      left: -(totalWidth - visibleWidth),
      right: 0
    }
  }
  
  const { left: minDrag, right: maxDrag } = calculateConstraints()
  
  // Handle drag end with improved logic
  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    // Calculate which card should be active
    let newIndex = currentIndex
    const threshold = cardWidth / 3
    const velocityThreshold = 300
    
    if (Math.abs(offset) > threshold || Math.abs(velocity) > velocityThreshold) {
      if (offset > 0 && velocity >= 0) {
        newIndex = Math.max(0, currentIndex - 1)
      } else if (offset < 0 && velocity <= 0) {
        newIndex = Math.min(projects.length - 1, currentIndex + 1)
      }
    }
    
    setCurrentIndex(newIndex)
    setIsDragging(false)
  }, [currentIndex, cardWidth])

  const handleDragStart = useCallback(() => {
    setIsDragging(true)
  }, [])

  // Position carousel based on current index
  useEffect(() => {
    if (!isDragging && windowWidth > 0) {
      if (isMobile) {
        // On mobile, center each card
        const targetX = -currentIndex * (cardWidth + cardGap) + (windowWidth - cardWidth) / 2 - 20
        x.set(targetX)
      } else {
        // On desktop, show multiple cards
        const targetX = -currentIndex * (cardWidth + cardGap)
        x.set(Math.max(minDrag, Math.min(maxDrag, targetX)))
      }
    }
  }, [currentIndex, isDragging, windowWidth, cardWidth, cardGap, isMobile, minDrag, maxDrag, x])

  const nextCard = () => {
    setCurrentIndex(prev => Math.min(projects.length - 1, prev + 1))
  }
  
  const prevCard = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1))
  }

  if (windowWidth === 0) {
    return (
      <div className="py-[60px] sm:py-[80px] bg-gradient-to-br from-slate-50 to-gray-100">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
          <div className="h-[500px] flex items-center justify-center">
            <div className="animate-pulse bg-gray-200 rounded-[30px] w-[280px] h-[480px]" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-[60px] sm:py-[80px] bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:mb-12 text-center"
        >
          <h2 className="font-bold text-[24px] sm:text-[32px] lg:text-[36px] text-gray-900 mb-2">
            Featured Projects
          </h2>
          <p className="text-gray-600 text-[14px] sm:text-[16px] mb-4">
            Explore our latest work and creative solutions
          </p>
          <div className="text-xs sm:text-sm text-gray-500">
            {isMobile ? 'Swipe to explore' : 'Scroll through'} • {projects.length} projects available
          </div>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            ref={containerRef}
            className="overflow-hidden"
            style={{ height: isMobile ? '500px' : '520px' }}
          >
            <motion.div
              className="flex cursor-grab active:cursor-grabbing"
              style={{ 
                x: springX,
                paddingLeft: isMobile ? '20px' : '0px'
              }}
              drag="x"
              dragConstraints={{ left: minDrag, right: maxDrag }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              whileDrag={{ scale: 0.99 }}
            >
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  index={index}
                  currentIndex={currentIndex}
                  isDragging={isDragging}
                  cardWidth={cardWidth}
                  cardGap={cardGap}
                  isMobile={isMobile}
                  onClick={() => !isDragging && setCurrentIndex(index)}
                />
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows - Only on desktop */}
          {!isMobile && (
            <>
              <button
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                onClick={prevCard}
                disabled={currentIndex === 0}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-sm hover:bg-white text-gray-800 p-3 rounded-full shadow-lg border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                onClick={nextCard}
                disabled={currentIndex === projects.length - 1}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>

        {/* Progress Indicators */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <div className="flex gap-2">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'bg-blue-500 w-8 h-3' 
                    : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
          <div className="text-sm text-gray-500">
            {currentIndex + 1} / {projects.length}
          </div>
        </div>

        {/* Mobile Hint */}
        {isMobile && (
          <motion.div
            className="flex justify-center mt-6"
            initial={{ opacity: 1 }}
            animate={{ opacity: isDragging ? 0 : 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-gray-800/80 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
              👈 Swipe to explore projects 👉
            </div>
          </motion.div>
        )}
      </div>
    </div>
  )
}

function ProjectCard({ 
  project, 
  index, 
  currentIndex, 
  isDragging, 
  cardWidth, 
  cardGap,
  isMobile,
  onClick 
}: { 
  project: any
  index: number
  currentIndex: number
  isDragging: boolean
  cardWidth: number
  cardGap: number
  isMobile: boolean
  onClick: () => void
}) {
  const isActive = index === currentIndex
  const distance = Math.abs(index - currentIndex)
  
  // Calculate visual effects
  const scale = isMobile 
    ? (isActive ? 1 : 0.95)
    : (isActive ? 1.05 : Math.max(0.9, 1 - distance * 0.05))
  
  const opacity = isMobile 
    ? (isActive ? 1 : 0.8)
    : (isActive ? 1 : Math.max(0.7, 1 - distance * 0.15))

  return (
    <motion.div
      className="flex-shrink-0 select-none"
      style={{ 
        width: cardWidth,
        marginRight: cardGap
      }}
      animate={{
        scale: isDragging ? scale * 0.95 : scale,
        opacity: isDragging ? opacity * 0.8 : opacity,
        y: isActive && !isMobile ? -5 : 0
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      onClick={onClick}
    >
      {/* Card Glow Effect */}
      {isActive && !isMobile && (
        <div className="absolute inset-0 bg-blue-400/20 rounded-[30px] blur-lg scale-110 -z-10" />
      )}
      
      <div
        className={`
          relative rounded-[30px] overflow-hidden cursor-pointer h-[460px] sm:h-[480px]
          ${isActive ? 'shadow-2xl shadow-black/20' : 'shadow-lg shadow-black/10'}
          transition-all duration-300 hover:shadow-xl
        `}
        style={{ 
          backgroundImage: `url('${project.image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="flex flex-col items-center relative size-full">
          <div className="box-border content-stretch flex flex-col items-center justify-between p-[30px] sm:p-[40px] relative size-full">
            {/* Bottom gradient overlay */}
            <div className="absolute backdrop-blur-2xl backdrop-filter bg-gradient-to-b bottom-0 from-[#d9d9d900] h-[200px] left-0 rounded-bl-[30px] rounded-br-[30px] to-[#ffffff] to-[98.558%] w-full" />
            
            {/* Top section - Category Label */}
            <div className="relative z-10">
              <div
                className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay relative rounded-[50px] shrink-0"
                style={{
                  backgroundImage:
                    "linear-gradient(75.1513deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)",
                }}
              >
                <div className="box-border content-stretch flex flex-row gap-2.5 items-center justify-center overflow-clip px-4 sm:px-5 py-2 sm:py-2.5 relative">
                  <div className="flex flex-col font-bold justify-center leading-[0] relative shrink-0 text-[#ffffff] text-[16px] sm:text-[18px] text-center text-nowrap">
                    <p className="block leading-[20px] whitespace-pre">{project.title}</p>
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
                <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[50px]" />
              </div>
            </div>

            {/* Bottom section */}
            <div className="relative z-10 flex flex-col gap-4 sm:gap-5 items-center">
              {/* Company Logo/Name */}
              <div className="flex flex-col gap-2.5 items-center">
                <div className="h-8 sm:h-10 relative w-[140px] sm:w-[165px]">
                  <img
                    className="block max-w-none size-full"
                    height="40"
                    src={imgVector}
                    width="165"
                    alt={project.company}
                  />
                </div>
              </div>
              
              {/* CTA Button */}
              <div className="bg-[#1a1a1a] box-border content-stretch flex flex-col h-[45px] sm:h-[50px] items-center justify-between pl-[50px] sm:pl-[60px] pr-[25px] sm:pr-[30px] py-[12px] sm:py-[15px] relative rounded-[30px] shrink-0 w-[145px] sm:w-[165px]">
                {/* Background circle */}
                <div className="absolute bg-[#ffffff] bottom-[5px] left-[5px] rounded-[30px] top-[5px] w-8 sm:w-10" />
                
                {/* Border */}
                <div className="absolute inset-0 rounded-[30px]">
                  <div className="absolute border border-[rgba(19,21,23,0.1)] border-solid inset-0 pointer-events-none rounded-[30px]" />
                </div>
                
                {/* Arrow Icon */}
                <div className="absolute bottom-[10%] left-[5px] overflow-clip rounded-[20px] top-[10%] w-8 sm:w-10">
                  <div className="absolute box-border content-stretch flex flex-col items-start justify-center p-0 right-2 sm:right-2.5 size-4 sm:size-5 top-2 sm:top-2.5">
                    <div className="h-4 sm:h-5 relative shrink-0 w-full">
                      <div className="absolute bottom-[18.748%] left-[12.5%] right-[12.498%] top-[18.748%]">
                        <svg
                          className="block size-full"
                          fill="none"
                          preserveAspectRatio="none"
                          viewBox="0 0 15 13"
                        >
                          <path
                            d={svgPaths.p38193000}
                            fill="var(--fill-0, #1A1A1A)"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Text */}
                <div className="h-4 sm:h-5 overflow-clip relative shrink-0 w-[100px] sm:w-[115px]">
                  <div className="absolute box-border content-stretch flex flex-col items-start justify-start p-0 top-0 translate-x-[-50%] w-[110px] sm:w-[124px]" style={{ left: "calc(50% + 15px)" }}>
                    <div className="box-border content-stretch flex flex-col items-start justify-start p-0 relative shrink-0 w-full">
                      <div className="flex flex-col font-medium justify-center leading-[0] not-italic relative shrink-0 text-[#ffffff] text-[12px] sm:text-[14px] text-left w-full">
                        <p className="block leading-[16px] sm:leading-[19.6px]">Ver proyecto</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}