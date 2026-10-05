import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './component/navbar'
import Footer from './component/footer'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to Java backend...')

  useEffect(() => {
    fetch('/api/data')
      .then((response) => response.text())
      .then((data) => setBackendMessage(data))
      .catch((error) => setBackendMessage('Failed to connect to backend.'))
  }, [])

  return (
    <Router>
      <div style={{ margin: 0, padding: 0, minHeight: '100vh', position: 'relative' }}>
        <Navbar />

        {/* Dynamic Rendering Content Window Slot */}
        <div style={{ textAlign: 'center', marginTop: '40px', paddingBottom: '120px', fontFamily: 'sans-serif' }}>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>

          {/* Persistent Shared Java Backend Component */}
          <div style={{ padding: '20px', backgroundColor: '#f8f9fa', display: 'inline-block', borderRadius: '8px', border: '1px solid #e2e8f0', marginTop: '40px' }}>
            <p style={{ fontSize: '18px', color: '#007bff', fontWeight: 'bold', margin: 0 }}>
              Backend Status: {backendMessage}
            </p>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default App
