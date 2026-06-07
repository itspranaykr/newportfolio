// src/components/Skills.jsx
import React, { useState } from 'react'
import { 
  SiPython, SiJavascript, SiReact, 
  SiTailwindcss, SiPandas, SiMysql, SiMongodb,
  SiHtml5, SiNodedotjs, SiGit, SiDocker
} from 'react-icons/si'
import { FaCss3Alt } from 'react-icons/fa'

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all')

  const allSkills = [
    // Programming Languages
    { name: 'Python', icon: SiPython, category: 'languages', level: 85, color: '#3776AB' },
    { name: 'JavaScript', icon: SiJavascript, category: 'languages', level: 85, color: '#F7DF1E' },
    { name: 'C', icon: SiPython, category: 'languages', level: 80, color: '#A8B9CC' },
    { name: 'C++', icon: SiPython, category: 'languages', level: 80, color: '#00599C' },
    
    // Frontend
    { name: 'HTML5', icon: SiHtml5, category: 'frontend', level: 90, color: '#E34F26' },
    { name: 'CSS3', icon: FaCss3Alt, category: 'frontend', level: 85, color: '#1572B6' },
    { name: 'React', icon: SiReact, category: 'frontend', level: 85, color: '#61DAFB' },
    { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'frontend', level: 90, color: '#06B6D4' },
    
    // Data Science & AI
    { name: 'Pandas', icon: SiPandas, category: 'datascience', level: 85, color: '#150458' },
    { name: 'Machine Learning', icon: SiPython, category: 'datascience', level: 80, color: '#F7931E' },
    { name: 'Deep Learning', icon: SiPython, category: 'datascience', level: 75, color: '#FF6F00' },
    
    // Backend & Database
    { name: 'Node.js', icon: SiNodedotjs, category: 'backend', level: 78, color: '#339933' },
    { name: 'MySQL', icon: SiMysql, category: 'database', level: 85, color: '#4479A1' },
    { name: 'MongoDB', icon: SiMongodb, category: 'database', level: 80, color: '#47A248' },
    { name: 'Docker', icon: SiDocker, category: 'devops', level: 75, color: '#2496ED' },
    { name: 'Git', icon: SiGit, category: 'devops', level: 85, color: '#F05032' },
  ]

  const tabs = [
    { id: 'all', label: 'All Skills' },
    { id: 'languages', label: 'Languages' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'datascience', label: 'AI/ML' },
    { id: 'backend', label: 'Backend' },
    { id: 'database', label: 'Database' },
  ]

  const filteredSkills = activeTab === 'all' 
    ? allSkills 
    : allSkills.filter(skill => skill.category === activeTab)

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0f]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto"></div>
          <p className="text-gray-400 mt-4">Technologies I work with</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-cyan-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="bg-gray-900/40 backdrop-blur-sm rounded-xl p-5 text-center border border-gray-700 hover:border-cyan-500/70 transition-all duration-300 hover:scale-105 hover:-translate-y-1 cursor-pointer"
            >
              <skill.icon className="text-5xl mx-auto mb-3" style={{ color: skill.color }} />
              <h3 className="font-semibold text-gray-200">{skill.name}</h3>
              <div className="mt-3">
                <div className="h-1.5 bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{skill.level}%</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Summary */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-gray-900/40 rounded-xl p-4 text-center border border-gray-700">
            <p className="text-3xl font-bold text-cyan-400">{allSkills.length}+</p>
            <p className="text-gray-400 text-sm">Technologies</p>
          </div>
          <div className="bg-gray-900/40 rounded-xl p-4 text-center border border-gray-700">
            <p className="text-3xl font-bold text-cyan-400">6</p>
            <p className="text-gray-400 text-sm">Categories</p>
          </div>
          <div className="bg-gray-900/40 rounded-xl p-4 text-center border border-gray-700">
            <p className="text-3xl font-bold text-cyan-400">1+</p>
            <p className="text-gray-400 text-sm">Years Exp</p>
          </div>
          <div className="bg-gray-900/40 rounded-xl p-4 text-center border border-gray-700">
            <p className="text-3xl font-bold text-cyan-400">10+</p>
            <p className="text-gray-400 text-sm">Projects</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills