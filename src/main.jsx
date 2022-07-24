import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import App from './App'
import Retreats from './pages/Retreats'
import Faqs from './pages/Faqs'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Navbar />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/retreats" element={<Retreats />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
)
