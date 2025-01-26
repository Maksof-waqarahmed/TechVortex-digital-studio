"use client"

import { HoverEffect } from "./ui/card-hover-effect"
import webImage from "@/assets/images/web.jpg"
import mobileImage from "@/assets/images/mobile.png"
import chatBotImage from "@/assets/images/chatbot.png"
import chromeImage from "@/assets/images/chrome.png"
import UIImage from "@/assets/images/UI.jpeg"
import seo from "@/assets/images/seo.jpg"

export function Services() {
  return (
    <div className="max-w-6xl mx-auto px-8 py-16">
      <div className="space-y-4 mb-12">
        <h1 className="text-center text-4xl md:text-5xl font-bold pb-2">
          SERVICES
        </h1>
        <p className="text-center max-w-3xl mx-auto text-base md:text-lg text-zinc-400 leading-relaxed">
          At TechVortex, we offer a wide range of cutting-edge digital solutions tailored to meet your business needs. Our services include mobile app development, web development, intelligent chatbot creation, custom Chrome extensions, and innovative UI/UX design. Additionally, we specialize in SEO strategies to boost your online presence and provide a variety of other digital services to help your business thrive in today's competitive landscape.
        </p>
      </div>
      <HoverEffect items={projects} />
    </div>
  )
}

export const projects = [
  {
    title: "Web Development",
    image: webImage,
  },
  {
    title: "Mobile Application Development",
    image: mobileImage,
  },
  {
    title: "Chatbot Development",
    image: chatBotImage,
  },
  {
    title: "Chrome Extension Development",
    image: chromeImage,
  },
  {
    title: "UI/UX Design",
    image: UIImage,
  },
  {
    title: "Search Engine Optimization",
    image: seo,
  },
]
