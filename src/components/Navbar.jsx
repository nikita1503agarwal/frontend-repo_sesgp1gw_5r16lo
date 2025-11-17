import { useState } from 'react'
import { Menu, X, Stethoscope } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Statistics', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 backdrop-blur-xl bg-white/10 border border-white/10 shadow-lg rounded-2xl">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#home" className="flex items-center gap-2">
              <div className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg">
                <Stethoscope size={20} />
              </div>
              <span className="text-white/90 font-semibold tracking-tight text-lg">Dr. Care</span>
            </a>

            <nav className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#contact" className="ml-4 inline-flex items-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white px-4 py-2 font-medium shadow hover:opacity-95">
                Book Visit
              </a>
            </nav>

            <button className="md:hidden inline-flex items-center justify-center text-white/90" onClick={() => setOpen(!open)} aria-label="Toggle menu">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4">
              <div className="grid gap-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="block text-white/80 hover:text-white py-2" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
                <a href="#contact" className="mt-2 inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white px-4 py-2 font-medium shadow" onClick={() => setOpen(false)}>
                  Book Visit
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
