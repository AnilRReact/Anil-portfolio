import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Portfolio from './Portfolio'
import PrintPage from './PrintPage'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Portfolio />} />
        <Route path="/print" element={<PrintPage />} />
      </Routes>
    </Router>
  )
}

export default App
