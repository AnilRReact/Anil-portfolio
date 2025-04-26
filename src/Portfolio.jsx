import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Education from './components/Education'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Certifications from './components/Certifications'
import Languages from './components/Languages'
import Contact from './components/Contact'
import { useNavigate } from 'react-router-dom'

const Portfolio = () => {
  const navigate = useNavigate()

  return (
    <div className="font-sans text-gray-800 bg-gray-50">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Education />
      <Projects />
      <Experience />
      <Certifications />
      <Languages />
      <Contact />

      <div className="text-center py-6">
        <button
          onClick={() => navigate('/print')}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition mt-4 cursor-pointer"
        >
          📄 Download Full Portfolio PDF
        </button>
      </div>
    </div>
  )
}

export default Portfolio
