"use client"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"
import type { MouseEvent } from "react"

export function Industries() {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
          >
            Industries We Serve
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Transforming businesses across diverse sectors with innovative digital solutions
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <TiltCard key={industry.title} {...industry} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

function TiltCard({
  title,
  description,
  icon: Icon,
  index,
}: {
  title: string
  description: string
  icon: any
  index: number
}) {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rotateX = useSpring(mouseY, { stiffness: 150, damping: 20 })
  const rotateY = useSpring(mouseX, { stiffness: 150, damping: 20 })
  const brightness = useSpring(1, { stiffness: 150, damping: 20 })

  function onMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    mouseX.set((clientX - left - width / 2) / 25)
    mouseY.set((clientY - top - height / 2) / 25)
    brightness.set(1.05)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
    brightness.set(1)
  }

  const transform = useMotionTemplate`perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  const filter = useMotionTemplate`brightness(${brightness})`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <motion.div
        style={{ transform, filter }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        className="relative h-96 rounded-2xl p-8 cursor-pointer group"
      >
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/90 via-gray-900 to-black rounded-2xl 
          group-hover:from-purple-800/90 group-hover:via-gray-800 transition-colors duration-500"
        />

        <div className="relative h-full flex flex-col">
          <div className="flex-1">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-300">{description}</p>
          </div>

          <div className="mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white font-medium
                opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              Learn More
            </motion.button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

import { BookOpen, Truck, HeadphonesIcon, Heart, Store, Rocket, ShoppingCart, UtensilsCrossed } from "lucide-react"

const industries = [
  {
    title: "Education",
    description: "Revolutionizing learning experiences through digital innovation and interactive platforms.",
    icon: BookOpen,
  },
  {
    title: "Logistics",
    description: "Streamlining supply chains and optimizing delivery networks with cutting-edge solutions.",
    icon: Truck,
  },
  {
    title: "Customer Support",
    description: "Enhancing customer service with AI-powered tools and omnichannel support systems.",
    icon: HeadphonesIcon,
  },
  {
    title: "Healthcare",
    description: "Transforming patient care through digital health solutions and telemedicine platforms.",
    icon: Heart,
  },
  {
    title: "Retail",
    description: "Creating seamless shopping experiences with innovative POS and inventory management.",
    icon: Store,
  },
  {
    title: "Startups & Marketplaces",
    description: "Empowering new businesses with scalable solutions and marketplace platforms.",
    icon: Rocket,
  },
  {
    title: "Ecommerce",
    description: "Building powerful online stores with advanced features and seamless checkout experiences.",
    icon: ShoppingCart,
  },
  {
    title: "Food Delivery",
    description: "Enabling restaurants and delivery services with real-time tracking and ordering systems.",
    icon: UtensilsCrossed,
  },
]

