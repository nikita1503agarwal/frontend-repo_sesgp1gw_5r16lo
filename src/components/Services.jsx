import { motion } from 'framer-motion'
import { Stethoscope, Syringe, PhoneCall, HeartHandshake, Activity, ShieldCheck } from 'lucide-react'

const services = [
  {
    icon: Stethoscope,
    title: 'Primary Care',
    desc: 'Comprehensive checkups, chronic disease management, and preventative care tailored to your needs.'
  },
  {
    icon: Syringe,
    title: 'Vaccinations',
    desc: 'Full range of immunizations for adults and children, with reminders and follow-up scheduling.'
  },
  {
    icon: PhoneCall,
    title: 'Telehealth',
    desc: 'Secure virtual visits for routine consultations, follow-ups, and prescription management.'
  },
  {
    icon: HeartHandshake,
    title: 'Mental Wellness',
    desc: 'Support for anxiety, depression, and stress management with a holistic approach.'
  },
  {
    icon: Activity,
    title: 'Cardio Screening',
    desc: 'Heart risk assessments, EKGs, and lifestyle planning to keep your heart healthy.'
  },
  {
    icon: ShieldCheck,
    title: 'Preventative Plans',
    desc: 'Annual wellness plans, nutrition guidance, and personalized health roadmaps.'
  }
]

export default function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28 bg-[#0b1220]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.12),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.1),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Care that meets you where you are</h2>
          <p className="mt-3 text-white/70">A modern practice built around your life. Simple scheduling, clear communication, and personalized treatment.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.05 }}
              className="group rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-white hover:bg-white/10 transition-colors"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-300 group-hover:from-sky-400/30 group-hover:to-blue-600/30">
                <s.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="mt-2 text-white/70 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
