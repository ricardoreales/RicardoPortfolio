'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const heroVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const titleVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
}

const floatingVariants = {
  hidden: { scale: 0.95, opacity: 0 },
  visible: { 
    scale: 1, 
    opacity: 1,
    transition: { 
      duration: 0.6, 
      ease: [0.25, 0.1, 0.25, 1] 
    } 
  }
}

const skillBadges = [
  { icon: '🎨', text: 'Web & Mobile Design' },
  { icon: '🔍', text: 'UX/UI Design' },
  { icon: '📦', text: 'MVP' },
  { icon: '💻', text: 'Development' }
]

export function HeroSection() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <div 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center pt-[180px] pb-[100px] overflow-hidden"
      style={{
        backgroundImage: `url('data:image/svg+xml,%3Csvg viewBox="0 0 1512 1008" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3CradialGradient id="grad1" cx="50%" cy="50%" r="50%"%3E%3Cstop offset="0%" style="stop-color:%23fe6e27;stop-opacity:0.3" /%3E%3Cstop offset="100%" style="stop-color:%23000000;stop-opacity:1" /%3E%3C/radialGradient%3E%3C/defs%3E%3Crect width="100%" height="100%" fill="url(%23grad1)" /%3E%3C/svg%3E')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Animated background elements */}
      <motion.div 
        className="absolute inset-0 opacity-30"
        style={{ y, opacity }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#fe6e27] rounded-full blur-[100px] opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#fe6e27] rounded-full blur-[120px] opacity-15" />
      </motion.div>

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Content */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex-1 max-w-[600px] text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={titleVariants}
              className="font-['Inria_Serif'] italic text-[32px] sm:text-[40px] text-white mb-6"
            >
              Hey. I'm Ricardo,
            </motion.div>

            {/* Main Title */}
            <motion.div
              variants={titleVariants}
              className="font-['BM_HANNA_TTF'] text-white mb-2"
            >
              <div className="text-[60px] sm:text-[80px] lg:text-[107px] leading-[0.9] mb-2">
                A UX/UI
              </div>
              <div className="text-[24px] sm:text-[32px] lg:text-[40px] uppercase leading-[1.2]">
                Product Designer
              </div>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={titleVariants}
              className="font-['Inria_Serif'] italic text-[18px] sm:text-[24px] text-white leading-[1.5] mb-8 max-w-[500px] mx-auto lg:mx-0"
            >
              Turning ideas into intuitive digital products-strategic UX/UI that
              delights users and drives measurable growth.
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={titleVariants}
              className="relative inline-block"
            >
              <motion.div
                className="bg-[#fe6e27] rounded-[30px] pl-[30px] pr-2.5 py-2.5 flex items-center gap-5 cursor-pointer group"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 15px 40px rgba(254, 110, 39, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Animated background blur */}
                <div className="absolute inset-0 bg-[#fe6e27] blur-[2px] opacity-30 rounded-[100px]" />
                
                <div className="font-['Inria_Sans'] font-bold text-white text-[20px] relative z-10">
                  Let's work together
                </div>
                
                <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center relative z-10 group-hover:rotate-45 transition-transform duration-300">
                  <svg className="w-5 h-5 text-[#fe6e27]" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Floating Skills */}
          <motion.div
            variants={heroVariants}
            initial="hidden"
            animate="visible"
            className="flex-shrink-0 flex flex-col gap-6 max-w-[300px] w-full"
          >
            {skillBadges.map((skill, index) => (
              <motion.div
                key={skill.text}
                variants={floatingVariants}
                custom={index}
                className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay rounded-[50px] group cursor-pointer"
                style={{
                  backgroundImage: 'linear-gradient(77.476deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)'
                }}
                whileHover={{ 
                  scale: 1.05,
                  y: -5,
                  transition: { duration: 0.2 }
                }}
                animate={{
                  y: [0, -10, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }
                }}
              >
                <div className="flex items-center justify-center px-[40px] py-[30px] gap-2.5">
                  <div className="text-2xl">{skill.icon}</div>
                  <div className="font-['Figtree'] font-bold text-white text-[20px] text-center">
                    {skill.text}
                  </div>
                </div>
                <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
                <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[50px]" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}