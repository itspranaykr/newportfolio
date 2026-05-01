// src/components/Home.jsx
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaTwitter, FaDownload, FaInstagram, FaCode } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'

const Home = () => {
  const roles = ['Data Science Student', 'Full Stack Developer', 'Problem Solver', 'Tech Enthusiast']
  const [roleIndex, setRoleIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  // ==========================================
  // PUT YOUR SOCIAL LINKS HERE:
  // ==========================================
  const socialLinks = {
    github: "https://github.com/itspranaykr",
    linkedin: "https://www.linkedin.com/in/pranay-kumar-784aa0312/",
    twitter: "https://x.com/PranayKuma35714",
    instagram: "https://www.instagram.com/itspranaykr/?hl=en",
    leetcode: "https://leetcode.com/u/itspranaykr/",
  }

  // ==========================================
  // PUT YOUR CV FILE PATH HERE:
  // ==========================================
  // Option 1: Place your CV file in the "public" folder and use: "/Pranay_Kumar_CV.pdf"
  // Option 2: Use Google Drive link or any cloud storage link
  const cvLink = "pranayresume.pdf"  // Change this to your actual CV file path

  // ==========================================
  // Handlers for buttons
  // ==========================================
  const handleDownloadCV = () => {
    window.open(cvLink, '_blank')
  }

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <span className="text-cyan-400 font-mono text-sm">Hello, I'm</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Pranay Kumar
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl mb-6"
            >
              <span className="text-gray-400">I'm a </span>
              <span className="gradient-text">
                {roles[roleIndex]}
              </span>
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 text-lg mb-8 max-w-lg"
            >
              B.Tech CSE (Data Science) Student passionate about creating innovative solutions through code and data science. 
              Currently in my 3rd year, exploring the intersection of technology and creativity.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex gap-4 flex-wrap"
            >
              <button 
                onClick={handleDownloadCV}
                className="btn-primary flex items-center gap-2 group"
              >
                Download CV <FaDownload className="group-hover:translate-y-1 transition-transform" />
              </button>
              <button 
                onClick={scrollToContact}
                className="btn-outline"
              >
                Contact Me
              </button>
            </motion.div>
            
            {/* Social Links - Updated with all icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex gap-6 mt-8 flex-wrap"
            >
              {/* GitHub */}
              <motion.a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl cursor-pointer"
                title="GitHub"
              >
                <FaGithub />
              </motion.a>
              
              {/* LinkedIn */}
              <motion.a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl cursor-pointer"
                title="LinkedIn"
              >
                <FaLinkedin />
              </motion.a>
              
              {/* Twitter */}
              <motion.a
                href={socialLinks.twitter}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl cursor-pointer"
                title="Twitter"
              >
                <FaTwitter />
              </motion.a>
              
              {/* Instagram */}
              <motion.a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl cursor-pointer"
                title="Instagram"
              >
                <FaInstagram />
              </motion.a>
              
              {/* LeetCode */}
              <motion.a
                href={socialLinks.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -5 }}
                className="text-gray-400 hover:text-cyan-400 transition-colors text-2xl cursor-pointer"
                title="LeetCode"
              >
                <SiLeetcode />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Content - Animated Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl border border-gray-700 overflow-hidden shadow-2xl">
              <div className="bg-gray-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs text-gray-400 ml-2">developer.js</span>
              </div>
              <div className="p-6 font-mono text-sm">
                <div className="text-purple-400">const</div>
                <div className="text-blue-400 ml-4">developer</div>
                <div className="text-gray-400 ml-8">= {'{'} </div>
                <div className="ml-12">
                  <span className="text-yellow-400">name</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-green-400">'Pranay Kumar'</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-12">
                  <span className="text-yellow-400">skills</span>
                  <span className="text-gray-400">: [</span>
                  <span className="text-green-400">'Python'</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-green-400">'React'</span>
                  <span className="text-gray-400">, </span>
                  <span className="text-green-400">'Data Science'</span>
                  <span className="text-gray-400">],</span>
                </div>
                <div className="ml-12">
                  <span className="text-yellow-400">education</span>
                  <span className="text-gray-400">: </span>
                  <span className="text-purple-400">'B.Tech CSE (Data Science)'</span>
                  <span className="text-gray-400">,</span>
                </div>
                <div className="ml-8 text-gray-400">{'}'};</div>
                <div className="mt-4">
                  <span className="text-purple-400">export default</span>
                  <span className="text-gray-400"> developer;</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-full blur-xl"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
      >
        <div className="w-6 h-10 border-2 border-cyan-500 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div>
    </section>
  )
}

export default Home