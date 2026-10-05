import { useEffect, useState } from 'react'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Footer from './component/footer'
import Navbar from './component/navbar'
import Dashboard from './pages/Dashboard'
import Home from './pages/Home'
import Settings from './pages/Settings'

function App() {
  const [backendMessage, setBackendMessage] = useState('Connecting to Java backend')
  const [backendAvailable, setBackendAvailable] = useState(false)

  useEffect(() => {
    fetch('/api/data')
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Backend returned ${response.status}`)
        }
        return response.text()
      })
      .then((message) => {
        setBackendMessage(message)
        setBackendAvailable(true)
      })
      .catch(() => {
        setBackendMessage('Backend is currently unavailable')
        setBackendAvailable(false)
      })
  }, [])

  return (
    <BrowserRouter>
      <div className="flex min-h-screen flex-col bg-mist text-slate-800">
        <Navbar />
        <div className="flex min-h-11 w-full min-w-0 items-center justify-center gap-3 border-b border-forest-100 bg-forest-50 px-4 text-xs text-slate-600" role="status">
          <span className={`h-2 w-2 shrink-0 rounded-full ring-4 ${backendAvailable ? 'bg-emerald-600 ring-emerald-100' : 'bg-amber-500 ring-amber-100'}`} />
          <span className="flex min-w-0 items-center gap-2">
            <strong className="shrink-0 font-semibold text-slate-700">Java API</strong>
            <span className="min-w-0 truncate">{backendMessage}</span>
          </span>
        </div>
        <main className="w-full flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
