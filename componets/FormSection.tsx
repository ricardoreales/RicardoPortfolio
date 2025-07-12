'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'

const faqs = [
  {
    question: "How does onboarding work?",
    answer: "Our onboarding process is designed to be smooth and comprehensive. We start with a discovery call to understand your project goals, followed by a detailed project brief, timeline planning, and then we kick off the design phase with wireframes and initial concepts."
  },
  {
    question: "How does onboarding wsadasdasdaork?",
    answer: "This appears to be a test question. In a real scenario, this would contain detailed information about the specific onboarding process, requirements, and what clients can expect during the initial phases of working together."
  },
  {
    question: "How does onboarding asdasdasd?",
    answer: "Another test question that would typically contain comprehensive information about our streamlined onboarding process, including documentation requirements, initial meetings, and project setup procedures."
  },
  {
    question: "What is your design process?",
    answer: "My design process follows a structured approach: Research & Discovery → Information Architecture → Wireframing → Visual Design → Prototyping → Testing & Iteration → Final Delivery. Each phase includes client feedback and revisions to ensure the final product meets your expectations."
  },
  {
    question: "How long does a project take?",
    answer: "Project timelines vary depending on scope and complexity. A typical website design takes 4-6 weeks, while a full brand identity project can take 6-8 weeks. Mobile app designs usually require 8-12 weeks. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, revisions are included in all our packages. Basic plans include 1-2 revision rounds, Pro plans include up to 3 revisions, and Enterprise plans offer unlimited revisions. We believe in collaborative design and want to ensure you're completely satisfied with the final result."
  }
]

export function FormSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const toggleFAQ = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div ref={ref} className="py-[100px]">
      <div className="max-w-[1512px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h2 className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5">
            Frequently asked questions
          </h2>
          <p className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60">
            Not finding your answer here? Book a call.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row justify-between gap-16">
          {/* FAQ Dropdown List */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex-1 max-w-[475px]"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="border border-white/10 rounded-[16px] overflow-hidden bg-white/5 backdrop-blur-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  {/* Question Header */}
                  <motion.div
                    className="flex items-center justify-between p-6 cursor-pointer group"
                    onClick={() => toggleFAQ(index)}
                    whileHover={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="font-['Figtree'] font-medium text-white text-[18px] sm:text-[20px] group-hover:text-[#fe6e27] transition-colors pr-4">
                      {faq.question}
                    </span>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
                      className="flex-shrink-0"
                    >
                      <svg className="w-6 h-6 text-white group-hover:text-[#fe6e27] transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </motion.div>
                  </motion.div>

                  {/* Answer Content */}
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ 
                          duration: 0.3, 
                          ease: [0.25, 0.1, 0.25, 1],
                          opacity: { duration: 0.2 }
                        }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0">
                          <div className="border-t border-white/10 pt-4">
                            <p className="font-['Figtree'] font-light text-white/80 text-[16px] leading-[1.6]">
                              {faq.answer}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex-1 max-w-[600px]"
          >
            <div className="bg-[#292929] rounded-[30px] p-[40px]">
              <h3 className="font-['Poppins'] font-medium text-[48px] text-white leading-[1.2] mb-2">
                Envianos un mensaje 
              </h3>
              <p className="font-['Poppins'] font-light text-[20px] text-white mb-8">
                Cuentanos sobre tu proyecto, respuesta en 24hrs
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Company Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-['Inter'] font-medium text-white text-[14px] mb-2">
                      Nombre
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#fe6e27] transition-all"
                      placeholder="Ricardo"
                    />
                  </div>
                  <div>
                    <label className="block font-['Inter'] font-medium text-white text-[14px] mb-2">
                      Empresa (opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({...formData, company: e.target.value})}
                      className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#fe6e27] transition-all"
                      placeholder="RRX"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-['Inter'] font-medium text-white text-[14px] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#fe6e27] transition-all"
                    placeholder="Reales@gmail.com"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="block font-['Inter'] font-medium text-white text-[14px] mb-2">
                    Asunto
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    className="w-full bg-white border border-slate-300 rounded-md px-3 py-2 text-[14px] text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#fe6e27] transition-all"
                    placeholder="Cotizacion"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block font-['Inter'] font-medium text-white text-[14px] mb-2">
                    Your message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    className="w-full h-20 bg-white border border-slate-300 rounded-md px-3 py-2 text-[14px] text-slate-400 focus:outline-none focus:ring-2 focus:ring-[#fe6e27] resize-none transition-all"
                    placeholder="Type your message here"
                  />
                  <p className="text-white text-[14px] mt-2">
                    Your message will be copied to the support team.
                  </p>
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="bg-[#fe6e27] rounded-[30px] pl-[30px] pr-[3px] py-2.5 h-[46px] flex items-center gap-5 cursor-pointer group w-full justify-center"
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 15px 40px rgba(254, 110, 39, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="font-['Poppins'] font-medium text-white text-[14px]">
                    Contact me
                  </span>
                  <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                    <svg className="w-5 h-5 text-[#fe6e27]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}