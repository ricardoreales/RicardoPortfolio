'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const plans = [
  {
    name: "Basic Plan",
    price: "$2990",
    period: "Billed monthly",
    description: "Start Your Journey",
    features: [
      "Basic brand consultation",
      "Access to design resources",
      "One revision on initial concept",
      "Basic chat and support"
    ],
    isPopular: false
  },
  {
    name: "Pro Plan",
    price: "$4990",
    period: "Billed monthly",
    description: "Elevate Your Brand",
    features: [
      "Full brand identity design",
      "UI/UX design for website or app",
      "Up to three revisions",
      "Brand guidelines & assets"
    ],
    isPopular: true
  },
  {
    name: "Enterprise Plan",
    price: "$6990",
    period: "Billed monthly",
    description: "Complete Branding Solution",
    features: [
      "Custom brand strategy & identity",
      "Digital experience design",
      "Unlimited revisions",
      "Priority support"
    ],
    isPopular: false
  }
]

export function PricingSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <div ref={ref} className="py-[100px]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="font-['Poppins'] font-medium text-[48px] sm:text-[60px] text-white leading-[1.2] mb-5">
            Optimize time and money
          </h2>
          <p className="font-['Poppins'] font-light text-[18px] sm:text-[20px] text-white/60 max-w-[600px] mx-auto">
            Explore our prices and see why over 100 Framer creators choose
            Frameblox to build their sites quickly.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-5"
        >
          {plans.map((plan, index) => (
            <PricingCard key={plan.name} plan={plan} index={index} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

function PricingCard({ plan, index }: { plan: any; index: number }) {
  return (
    <motion.div
      className={`rounded-[30px] p-[10px] ${
        plan.isPopular 
          ? 'bg-[#fe6e27]' 
          : 'bg-[#292929]'
      } group`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ 
        y: -10,
        transition: { duration: 0.3 }
      }}
    >
      {/* Header */}
      <div className={`rounded-[20px] p-[30px] text-center ${
        plan.isPopular ? 'bg-[#e35914]' : 'bg-[#1a1a1a]'
      }`}>
        <div className="uppercase font-['Poppins'] font-medium text-[16px] text-white mb-5">
          {plan.name}
        </div>
        <div className="font-['Poppins'] font-medium text-[60px] text-white leading-[1.2] mb-2">
          {plan.price}
        </div>
        <div className={`font-['Inter'] text-[12px] mb-5 ${
          plan.isPopular ? 'text-white' : 'text-[#7f838a]'
        }`}>
          {plan.period}
        </div>
        <div className="font-['Poppins'] font-light text-[20px] text-white">
          {plan.description}
        </div>
      </div>

      {/* Features */}
      <div className="p-[30px]">
        <div className="space-y-2.5 mb-5">
          {plan.features.map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2.5">
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                plan.isPopular ? 'bg-white' : 'bg-[#fe6e27]'
              }`}>
                <svg className={`w-4 h-4 ${
                  plan.isPopular ? 'text-[#fe6e27]' : 'text-white'
                }`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="text-white font-['Poppins'] font-light text-[14px]">
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className={`rounded-[30px] w-full h-[50px] flex items-center justify-center cursor-pointer ${
            plan.isPopular 
              ? 'bg-[#ff6e26]' 
              : 'bg-[#1a1a1a]'
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-white font-['Poppins'] font-medium text-[14px]">
            Contact me
          </span>
        </motion.div>
      </div>
    </motion.div>
  )
}