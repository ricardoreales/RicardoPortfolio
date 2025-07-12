'use client'
// import img39775411 from "figma:asset/1993e04f1a668d6e9a4e14891479096efcdc9d5e.png"
// import imgFrame3510 from "figma:asset/4c8ea8a0fc9a7ccc34524fb2bce2b1d90c37a963.png"
// import imgImage5 from "figma:asset/4e87d0f5626b9832a491ade465ee1b59144ff445.png"

import { motion, useInView, useScroll, useSpring, useTransform } from 'framer-motion'
import { useRef } from 'react'
import svgPaths from "../imports/svg-ds98hsnyii"
const img39775411 = "https://cdn.lottiefiles.com/packages/lf20_r3je0esobx.json"
const imgFrame3510 = "https://cdn.lottiefiles.com/packages/lf20_r3je0esobx.json"
const imgImage5 = "https://cdn.lottiefiles.com/packages/lf20_r3je0esobx.json"

// Enhanced Navigation Component
function EnhancedNavbar() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10"
    >
      <div className="flex items-center justify-between px-16 py-6 max-w-7xl mx-auto">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="h-[60px] w-[65.07px]"
        >
          <svg
            className="block size-full"
            fill="none"
            preserveAspectRatio="none"
            viewBox="0 0 66 60"
          >
            <g clipPath="url(#clip0_1_435)">
              <path
                d={svgPaths.p29d25d80}
                fill="white"
              />
              <path
                d={svgPaths.p1c1e8400}
                fill="white"
              />
              <path
                d={svgPaths.p1d243740}
                fill="white"
              />
              <path
                d={svgPaths.p32b34000}
                fill="white"
              />
              <path
                d={svgPaths.pcaa4a00}
                fill="white"
              />
              <path
                d={svgPaths.p1b478280}
                fill="white"
              />
              <path
                d={svgPaths.p241e2180}
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_1_435">
                <rect fill="white" height="60" width="65.0704" />
              </clipPath>
            </defs>
          </svg>
        </motion.div>

        <div className="flex items-center gap-10">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-full px-8 py-3 shadow-lg"
          >
            <div className="flex gap-8">
              {['HOME', 'PORTFOLIO', 'CONTACT'].map((item, index) => (
                <motion.span
                  key={item}
                  whileHover={{ scale: 1.1, textShadow: "0 0 20px rgba(255,255,255,0.8)" }}
                  className="text-white font-bold text-sm tracking-wider cursor-pointer transition-all duration-300"
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(254, 110, 39, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-[#fe6e27] hover:bg-[#e55a1f] text-white font-bold text-sm px-8 py-4 rounded-full flex items-center gap-3 shadow-lg transition-all duration-300"
          >
            BOOK A CALL
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </div>
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// Enhanced Hero Section with Parallax
function EnhancedHero() {
  const { scrollY } = useScroll()
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const textY = useTransform(scrollY, [0, 500], [0, -100])
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }
  const backgroundParallax = useSpring(backgroundY, springConfig)
  const textParallax = useSpring(textY, springConfig)

  return (
    <div ref={ref} className="relative min-h-screen pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        style={{ y: backgroundParallax }}
        className="absolute inset-0 opacity-20"
      >
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#fe6e27]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-16 relative z-10">
        {/* 1. Company logo (Impulsa) - First */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ y: textParallax }}
          className="flex justify-center mb-12"
        >
          <div className="h-24 w-[408px] bg-center bg-cover bg-no-repeat rounded-2xl shadow-2xl border border-white/20" 
               style={{ backgroundImage: `url('${imgImage5}')` }} />
        </motion.div>

        {/* 2. Skills badges - Second */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={isInView ? { x: 0, opacity: 1 } : { x: 100, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center gap-5 mb-12"
        >
          {['UX/UI', 'UX Research'].map((skill, index) => (
            <motion.div
              key={skill}
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
              style={{ y: textParallax }}
              className="backdrop-blur-xl bg-gradient-to-r from-white/20 to-white/10 border border-white/30 rounded-full px-8 py-3 shadow-2xl"
            >
              <span className="text-white font-bold text-lg">{skill}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* 3. Main hero image - Third */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{ y: textParallax }}
          className="relative mb-16"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="aspect-[3/2] bg-center bg-cover bg-no-repeat"
              style={{ backgroundImage: `url('${imgFrame3510}')` }}
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

// Enhanced Project Details Section
function ProjectDetails() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [500, 1500], [0, -200])

  const sections = [
    {
      title: "Impulsa Global - Mexico",
      content: "Arturo's is one of Venezuela's most iconic fast-food franchises, with a legacy of flavor and tradition spanning generations. As the brand continues to evolve, Arturo's needed a digital platform that respected its heritage while embracing modern design standards."
    },
    {
      title: "Problema",
      content: "The existing digital presence lacked modern UX principles and failed to represent the brand's premium positioning. Users struggled with navigation and the interface didn't reflect the quality of the food experience."
    },
    {
      title: "Solucion",
      content: "We redesigned the entire digital experience with a focus on intuitive navigation, modern visual design, and seamless user interactions that truly represent the Arturo's brand legacy and quality."
    }
  ]

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="max-w-7xl mx-auto px-16 py-32 space-y-16"
    >
      {sections.map((section, index) => (
        <motion.div
          key={section.title}
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          className="group"
        >
          <motion.h2
            whileHover={{ x: 10 }}
            className="text-white text-6xl font-medium mb-6 group-hover:text-[#fe6e27] transition-colors duration-300"
          >
            {section.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0.7 }}
            whileInView={{ opacity: 1 }}
            className="text-white/80 text-lg leading-relaxed max-w-4xl group-hover:text-white transition-colors duration-300"
          >
            {section.content}
          </motion.p>
        </motion.div>
      ))}
    </motion.div>
  )
}

// Enhanced Design Process Cards
function DesignProcess() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [1000, 2000], [0, 100])

  const processes = [
    {
      title: "Discovery",
      icon: (
        <svg className="w-18 h-18" fill="none" viewBox="0 0 72 72">
          <path
            d={svgPaths.p495c900}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p10d8f000}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      ),
      items: ["Information Architecture", "User Persona", "Research"]
    },
    {
      title: "Strategy",
      icon: (
        <svg className="w-18 h-18" fill="none" viewBox="0 0 72 72">
          <path
            d={svgPaths.p495c900}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p10d8f000}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      ),
      items: ["Information Architecture", "User Persona", "Research"]
    },
    {
      title: "Solution",
      icon: (
        <svg className="w-18 h-18" fill="none" viewBox="0 0 72 72">
          <path
            d={svgPaths.p495c900}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
          <path
            d={svgPaths.p10d8f000}
            stroke="#FE6E27"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="5"
          />
        </svg>
      ),
      items: ["Information Architecture", "User Persona", "Research"]
    }
  ]

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="max-w-7xl mx-auto px-16 py-32"
    >
      <motion.h2
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-white text-6xl font-medium text-center mb-16"
      >
        Design Process
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {processes.map((process, index) => (
          <motion.div
            key={process.title}
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="bg-[#292929] border border-white/10 rounded-3xl p-8 h-[400px] flex flex-col justify-between"
          >
            <div className="flex-shrink-0">
              <div className="mb-8">
                {process.icon}
              </div>
            </div>

            <div className="flex-grow flex flex-col justify-center">
              <h3 className="text-white font-bold text-xl mb-6">
                {process.title}
              </h3>
              <div className="space-y-3">
                {process.items.map((item, itemIndex) => (
                  <p
                    key={item}
                    className="text-white/60 text-lg"
                  >
                    - {item}
                  </p>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

// Enhanced Project Gallery
function ProjectGallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [1500, 2500], [0, -150])

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="max-w-7xl mx-auto px-16 py-32"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <div 
          className="aspect-[3/2] bg-center bg-cover bg-no-repeat rounded-3xl shadow-2xl border border-white/20 hover:border-white/40 transition-all duration-500 mb-16"
          style={{ backgroundImage: `url('${img39775411}')` }}
        />
        
        <motion.button
          whileHover={{ 
            scale: 1.05, 
            boxShadow: "0 0 40px rgba(254, 110, 39, 0.6)",
            backgroundColor: "#e55a1f"
          }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#fe6e27] text-white font-medium px-8 py-4 rounded-full flex items-center gap-4 mx-auto transition-all duration-300 shadow-lg"
        >
          Contact me
          <div className="bg-white text-[#fe6e27] p-2 rounded-full">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

// Enhanced Footer
function EnhancedFooter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-10%" })

  const menuItems = ['Home', 'Services', 'About', 'Team', 'Pricing']
  const navigationItems = ['Blog', 'Projects', 'Tutorial', 'Documentation', 'Become a Partner']
  const socialItems = ['LinkedIn', 'Instagram', 'Tiktok']

  return (
    <motion.footer
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 1 }}
      className="bg-black/90 backdrop-blur-xl border-t border-white/10 py-20"
    >
      <div className="max-w-7xl mx-auto px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Logo and Description */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-1 md:col-span-2"
          >
            <div className="h-[129px] w-[140px] mb-8">
              <svg className="block size-full" fill="none" viewBox="0 0 140 129">
                <g clipPath="url(#clip0_1_454)">
                  <path d={svgPaths.p37a3ca00} fill="white" />
                  <path d={svgPaths.p8851200} fill="white" />
                  <path d={svgPaths.p3d7f0d80} fill="white" />
                  <path d={svgPaths.p124b0d00} fill="white" />
                  <path d={svgPaths.p33b0ed00} fill="white" />
                  <path d={svgPaths.p27603630} fill="white" />
                  <path d={svgPaths.p2aae1200} fill="white" />
                </g>
                <defs>
                  <clipPath id="clip0_1_454">
                    <rect fill="white" height="129" width="140" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold mb-4">
              UI/UX product Designer based in Argentina
            </h3>
            <p className="text-white/60 leading-relaxed mb-8">
              Hi, I'm Ricardo Reales – a UI/UX product designer passionate about creating seamless digital experiences that connect and convert.
            </p>
            <p className="text-white/40 text-sm">© 2025 Copyright</p>
          </motion.div>

          {/* Menu */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-white text-xl font-bold mb-6">Menu</h4>
            <ul className="space-y-4">
              {menuItems.map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#fe6e27" }}
                  className="text-white/80 hover:text-[#fe6e27] cursor-pointer transition-colors duration-200"
                >
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-white text-xl font-bold mb-6">Social</h4>
            <ul className="space-y-4">
              {socialItems.map((item, index) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5, color: "#fe6e27" }}
                  className="text-white/80 hover:text-[#fe6e27] cursor-pointer transition-colors duration-200 flex items-center gap-3"
                >
                  <div className="w-6 h-6 opacity-40">
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10"/>
                    </svg>
                  </div>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

// Main App Component
export default function App() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen overflow-x-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#fe6e27]/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <EnhancedNavbar />
      <EnhancedHero />
      <ProjectDetails />
      <DesignProcess />
      <ProjectGallery />
      <EnhancedFooter />
    </div>
  )
}