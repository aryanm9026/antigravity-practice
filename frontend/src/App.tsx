import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from '@/components/Navbar'
import ChatAssistant from '@/components/ChatAssistant'
import Home from '@/pages/Home'
import Products from '@/pages/Products'
import About from '@/pages/About'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <ChatAssistant />
      </div>
    </Router>
  )
}

export default App
