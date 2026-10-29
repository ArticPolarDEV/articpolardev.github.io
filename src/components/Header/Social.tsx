import InstagramIcon from "@/assets/instagram.svg?react"
import GithubIcon from "@/assets/github.svg?react"
import LinkedinIcon from "@/assets/linkedin.svg?react"
import NugetIcon from "@/assets/nuget.svg?react"

export default function Social() {
  return (
    <div className="flex items-center gap-4 text-slate-500 dark:text-slate-300">
      {/* LinkedIn - Glow Azul */}
      <a 
        href="https://linkedin.com" 
        target="_blank" 
        rel="noreferrer" 
        className="opacity-80 dark:opacity-60 hover:opacity-100 transition-all duration-300 hover:text-blue-600 dark:hover:text-white hover:[filter:drop-shadow(0_0_6px_rgba(10,102,194,0.4))] dark:hover:[filter:drop-shadow(0_0_8px_rgba(10,102,194,0.8))]"
        aria-label="LinkedIn Profile"
      >
        <LinkedinIcon className="w-5 h-5 fill-current" />
      </a>

      {/* GitHub - Glow Roxo/Cyberpunk */}
      <a 
        href="https://github.com/ArticPolarDEV" 
        target="_blank" 
        rel="noreferrer" 
        className="opacity-80 dark:opacity-60 hover:opacity-100 transition-all duration-300 hover:text-purple-700 dark:hover:text-white hover:[filter:drop-shadow(0_0_6px_rgba(168,85,247,0.4))] dark:hover:[filter:drop-shadow(0_0_8px_rgba(168,85,247,0.8))]"
        aria-label="GitHub Profile"
      >
        <GithubIcon className="w-5 h-5 fill-current" />
      </a>

      {/* Instagram - Glow Rosa/Neon */}
      <a 
        href="https://instagram.com/ArticPolarDEV" 
        target="_blank" 
        rel="noreferrer" 
        className="opacity-80 dark:opacity-60 hover:opacity-100 transition-all duration-300 hover:text-pink-600 dark:hover:text-white hover:[filter:drop-shadow(0_0_6px_rgba(225,48,108,0.4))] dark:hover:[filter:drop-shadow(0_0_8px_rgba(225,48,108,0.8))]"
        aria-label="Instagram Profile"
      >
        <InstagramIcon className="w-5 h-5 fill-current" />
      </a>

      {/* NuGet - Glow Azul Ciano */}
      <a 
        href="https://www.nuget.org/profiles/JoseLucas" 
        target="_blank" 
        rel="noreferrer" 
        className="opacity-80 dark:opacity-60 hover:opacity-100 transition-all duration-300 hover:text-cyan-700 dark:hover:text-white hover:[filter:drop-shadow(0_0_6px_rgba(0,72,128,0.4))] dark:hover:[filter:drop-shadow(0_0_8px_rgba(0,72,128,0.9))]"
        aria-label="NuGet Packages"
      >
        <NugetIcon className="w-5 h-5 fill-current" />
      </a>
    </div>
  );
}