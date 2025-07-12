'use client'

import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

const teamMembers = [
  {
    name: "Ricardo Reales - CEO",
    role: "UX UI Product Designer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=168&h=168&fit=crop&crop=face"
  },
  {
    name: "Heyscar Romero",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=168&h=168&fit=crop&crop=face"
  },
  {
    name: "Daniela Romero",
    role: "Developer",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b0e0?w=168&h=168&fit=crop&crop=face"
  },
  {
    name: "Javier Apellido",
    role: "PM - Developer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=168&h=168&fit=crop&crop=face"
  }
]

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], ['20%', '-20%'])

  return (
    <div ref={ref} className="py-[100px] relative overflow-hidden">
      {/* Background with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y,
          backgroundImage: `linear-gradient(rgba(26, 26, 26, 0.15), rgba(0, 0, 0, 0.8)), url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1536&h=1024&fit=crop')`
        }}
      />
      
      {/* Blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[2.5px]" />

      <div className="relative z-10 max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5">
            Perfectly balanced
            <br />
            between
          </h2>
          <p className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60">
            make it pretty and make it work!
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[52px] justify-items-center"
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={member.name} member={member} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function TeamCard({ member, index }: { member: any; index: number }) {
  return (
    <motion.div
      className="backdrop-blur-[35px] backdrop-filter mix-blend-overlay rounded-[40px] p-[30px] text-center group cursor-pointer w-[289px]"
      style={{
        backgroundImage: 'linear-gradient(87.2237deg, rgba(255, 255, 255, 0.5) 11.138%, rgba(255, 255, 255, 0.05) 113.29%)'
      }}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
    >
      {/* Avatar */}
      <div className="w-[168px] h-[168px] mx-auto mb-5 overflow-hidden rounded-full group-hover:scale-110 transition-transform duration-300">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Info */}
      <div className="mb-4">
        <h3 className="font-['Figtree'] font-bold text-white text-[20px] uppercase mb-2">
          {member.name}
        </h3>
        <p className="font-['Figtree'] font-medium text-white text-[20px]">
          {member.role}
        </p>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-3">
        <motion.div
          className="cursor-pointer group-hover:scale-110 transition-transform duration-200"
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-6 h-6 text-white hover:text-[#fe6e27] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
            <circle cx={4} cy={4} r={2} />
          </svg>
        </motion.div>
        <motion.div
          className="cursor-pointer group-hover:scale-110 transition-transform duration-200"
          whileHover={{ scale: 1.2 }}
        >
          <svg className="w-6 h-6 text-white hover:text-[#fe6e27] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
            <path d="m16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
            <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
          </svg>
        </motion.div>
      </div>

      {/* Glass effect borders */}
      <div className="absolute inset-0 pointer-events-none shadow-[10px_10px_29px_0px_inset_rgba(255,255,255,0.25)]" />
      <div className="absolute border-2 border-[rgba(255,255,255,0.5)] border-solid inset-0 pointer-events-none rounded-[40px]" />
    </motion.div>
  )
}