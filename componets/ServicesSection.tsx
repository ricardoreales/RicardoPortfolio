'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const services = [
  {
    icon: '🎨',
    title: 'DISCOVER & RESEARCH',
    description: 'Understanding user needs, market trends, and brand goals to lay a strong foundation.'
  },
  {
    icon: '✨',
    title: 'DESIGN & PROTOTYPE',
    description: 'Crafting intuitive interfaces and visual identities with wireframes, mockups, and prototypes.'
  },
  {
    icon: '🚀',
    title: 'Refine & Deliver',
    description: 'Testing, iterating, and finalizing designs for a seamless, polished experience.'
  }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.1
    }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 60,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="py-[100px] relative">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        <div className="flex flex-col gap-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="max-w-[800px]"
          >
            <h2 className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5">
              Design "
              <span className="font-bold">Solutions</span>
              " That Elevate Your Startup
            </h2>
            <p className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60 leading-[1.4]">
              From strategy to execution, I provide tailored design services that help 
              brands stand out and create meaningful connections. Whether you 
              need a strong identity, a seamless digital experience, or creative 
              direction, I've got you covered.
            </p>
          </motion.div>

          {/* Service Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className="bg-[#292929] rounded-[20px] p-[30px] flex flex-col justify-between min-h-[400px] group cursor-pointer"
                whileHover={{ 
                  y: -10,
                  transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }
                }}
              >
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-[72px] h-[72px] flex items-center justify-center text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-['Figtree'] font-bold text-white text-[20px] leading-[1.2]">
                    {service.title}
                  </h3>
                  <p className="font-['Figtree'] font-light text-white/60 text-[18px] leading-[1.5]">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="flex justify-start"
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
    </div>
  )
}