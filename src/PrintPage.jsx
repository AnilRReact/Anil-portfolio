import React, { useRef, useEffect } from 'react'
import { useReactToPrint } from 'react-to-print'

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
