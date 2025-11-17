import { Stethoscope } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-[#0b1220] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-sky-400 to-blue-600 text-white shadow-lg">
              <Stethoscope size={36} />
            </div>
            <div className="text-left">
              <div className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-sky-400 to-blue-600">DR. CARE</div>
              <p className="text-white/60 text-sm">Modern medicine • Human touch</p>
            </div>
          </div>

          <p className="mt-6 text-white/60">© {new Date().getFullYear()} Dr. Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
