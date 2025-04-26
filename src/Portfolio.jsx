import React from 'react'
import Header from './componens/Header'
import Hero from './componens/Hero'
import About from './componens/About'
import Skills from './componens/Skills'
import Education from './componens/Education'
import Projects from './componens/Projects'
import Experience from './componens/Experience'
import Certifications from './componens/Certifications'
import Languages from './componens/Languages'
import Contact from './componens/Contact'
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
