'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const menuItems = [
  { title: 'Menu', links: ['Home', 'Services', 'About', 'Team', 'Pricing'] },
  { title: 'Navigation', links: ['Blog', 'Projects', 'Tutorial', 'Documentation', 'Become a Partner'] }
]

const socialLinks = [
  { name: 'LinkedIn', icon: 'linkedin' },
  { name: 'Instagram', icon: 'instagram' },
  { name: 'Tiktok', icon: 'tiktok' }
]

export function FooterSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="bg-[#090909] py-[80px]">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* Company Info */}
          <motion.div
            className="space-y-5 lg:col-span-1"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
          >
            {/* Logo */}
            <div className="w-[140px] h-[129px]">
              <svg
                className="w-full h-full"
                viewBox="0 0 140 129"
                fill="none"
              >
                <g clipPath="url(#clip0_1_2741)">
                  <path
                    d="M55.9119 81.4737C52.4289 81.4737 49.0028 81.4737 45.5199 81.4737C44.1978 75.5275 42.8615 69.5814 41.4968 63.4494C41.2835 63.8068 41.1413 64.0212 41.0134 64.2499C38.3408 69.0525 35.6824 73.8552 33.0097 78.6578C32.2421 80.0443 31.2327 81.1878 29.6405 81.6452C27.2096 82.3313 24.3522 81.1021 23.0301 78.7436C20.3716 74.0124 17.7417 69.2812 15.0975 64.55C14.9127 64.2213 14.7279 63.9068 14.4578 63.4208C13.9886 65.5506 13.5479 67.4945 13.1214 69.4385C12.2827 73.2549 11.4297 77.057 10.6052 80.8734C10.5199 81.2593 10.4488 81.5166 9.95126 81.5023C6.75264 81.4737 3.55402 81.488 0.355402 81.488C0.270106 81.488 0.170593 81.4594 0 81.4308C0.39805 79.8728 0.796101 78.3291 1.19415 76.7997C3.41186 68.3093 5.64379 59.8188 7.86149 51.3141C8.55808 48.6555 10.3777 46.9832 12.8513 46.6973C14.2303 46.5401 15.4813 46.9117 16.4338 47.8837C17.2725 48.7413 18.0544 49.699 18.6373 50.7424C21.6227 56.0739 24.537 61.4483 27.4655 66.8084C27.6076 67.08 27.764 67.3373 27.963 67.6803C28.1336 67.3945 28.2474 67.1944 28.3611 66.9942C31.3465 61.577 34.3176 56.1597 37.3172 50.7424C37.7011 50.0563 38.1275 49.3988 38.6109 48.7842C41.3688 45.2679 45.6478 46.4972 47.3964 49.5131C47.695 50.0277 47.9224 50.5852 48.0788 51.1569C50.6661 61.0624 53.2392 70.9679 55.7981 80.8734C55.8408 81.0592 55.8692 81.245 55.9119 81.4737Z"
                    fill="white"
                    transform="scale(0.9)"
                  />
                </g>
              </svg>
            </div>
            
            <div>
              <h3 className="font-['Bebas_Neue'] text-white text-[20px] mb-2">
                UI/UX product Designer based in Argentina
              </h3>
              <p className="font-['Figtree'] text-white/60 text-[15px] leading-[1.8] mb-5">
                Hi, I'm Ricardo Reales – a UI/UX product designer 
                passionate about creating seamless digital 
                experiences that connect and convert.
              </p>
              <p className="font-['Instrument_Serif'] text-white/60 text-[14px]">
                © 2025 Copyright
              </p>
            </div>
          </motion.div>

          {/* Menu Columns */}
          {menuItems.map((section, index) => (
            <motion.div
              key={section.title}
              className="space-y-5"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ delay: 0.1 * (index + 1) }}
            >
              <h3 className="font-['Bebas_Neue'] text-white text-[20px]">
                {section.title}
              </h3>
              <div className="space-y-4">
                {section.links.map((link) => (
                  <div key={link}>
                    <a
                      href="#"
                      className="font-['Instrument_Serif'] text-white text-[20px] hover:text-[#fe6e27] transition-colors duration-200 block"
                    >
                      {link}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* Social Links */}
          <motion.div
            className="space-y-5"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-['Bebas_Neue'] text-white text-[20px]">
              Social
            </h3>
            <div className="space-y-5">
              {socialLinks.map((social) => (
                <motion.div
                  key={social.name}
                  className="flex items-center gap-2.5 cursor-pointer group"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-6 h-6 text-white/40 group-hover:text-[#fe6e27] transition-colors">
                    {social.icon === 'linkedin' && (
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                        <path d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"/>
                      </svg>
                    )}
                    {social.icon === 'instagram' && (
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                        <path d="M10 2.162c2.204 0 2.466.009 3.34.048.806.036 1.243.166 1.532.276.386.15.661.328.951.618.29.29.468.565.618.951.11.289.24.726.276 1.532.039.874.048 1.136.048 3.34s-.009 2.466-.048 3.34c-.036.806-.166 1.243-.276 1.532-.15.386-.328.661-.618.951-.29.29-.565.468-.951.618-.289.11-.726.24-1.532.276-.874.039-1.136.048-3.34.048s-2.466-.009-3.34-.048c-.806-.036-1.243-.166-1.532-.276a2.565 2.565 0 01-.951-.618 2.565 2.565 0 01-.618-.951c-.11-.289-.24-.726-.276-1.532C2.171 12.466 2.162 12.204 2.162 10s.009-2.466.048-3.34c.036-.806.166-1.243.276-1.532.15-.386.328-.661.618-.951.29-.29.565-.468.951-.618.289-.11.726-.24 1.532-.276C7.534 2.171 7.796 2.162 10 2.162zM10 0C7.741 0 7.444.01 6.544.048 5.647.087 5.018.222 4.482.42a4.379 4.379 0 00-1.582 1.03A4.379 4.379 0 00.869 3.032C.671 3.568.536 4.197.497 5.094.459 5.994.449 6.291.449 8.55v2.9c0 2.259.01 2.556.048 3.456.039.897.174 1.526.372 2.062a4.379 4.379 0 001.031 1.582 4.379 4.379 0 001.582 1.031c.536.198 1.165.333 2.062.372.9.039 1.197.049 3.456.049h2.9c2.259 0 2.556-.01 3.456-.048.897-.039 1.526-.174 2.062-.372a4.379 4.379 0 001.582-1.031 4.379 4.379 0 001.031-1.582c.198-.536.333-1.165.372-2.062.039-.9.049-1.197.049-3.456v-2.9c0-2.259-.01-2.556-.048-3.456-.039-.897-.174-1.526-.372-2.062a4.379 4.379 0 00-1.031-1.582A4.379 4.379 0 0014.968.869c-.536-.198-1.165-.333-2.062-.372C11.006.459 10.709.449 8.45.449H10z"/>
                        <path d="M10 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm6.538-8.671a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
                      </svg>
                    )}
                    {social.icon === 'tiktok' && (
                      <svg fill="currentColor" viewBox="0 0 20 20" className="w-full h-full">
                        <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                      </svg>
                    )}
                  </div>
                  <span className="font-['Instrument_Serif'] text-white text-[20px] group-hover:text-[#fe6e27] transition-colors">
                    {social.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}