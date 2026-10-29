import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import NavItem from './NavItem';

interface NavLink {
  name: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [activeHash, setActiveHash] = useState<string>('#home');
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveHash(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  const handleNavClick = (event: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    event.preventDefault();
    setIsOpen(false);
    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      {/* LINKS DESKTOP */}
      <ul className="hidden md:flex md:flex-row md:items-center md:justify-center md:gap-1 md:rounded-full md:border border-slate-200 dark:md:border-white/10 bg-white/80 dark:md:bg-[#0E0E12]/80 md:p-1.5 shadow-sm dark:md:shadow-xl transition-colors duration-500">
        {NAV_LINKS.map((link) => (
          <NavItem
            key={link.name}
            name={link.name}
            href={link.href}
            isActive={activeHash === link.href}
            onClick={(e) => handleNavClick(e, link.href)}
          />
        ))}
      </ul>

      {/* BOTÃO HAMBÚRGUER MOBILE */}
      <button
        type="button"
        aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-200 transition-colors hover:bg-slate-200 dark:hover:bg-white/10 hover:border-purple-300 dark:hover:border-purple-500/30 hover:text-purple-600 dark:hover:text-white md:hidden shrink-0 z-[60]"
      >
        {isOpen ? <X size={18} /> : <Menu size={18} />}
      </button>

      {/* DROPDOWN MOBILE VIA PORTAL */}
      {mounted && isOpen && createPortal(
        <div className="fixed inset-x-4 top-20 z-[9999] md:hidden reveal-up">
          <ul className="flex flex-col items-stretch gap-1.5 rounded-2xl border border-slate-200 dark:border-white/10 bg-white/95 dark:bg-[#0E0E12]/95 p-3 shadow-lg dark:shadow-2xl backdrop-blur-2xl transition-colors duration-500">
            {NAV_LINKS.map((link) => (
              <NavItem
                key={link.name}
                name={link.name}
                href={link.href}
                isActive={activeHash === link.href}
                onClick={(e) => handleNavClick(e, link.href)}
              />
            ))}
          </ul>
        </div>,
        document.body
      )}
    </>
  );
}