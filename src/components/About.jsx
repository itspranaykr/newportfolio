// src/components/About.jsx
import React from 'react'
import { motion } from 'framer-motion'
import { FaCode, FaCloud, FaRobot, FaDatabase } from 'react-icons/fa'

const About = () => {
  const features = [
    { icon: FaRobot, title: 'AI Engineer', desc: 'Machine Learning, LLMs, Deep Learning, Data Science' },
    { icon: FaCode, title: 'Frontend Dev', desc: 'React, Tailwind CSS, HTML/CSS' },
    { icon: FaDatabase, title: 'Backend Dev', desc: 'Node.js, Python, Java, SQL' },    
    { icon: FaCloud, title: 'Cloud & DevOps', desc: 'AWS, Docker, Git' },
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-xl opacity-30"></div>
            <img
              src="profile.jpg"
              alt="Profile"
              className="relative rounded-2xl shadow-2xl w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold mb-4">
              I'm Pranay Kumar
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              A passionate AI Engineer and Full Stack Developer with over 2 years of experience in building 
              scalable web applications and AI-powered solutions. I thrive on solving complex problems and creating 
              intuitive user experiences that make a difference.
            </p>
            <p className="text-gray-400 mb-8 leading-relaxed">
              My journey in tech started with a simple "Hello World" program, and since then, 
              I've been captivated by the endless possibilities of code and artificial intelligence. 
              I believe in writing clean, maintainable code and staying updated with the latest technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-cyan-400 text-3xl font-bold">1+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-cyan-400 text-3xl font-bold">10+</p>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-cyan-400 text-3xl font-bold">2+</p>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="bg-gray-900/50 rounded-lg p-4 backdrop-blur-sm">
                <p className="text-cyan-400 text-3xl font-bold">∞</p>
                <p className="text-gray-400">Coffee Cups</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 backdrop-blur-sm rounded-xl p-6 text-center border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105"
            >
              <feature.icon className="text-4xl text-cyan-400 mx-auto mb-4" />
              <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About