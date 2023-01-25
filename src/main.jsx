import './index.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import "@fontsource/lora"

import Navbar from './components/Navbar'
import App from './App'
import Retreats from './pages/Retreats'
import Faqs from './pages/Faqs'
import Resources from './pages/Resources'
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Newsletter from './components/Newsletter'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Navbar />
    <Newsletter />
    <ScrollToTop>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/retreats" element={<Retreats />} />
      <Route path="/faqs" element={<Faqs />} />
      <Route path="/resources" element={<Resources />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </ScrollToTop>
    <Footer />
  </BrowserRouter>
)
