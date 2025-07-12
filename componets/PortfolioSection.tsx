'use client'

import { motion, useInView, useDragControls, PanInfo } from 'framer-motion'
import { useRef, useState, useCallback, useEffect } from 'react'

const projects = [
  {
    id: 1,
    title: 'UX Research',
    company: 'Impulsa / Emtech',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=500&fit=crop&crop=center',
    category: 'UX Research'
  },
  {
    id: 2,
    title: 'Mobile App Design',
    company: 'Impulsa / Emtech',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=500&fit=crop&crop=center',
    category: 'UI/UX Design'
  },
  {
    id: 3,
    title: 'Brand Identity',
    company: 'Impulsa / Emtech',
    image: 'https://images.unsplash.com/photo-1558655146-364adaf1fcc9?w=600&h=500&fit=crop&crop=center',
    category: 'Branding'
  }
]

export function PortfolioSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const dragControls = useDragControls()
  
  // Card dimensions
  const cardWidth = 600
  const cardGap = 78
  const totalCardWidth = cardWidth + cardGap
  
  // Calculate drag constraints
  const maxDrag = 0
  const minDrag = -(projects.length - 1) * totalCardWidth
  
  const handleDragEnd = useCallback((_: any, info: PanInfo) => {
    const offset = info.offset.x
    const velocity = info.velocity.x
    
    // Calculate which card we should snap to based on drag distance and velocity
    let newIndex = currentIndex
    
    // If dragged far enough or with enough velocity, change index
    if (Math.abs(offset) > totalCardWidth / 3 || Math.abs(velocity) > 500) {
      if (offset > 0 && velocity >= 0) {
        // Dragged right - go to previous
        newIndex = Math.max(0, currentIndex - 1)
      } else if (offset < 0 && velocity <= 0) {
        // Dragged left - go to next
        newIndex = Math.min(projects.length - 1, currentIndex + 1)
      }
    }
    
    setCurrentIndex(newIndex)
    setIsDragging(false)
  }, [currentIndex, totalCardWidth])

  const handleDragStart = useCallback(() => {
    setIsDragging(true)
  }, [])

  // Auto-advance carousel (pause when dragging)
  useEffect(() => {
    if (isDragging) return
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % projects.length)
    }, 5000)
    
    return () => clearInterval(interval)
  }, [isDragging])

  return (
    <div ref={ref} className="py-[100px] bg-[#1a1a1a]">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5">
            Explore my recent works
          </h2>
          <p className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60">
            My next favorite project? Your startup.
          </p>
        </motion.div>

        {/* Portfolio Carousel */}
        <div className="relative">
          <div className="overflow-hidden bg-[#1a1a1a] h-[600px] rounded-lg relative">
            <motion.div
              className="flex gap-[78px] h-full cursor-grab active:cursor-grabbing"
              drag="x"
              dragControls={dragControls}
              dragConstraints={{ left: minDrag, right: maxDrag }}
              dragElastic={0.1}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDragEnd={handleDragEnd}
              animate={isDragging ? {} : { x: -currentIndex * totalCardWidth }}
              transition={{
                type: "spring",
                damping: 30,
                stiffness: 300,
                duration: isDragging ? 0 : 0.8
              }}
              whileDrag={{ 
                scale: 0.98,
                transition: { duration: 0.2 }
              }}
              style={{
                x: isDragging ? undefined : -currentIndex * totalCardWidth
              }}
            >
              {projects.map((project, index) => (
                <ProjectCard 
                  key={project.id} 
                  project={project} 
                  isDragging={isDragging}
                />
              ))}
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute right-0 top-0 bottom-0 w-[100px] sm:w-[200px] lg:w-[385px] bg-gradient-to-l from-[#1a1a1a] to-transparent pointer-events-none z-10" />
            <div className="absolute left-0 top-0 bottom-0 w-[100px] sm:w-[200px] lg:w-[385px] bg-gradient-to-r from-[#1a1a1a] to-transparent pointer-events-none z-10" />
            
            {/* Drag instruction hint (mobile) */}
            <motion.div
              className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm sm:hidden"
              initial={{ opacity: 1 }}
              animate={{ opacity: isDragging ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              👆 Drag to explore projects
            </motion.div>
          </div>

          {/* Navigation dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-[#fe6e27] scale-125' 
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          {/* Navigation arrows (desktop) */}
          <div className="hidden lg:block">
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 z-20"
              onClick={() => setCurrentIndex(Math.max(0, currentIndex - 1))}
              disabled={currentIndex === 0}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full backdrop-blur-sm transition-all duration-200 z-20"
              onClick={() => setCurrentIndex(Math.min(projects.length - 1, currentIndex + 1))}
              disabled={currentIndex === projects.length - 1}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex justify-center mt-10"
        >
          <motion.div
            className="bg-[#fe6e27] rounded-[30px] pl-[30px] pr-[3px] py-2.5 h-[46px] flex items-center gap-5 cursor-pointer group"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 15px 40px rgba(254, 110, 39, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="font-['Poppins'] font-medium text-white text-[14px]">
              Contact me
            </div>
            <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
              <svg className="w-5 h-5 text-[#fe6e27]" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({ project, isDragging }: { project: any; isDragging: boolean }) {
  return (
    <motion.div
      className="flex-shrink-0 w-[600px] h-[500px] rounded-[30px] overflow-hidden relative group cursor-pointer select-none"
      whileHover={!isDragging ? { scale: 1.02 } : {}}
      transition={{ duration: 0.3 }}
      style={{
        pointerEvents: isDragging ? 'none' : 'auto'
      }}
    >
      <div 
        className="w-full h-full bg-cover bg-center relative"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
        
        {/* Content */}
        <div className="absolute inset-0 p-[40px] flex flex-col justify-between">
          {/* Badge */}
          <div className="self-start">
            <div className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay rounded-[50px] px-5 py-2.5">
              <span className="font-['Figtree'] font-bold text-white text-[20px]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Bottom content */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-5">
              <span className="text-white font-medium">{project.company}</span>
              <div className="w-[9px] h-7 flex items-center justify-center">
                <div className="w-full h-full bg-white transform skew-x-12" />
              </div>
              <span className="text-white/80">{project.title}</span>
            </div>

            <motion.div
              className="bg-[#1a1a1a] rounded-[30px] px-[60px] pr-[30px] py-[15px] flex items-center gap-4 cursor-pointer group"
              whileHover={!isDragging ? { scale: 1.05 } : {}}
            >
              <span className="text-white font-medium text-[14px]">Ver proyecto</span>
              <div className="bg-white rounded-[20px] w-10 h-10 flex items-center justify-center">
                <svg className="w-5 h-5 text-[#1a1a1a]" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}