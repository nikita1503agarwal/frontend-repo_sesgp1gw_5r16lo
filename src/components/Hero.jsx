import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-[#0b1220]">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0b1220]/50 via-[#0b1220]/60 to-[#0b1220] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-40 pb-24 lg:pt-48 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3 py-1 text-white/80 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-sky-400 animate-pulse" />
            Compassionate Care • Advanced Medicine
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-white">
            Personalized healthcare, powered by technology
          </h1>
          <p className="mt-6 text-lg text-white/80 max-w-xl">
            Board-certified physician delivering modern, patient-first care. Same-day appointments, telehealth, and preventative medicine.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-sky-400 to-blue-600 text-white px-5 py-3 font-medium shadow hover:opacity-95">
              Book an appointment
            </a>
            <a href="#services" className="inline-flex items-center justify-center rounded-xl bg-white/10 text-white backdrop-blur-md border border-white/10 px-5 py-3 font-medium hover:bg-white/15">
              Explore services
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
