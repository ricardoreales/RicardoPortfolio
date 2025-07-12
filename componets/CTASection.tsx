'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef } from 'react'

export function CTASection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  return (
    <div ref={ref} className="py-[100px] relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          y,
          backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 1536 1024" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CradialGradient id="grad2" cx="50%" cy="30%" r="60%"%3E%3Cstop offset="0%" style="stop-color:%23fe6e27;stop-opacity:0.2" /%3E%3Cstop offset="100%" style="stop-color:%23000000;stop-opacity:0.8" /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grad2)" /%3E%3C/svg%3E')`
        }}
      />
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2.5px]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-[796px] mx-auto px-4 sm:px-8"
        style={{ opacity }}
      >
        <motion.div
          className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay rounded-[40px] p-[60px] text-center"
          style={{
            backgroundImage: 'linear-gradient(81.2221deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)'
          }}
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={isInView ? { 
            opacity: 1, 
            scale: 1, 
            y: 0,
            transition: {
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
              staggerChildren: 0.2
            }
          } : { opacity: 0, scale: 0.9, y: 40 }}
        >
          {/* Title */}
          <motion.h2 
            className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Let's Bring Your Vision to Life
          </motion.h2>

          {/* Description */}
          <motion.p 
            className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60 leading-[1.4] mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Ready to create something extraordinary? Whether you're looking for a 
            brand redesign or a fresh digital experience, I'd love to collaborate.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <motion.div
              className="bg-[#fe6e27] rounded-[30px] pl-[30px] pr-[3px] py-2.5 h-[46px] flex items-center gap-5 cursor-pointer group inline-flex"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 50px rgba(254, 110, 39, 0.5)"
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

          {/* Glass effect borders */}
          <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
          <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[40px]" />
        </motion.div>
      </motion.div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#fe6e27] rounded-full opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              top: `${30 + i * 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
      </div>
    </div>
  )
}