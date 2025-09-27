import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import DifferentialsSection from './components/DifferentialsSection'
import ServicesSection from './components/ServicesSection'
import FoundersSection from './components/FoundersSection'
import TestimonialsSection from './components/TestimonialsSection'
import TeiaInfinitaSection from './components/TeiaInfinitaSection'
import CTASection from './components/CTASection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <DifferentialsSection />
        <ServicesSection />
        <FoundersSection />
        <TestimonialsSection />
        <TeiaInfinitaSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
