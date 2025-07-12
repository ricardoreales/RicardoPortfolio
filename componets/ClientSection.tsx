'use client'

import { motion } from 'framer-motion'

const clientLogos = [
  { name: 'Mobilifarma', width: 226, height: 46 },
  { name: 'Cima', width: 200, height: 51 },
  { name: 'EZ', width: 280, height: 72 },
  { name: 'Emtech', width: 192, height: 46 },
  { name: 'Impulsa', width: 200, height: 47 },
  { name: 'Hesycar', width: 212, height: 60 },
  { name: 'Gema', width: 210, height: 76 }
]

export function ClientSection() {
  return (
    <div className="py-[50px] bg-transparent overflow-hidden relative">
      <div className="max-w-[1512px] mx-auto">
        {/* Infinite scrolling container */}
        <div className="relative h-[113px] overflow-hidden">
          {/* Left gradient mask */}
          <div className="absolute left-0 top-0 bottom-0 w-[200px] bg-gradient-to-r from-[#1a1a1a] to-transparent z-10" />
          
          {/* Right gradient mask */}
          <div className="absolute right-0 top-0 bottom-0 w-[200px] bg-gradient-to-l from-[#1a1a1a] to-transparent z-10" />
          
          {/* Scrolling logos - First set */}
          <motion.div
            className="absolute flex items-center gap-10 opacity-20 whitespace-nowrap"
            animate={{
              x: ['0%', '-100%']
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear'
            }}
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)',
              maskSize: '100% 100%'
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <ClientLogo key={`first-${index}`} logo={logo} />
            ))}
          </motion.div>
          
          {/* Scrolling logos - Second set (for seamless loop) */}
          <motion.div
            className="absolute flex items-center gap-10 opacity-20 whitespace-nowrap"
            animate={{
              x: ['100%', '0%']
            }}
            transition={{
              repeat: Infinity,
              duration: 20,
              ease: 'linear'
            }}
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 12.5%, black 87.5%, transparent 100%)',
              maskSize: '100% 100%'
            }}
          >
            {[...clientLogos, ...clientLogos].map((logo, index) => (
              <ClientLogo key={`second-${index}`} logo={logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}

function ClientLogo({ logo }: { logo: { name: string; width: number; height: number } }) {
  return (
    <div 
      className="flex items-center justify-center h-[120px] flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
      style={{ width: Math.max(logo.width + 40, 200) }}
    >
      <div className="flex items-center justify-center text-white font-bold text-lg opacity-60 hover:opacity-100 transition-opacity">
        {logo.name === 'Mobilifarma' && (
          <svg width="220" height="46" viewBox="0 0 226 46" fill="none">
            <path d="M37.5066 41.3702H4.5008V10.3425H21.5564V5.84233H0V9.78988V10.3425V41.3702V45.8704H4.5008H37.5066H42.0074V41.3702V25.3432H37.5066V41.3702Z" fill="white" />
            <path d="M47.8505 5.84237H42.0074V0H37.5066V5.84237H31.6634V10.3426H37.5066V16.1849H42.0074V10.3426H47.8505V5.84237Z" fill="white" />
          </svg>
        )}
        {logo.name === 'Cima' && (
          <div className="text-xl font-bold tracking-wider">CIMA</div>
        )}
        {logo.name === 'EZ' && (
          <div className="text-2xl font-bold">EZ</div>
        )}
        {logo.name === 'Emtech' && (
          <div className="text-xl font-bold">EMTECH</div>
        )}
        {logo.name === 'Impulsa' && (
          <div className="text-xl font-bold">IMPULSA</div>
        )}
        {logo.name === 'Hesycar' && (
          <div>
            <div className="text-lg font-bold">Heycar</div>
            <div className="text-sm">Recode</div>
          </div>
        )}
        {logo.name === 'Gema' && (
          <div>
            <div className="text-2xl font-bold">Gema</div>
            <div className="text-xs">Dance Academy</div>
          </div>
        )}
      </div>
    </div>
  )
}