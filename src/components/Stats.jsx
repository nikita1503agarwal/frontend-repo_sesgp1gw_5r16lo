import { motion } from 'framer-motion'
import { HeartPulse, Users, CalendarCheck2, Award } from 'lucide-react'

const items = [
  { icon: HeartPulse, label: 'Patients Served', value: '12k+' },
  { icon: Users, label: 'Years Experience', value: '15+' },
  { icon: CalendarCheck2, label: 'Appointments/Month', value: '450+' },
  { icon: Award, label: 'Clinical Awards', value: '18' },
]

export default function Stats() {
  return (
    <section id="stats" className="relative py-16 sm:py-24 bg-[#0b1220]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(14,165,233,0.15),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(37,99,235,0.12),transparent_40%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-6 text-center text-white"
            >
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-sky-400/20 to-blue-600/20 text-sky-300">
                <item.icon size={22} />
              </div>
              <div className="text-2xl sm:text-3xl font-semibold">{item.value}</div>
              <div className="mt-1 text-white/70 text-sm">{item.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
