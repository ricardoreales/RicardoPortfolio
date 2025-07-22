'use client'

import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Navbar } from './Navbar'
import { ClientSection } from './ClientSection'
import { ServicesSection } from './ServicesSection'
import { CTASection } from './CTASection'
import SwiperCarousel from './SwiperCarousel'
import { PricingSection } from './PricingSection'
import { FormSection } from './FormSection'
import { TeamSection } from './TeamSection'
import { FooterSection } from './FooterSection'

// Animation variants
const pageVariants = {
  initial: { opacity: 0 },
  animate: { 
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
      staggerChildren: 0.15
    }
  }
}

const sectionVariants = {
  hidden: { 
    opacity: 0, 
    y: 60 
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1]
    }
  }
}

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Parallax background transform
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '50%'])

  useEffect(() => {
    // Trigger page load animation
    setIsLoaded(true)
  }, [])

  return (
   <>
      {/* Background parallax element */}
      <motion.div 
        className="fixed inset-0 z-0 opacity-10"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#fe6e27] via-transparent to-transparent opacity-20" />
      </motion.div>

      <motion.div
        ref={containerRef}
        className="relative z-10"
        variants={pageVariants}
        initial="initial"
        animate={isLoaded ? "animate" : "initial"}
      >
        {/* Navigation */}
        <Navbar />

        {/* Hero Section */}
        <HeroSection />

        {/* Client Logos Carousel */}
        <AnimatedSection>
          <ClientSection />
        </AnimatedSection>

        {/* Services Section */}
        <AnimatedSection>
          <ServicesSection />
        </AnimatedSection>

        {/* CTA Section */}
        <AnimatedSection>
          <CTASection />
        </AnimatedSection>

        {/* Swiper Carousel Section */}
        <AnimatedSection>
          <SwiperCarousel />
        </AnimatedSection>

        {/* Pricing Section */}
        <AnimatedSection>
          <PricingSection />
        </AnimatedSection>

        {/* Form Section */}
        <AnimatedSection>
          <FormSection />
        </AnimatedSection>

        {/* Team Section */}
        <AnimatedSection>
          <TeamSection />
        </AnimatedSection>

        {/* Footer */}
        <AnimatedSection>
          <FooterSection />
        </AnimatedSection>
      </motion.div>
    </>
  )
}

// Reusable animated section wrapper
function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.3,
    margin: "-100px 0px -100px 0px"
  })

  return (
    <motion.div
      ref={ref}
      variants={sectionVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      {children}
    </motion.div>
  )
}