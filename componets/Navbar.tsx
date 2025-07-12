'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const navItems = ['HOME', 'PORTFOLIO', 'CONTACT']

const navVariants = {
  hidden: { y: -20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: -10, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }
  }
}

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex items-center justify-between h-[180px]">
          {/* Logo */}
          <motion.div
            variants={itemVariants}
            className="flex items-center"
          >
            <div className="w-[65px] h-[60px] relative">
              <svg
                className="w-full h-full"
                viewBox="0 0 66 60"
                fill="none"
              >
                <g clipPath="url(#clip0_1_2728)">
                  <path
                    d="M55.9119 81.4737C52.4289 81.4737 49.0028 81.4737 45.5199 81.4737C44.1978 75.5275 42.8615 69.5814 41.4968 63.4494C41.2835 63.8068 41.1413 64.0212 41.0134 64.2499C38.3408 69.0525 35.6824 73.8552 33.0097 78.6578C32.2421 80.0443 31.2327 81.1878 29.6405 81.6452C27.2096 82.3313 24.3522 81.1021 23.0301 78.7436C20.3716 74.0124 17.7417 69.2812 15.0975 64.55C14.9127 64.2213 14.7279 63.9068 14.4578 63.4208C13.9886 65.5506 13.5479 67.4945 13.1214 69.4385C12.2827 73.2549 11.4297 77.057 10.6052 80.8734C10.5199 81.2593 10.4488 81.5166 9.95126 81.5023C6.75264 81.4737 3.55402 81.488 0.355402 81.488C0.270106 81.488 0.170593 81.4594 0 81.4308C0.39805 79.8728 0.796101 78.3291 1.19415 76.7997C3.41186 68.3093 5.64379 59.8188 7.86149 51.3141C8.55808 48.6555 10.3777 46.9832 12.8513 46.6973C14.2303 46.5401 15.4813 46.9117 16.4338 47.8837C17.2725 48.7413 18.0544 49.699 18.6373 50.7424C21.6227 56.0739 24.537 61.4483 27.4655 66.8084C27.6076 67.08 27.764 67.3373 27.963 67.6803C28.1336 67.3945 28.2474 67.1944 28.3611 66.9942C31.3465 61.577 34.3176 56.1597 37.3172 50.7424C37.7011 50.0563 38.1275 49.3988 38.6109 48.7842C41.3688 45.2679 45.6478 46.4972 47.3964 49.5131C47.695 50.0277 47.9224 50.5852 48.0788 51.1569C50.6661 61.0624 53.2392 70.9679 55.7981 80.8734C55.8408 81.0592 55.8692 81.245 55.9119 81.4737Z"
                    fill="white"
                    transform="scale(0.8) translate(5, -15)"
                  />
                </g>
              </svg>
            </div>
          </motion.div>

          {/* Navigation Items and CTA */}
          <div className="flex items-center gap-10">
            {/* Navigation Menu */}
            <motion.div
              variants={navVariants}
              initial="hidden"
              animate="visible"
              className={`
                backdrop-blur-[35px] backdrop-filter mix-blend-overlay rounded-[40px] 
                transition-all duration-300 ease-in-out
                ${isScrolled ? 'bg-black/20 shadow-lg' : 'bg-white/10'}
              `}
              style={{
                backgroundImage: 'linear-gradient(66.8617deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)'
              }}
            >
              <div className="flex items-center justify-center px-[60px] py-3 gap-6">
                {navItems.map((item) => (
                  <motion.div
                    key={item}
                    variants={itemVariants}
                    className="font-['Figtree'] font-bold text-white text-[16px] cursor-pointer hover:text-[#fe6e27] transition-colors duration-200"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item}
                  </motion.div>
                ))}
              </div>
              <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
              <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[40px]" />
            </motion.div>

            {/* CTA Button */}
            <motion.div
              variants={itemVariants}
              className="bg-[#fe6e27] rounded-[100px] px-[30px] py-2 h-[60px] flex items-center gap-4 cursor-pointer group"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 30px rgba(254, 110, 39, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="font-['Figtree'] font-bold text-white text-[14px]">
                BOOK A CALL
              </div>
              <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center group-hover:rotate-12 transition-transform duration-200">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}