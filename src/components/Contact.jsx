import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [status, setStatus] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    // For demo purposes, just simulate a send
    await new Promise((r) => setTimeout(r, 900))
    setStatus('Message sent! We will get back to you shortly.')
  }

  return (
    <section id="contact" className="relative py-20 sm:py-28 bg-[#0b1220]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Get in touch</h2>
          <p className="mt-3 text-white/70">Book a visit or ask a question. We usually respond within a few hours.</p>
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="mx-auto mt-10 max-w-2xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 sm:p-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-white/80 text-sm mb-1">Full name</label>
              <input required type="text" className="w-full rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="Jane Doe" />
            </div>
            <div>
              <label className="block text-white/80 text-sm mb-1">Email</label>
              <input required type="email" className="w-full rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="jane@email.com" />
            </div>
            <div className="sm:col-span-2">
              <label className="block text-white/80 text-sm mb-1">Message</label>
              <textarea required rows={4} className="w-full rounded-xl border border-white/10 bg-white/10 text-white placeholder-white/50 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-sky-500" placeholder="How can we help?" />
            </div>
          </div>
          <div className="mt-6 flex items-center justify-between gap-3">
            <button type="submit" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white px-5 py-3 font-medium shadow hover:opacity-95">Send message</button>
            <span className="text-white/70 text-sm">{status}</span>
          </div>
        </motion.form>
      </div>
    </section>
  )
}
