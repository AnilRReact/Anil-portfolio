import React, { useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print'

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

const PrintPage = () => {
  const printRef = useRef()

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
    documentTitle: 'Anil_Reddy_Portfolio',
    onAfterPrint: () => window.location.href = '/'
  })

  useEffect(() => {
    handlePrint()
  }, [])

  return (
    <div className="p-6">
      <div ref={printRef}>
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
      </div>
    </div>
  )
}

export default PrintPage
