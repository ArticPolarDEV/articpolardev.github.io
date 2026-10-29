import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import Projects from "@/components/Projects"
import About from "@/components/About"
import Contact from "@/components/Contact"

function App() {
  return (
    <div className="relative h-screen overflow-x-hidden overflow-y-auto bg-slate-50 dark:bg-[#070709] text-slate-900 dark:text-[#F3F4F6] antialiased scroll-container transition-colors duration-500">
      
      {/* Glow de fundo sutil adaptado para os dois temas */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-purple-600/10 dark:bg-purple-900/10 blur-[150px] pointer-events-none transition-colors duration-500" />
      
      {/* O Header fica fixo normalmente */}
      <Header />
      
      {/* Seções do site */}
      <Hero />
      <About />
      <Features />
      <Projects />
      <Contact />
    </div>
  )
}

export default App