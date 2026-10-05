import { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Settings', to: '/settings' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButtonRef = useRef(null)
  const closeButtonRef = useRef(null)
  const drawerRef = useRef(null)

  useEffect(() => {
    if (!menuOpen) return undefined

    const menuButton = menuButtonRef.current
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    closeButtonRef.current?.focus()

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        return
      }

      if (event.key === 'Tab') {
        const focusableElements = drawerRef.current?.querySelectorAll('button:not([disabled]), a[href]')
        const firstElement = focusableElements?.[0]
        const lastElement = focusableElements?.[focusableElements.length - 1]

        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault()
          lastElement?.focus()
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault()
          firstElement?.focus()
        }
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
      menuButton?.focus()
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-ink px-4 shadow-lg shadow-slate-950/5 sm:px-8 lg:px-14 xl:px-20">
        <div className="flex min-h-[64px] w-full items-center justify-between gap-6 sm:min-h-[76px]">
          <NavLink className="inline-flex shrink-0 items-center gap-3 text-lg font-bold tracking-tight text-white" to="/" aria-label="FullstackApp home">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-mint text-base font-black text-forest-900 shadow-inner">F</span>
            <span>Fullstack<span className="text-mint">App</span></span>
          </NavLink>
          <button
            ref={menuButtonRef}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-200 transition hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mint sm:hidden"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen(true)}
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <nav className="hidden items-center gap-1.5 sm:flex" aria-label="Main navigation">
            {navigation.map(({ label, to }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) => `rounded-lg px-3 py-2.5 text-sm font-medium transition-colors sm:px-4 ${
                  isActive
                    ? 'bg-white/10 text-mint'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>

      <div
        className={`${menuOpen ? 'visible opacity-100' : 'invisible opacity-0'} fixed inset-0 z-40 bg-slate-950/55 backdrop-blur-[2px] transition-opacity duration-200 sm:hidden`}
        aria-hidden="true"
        onClick={() => setMenuOpen(false)}
      />
      <aside
        ref={drawerRef}
        id="mobile-navigation"
        className={`${menuOpen ? 'visible translate-x-0' : 'invisible translate-x-full'} fixed inset-y-0 right-0 z-50 flex w-[min(88vw,360px)] flex-col bg-white shadow-2xl transition-transform duration-300 ease-out sm:hidden`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-navigation-title"
        aria-hidden={!menuOpen}
      >
        <div className="flex min-h-[76px] items-center justify-between border-b border-slate-100 px-5">
          <h2 id="mobile-navigation-title" className="text-sm font-semibold text-slate-500">Navigation</h2>
          <button
            ref={closeButtonRef}
            className="grid h-10 w-10 place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest-500"
            type="button"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m18 6-12 12M6 6l12 12" />
            </svg>
          </button>
        </div>
        <nav className="flex flex-col gap-2 px-4 py-5" aria-label="Mobile menu">
          {navigation.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) => `flex min-h-12 items-center justify-between rounded-xl px-4 text-sm font-semibold transition-colors ${
                isActive
                  ? 'bg-forest-50 text-forest-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              {label}
              <span aria-hidden="true" className="text-base opacity-50">→</span>
            </NavLink>
          ))}
        </nav>
        <div className="mt-auto border-t border-slate-100 px-5 py-5 text-xs text-slate-400">
          FullstackApp · Your workspace
        </div>
      </aside>
    </>
  )
}

export default Navbar
