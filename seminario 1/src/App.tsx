import Header from './components/Header'
import HeroSection from './components/HeroSection'
import VeiculosLista from './components/veiculos-lista'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <HeroSection />
        <VeiculosLista />
      </main>
      <Footer />
    </div>
  )
}

export default App
