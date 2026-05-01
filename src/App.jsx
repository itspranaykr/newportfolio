import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000)
  }, [])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-24 h-24 border-4 border-cyan-500/20 border-t-cyan-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold gradient-text">{'<>'}</span>
            </div>
          </div>
          <p className="mt-4 text-cyan-500 animate-pulse">Loading Portfolio...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="relative">
      {/* Matrix Background Effect */}
      <div className="matrix-bg">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-500 text-xs opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 5}s linear infinite`,
            }}
          >
            {Math.random() > 0.5 ? '0' : '1'}
          </div>
        ))}
      </div>

      <Navbar />
      <main className="relative z-10">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 border-t border-gray-800 bg-[#0a0a0a]/80 backdrop-blur-sm">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2026 Pranay Kumar, portfolio
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App