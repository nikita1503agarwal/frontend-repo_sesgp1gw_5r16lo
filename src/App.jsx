import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Services from './components/Services'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0b1220]">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
