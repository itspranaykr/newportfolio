// src/components/Projects.jsx
import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [filter, setFilter] = useState('all')
  
  const projects = [

    {
      id: 1,
      title: 'Bangalore House Price Prediction',
      description: 'Intelligent real estate price prediction system that analyzes property features, location, amenities, and market trends to estimate house prices in Bangalore with high accuracy, helping buyers, sellers, and investors make informed decisions.',
      image: 'hq720.jpg',
      tech: ['machine learning', 'EDA', 'Streamlit', 'jupyter'],
      category: 'ml',
      github: 'https://github.com/itspranaykr/bangalore-house-price-prediction.git',
      demo: 'https://bangalore-house-price-prediction-vxpw2hg74uqqn7g2numlhh.streamlit.app/',
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time analytics dashboard with machine learning predictions and interactive visualizations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'Node.js', 'TensorFlow', 'D3.js'],
      category: 'fullstack',
      github: '#',
      demo: '#',
    },
    {
      id: 3,
      title: 'solar comapany website',
      description: 'Designed and developed a fully responsive company website using react js',
      image: 'solar.jpg',
      tech: ['react.js', 'Stripe', 'MongoDB', 'Tailwind'],
      category: 'fullstack',
      github: 'https://github.com/itspranaykr/AGENTERPRISES.git',
      demo: 'https://agenterprises.vercel.app',
    },
    {
      id: 4,
      title: 'Heart stroke prediction system',
      description: 'Machine learning model for predicting heart stroke risk based on patient data.',
      image: 'heart.jpg',
      tech: ['Python', 'Scikit-learn', 'Pandas', 'NumPy'],
      category: 'ml',
      github: 'https://github.com/itspranaykr/Heart-Stroke-Prediction-using-ml.git',
      demo: 'https://heart-stroke-prediction-using-ml-fvyovefb7ryn4bbwv9wlg3.streamlit.app/',
    },
    {
      id: 5,
      title: 'Task Management App',
      description: 'Collaborative task management tool with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop',
      tech: ['React', 'Firebase', 'Material-UI'],
      category: 'frontend',
      github: 'https://github.com/itspranaykr/todo-app.git',
      demo: '#',
    },
    {
      id: 6,
      title: 'Weather Forecasting App',
      description: 'Weather app with 7-day forecast and interactive maps.',
      image: 'https://thumbs.dreamstime.com/b/weather-forecast-interface-icon-set-illustration-37639237.jpg',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      category: 'frontend',
      github: 'https://github.com/itspranaykr/weather-card.git',
      demo: '#',
    },
    
  ]

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'ml', label: 'Machine Learning' },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Some of my best work that showcases my skills and creativity
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filterItem) => (
            <button
              key={filterItem.id}
              onClick={() => setFilter(filterItem.id)}
              className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                filter === filterItem.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
              }`}
            >
              {filterItem.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-gray-900/30 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="relative overflow-hidden group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
                    >
                      <FaGithub className="text-white" />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-900 rounded-full hover:bg-cyan-500 transition-colors cursor-pointer"
                    >
                      <FaExternalLinkAlt className="text-white text-sm" />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Projects