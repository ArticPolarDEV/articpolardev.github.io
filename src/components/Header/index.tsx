import Logo from './Logo';
import Navbar from './Nav/Navbar';
import Social from './Social';
import ThemeSwitcher from './ThemeSwitcher';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full px-4 pt-4 md:px-8 md:pt-5 transition-colors duration-500">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 rounded-full border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-[#0B0B0F]/80 px-3.5 py-2.5 shadow-sm dark:shadow-2xl backdrop-blur-xl md:px-5 transition-colors duration-500">
        
        {/* Lado Esquerdo: Logo */}
        <div className="flex items-center shrink-0">
          <Logo />
        </div>

        {/* Lado Direito / Centro: Navbar (Renderiza Desktop no centro e Mobile no canto) */}
        <div className="flex flex-1 items-center justify-end md:justify-between">
          <div className="hidden md:flex md:flex-1 md:justify-center">
            {/* O Navbar cuida da ul desktop e do botão mobile */}
          </div>

          <div className="flex items-center gap-3 md:gap-5 ml-auto">
            <div className="hidden md:flex md:items-center md:gap-4">
              <Social />
              <div className="h-4 w-px bg-slate-200 dark:bg-white/10 shrink-0 transition-colors" />
            </div>

            <ThemeSwitcher />

            {/* Injeta o Navbar que renderiza o botão no mobile e o dropdown suspenso */}
            <Navbar />
          </div>
        </div>

      </div>
    </header>
  );
}