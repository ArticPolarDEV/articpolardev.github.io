import { useMemo } from "react";
import {
  Terminal as TerminalIcon,
  MapPin,
  Calendar,
  Lock,
  Globe,
  Sparkles,
  Workflow,
  Package
} from "lucide-react";
import LogoSvg from "@/assets/logo.svg?react";

export default function About() {
  const age = useMemo(() => {
    const birthDate = new Date(2009, 0, 28);
    const today = new Date();
    let calculatedAge = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      calculatedAge--;
    }
    return calculatedAge;
  }, []);

  return (
    <section id="about" className="relative w-full bg-slate-50 dark:bg-[#070709] box-border px-4 md:px-8 transition-colors duration-500">
      {/* BACKGROUND GLOWS & GRID */}
      <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/[0.05] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.04] blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-between gap-3">
        {/* HEADER DA SEÇÃO */}
        <div className="reveal-up flex flex-col space-y-0.5 shrink-0">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-[11px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Biography & Engineering Mindset
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Behind <span className="bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">the Terminal</span>
          </h2>
        </div>

        {/* LAYOUT PRINCIPAL */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch flex-1 min-h-0">
          {/* COLUNA ESQUERDA */}
          <div className="reveal-up lg:col-span-7 bg-white/60 dark:bg-[#0E0E12]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-4 lg:p-5 backdrop-blur-xl flex flex-col justify-between gap-3 shadow-sm dark:shadow-none">
            {/* CABEÇALHO DO PERFIL */}
            <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-white/5">
              <div className="flex items-center gap-3">
                <div className="relative w-11 h-11 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-500/20 dark:to-cyan-500/20 border border-slate-200 dark:border-white/10 p-1.5 flex items-center justify-center shrink-0">
                  <LogoSvg className="w-full h-full text-slate-900 dark:text-white transition-colors duration-500" />
                </div>
                <div className="space-y-0.5">
                  <h3 className="text-base font-bold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
                    José Lucas <span className="text-[10px] font-mono text-purple-600 dark:text-purple-400 bg-purple-500/10 px-2 py-0.5 rounded border border-purple-500/20">ArticPolarDEV</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-3 text-[10px] font-mono text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1"><MapPin size={12} className="text-cyan-600 dark:text-cyan-400" /> Bom Jesus da Lapa, BA - Brazil</span>
                    <span className="flex items-center gap-1"><Calendar size={12} className="text-purple-600 dark:text-purple-400" /> {age} years old</span>
                  </div>
                </div>
              </div>
              <a href="https://www.nuget.org/profiles/JoseLucas" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 px-2.5 py-1 rounded-xl hover:bg-blue-500/20 transition-colors">
                <Package size={13} className="text-blue-600 dark:text-blue-400" />
                <div className="text-left font-mono">
                  <p className="text-[8px] text-slate-500 dark:text-slate-400 uppercase leading-none">NuGet Downloads</p>
                  <p className="text-xs font-bold text-blue-700 dark:text-blue-300 leading-tight">+9.1k</p>
                </div>
              </a>
            </div>

            {/* TEXTO NARRATIVO */}
            <div className="space-y-2 text-slate-600 dark:text-slate-300 text-xs font-light leading-relaxed">
              <p>
                Passionate about technology since childhood, my journey began around the age of 8, scripting basic automation with <span className="text-purple-600 dark:text-purple-300 font-mono font-medium">CMD Batch</span> and <span className="text-purple-600 dark:text-purple-300 font-mono font-medium">VBScript</span>. Over the years, my curiosity drove me through <span className="text-slate-800 dark:text-slate-200 font-mono font-medium">VB.NET, C#, Python, Java</span>, publishing open-source .NET libraries on NuGet with over 9,000+ downloads.
              </p>
              <p>
                As a solo engineer, I build end-to-end applications: from system planning and Figma wireframing to relational database design, secure token authentication, and responsive interfaces.
              </p>
            </div>

            {/* LINHA DO TEMPO */}
            <div className="pt-2 border-t border-slate-200 dark:border-white/5 space-y-1">
              <span className="text-[9px] font-mono uppercase tracking-widest text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <Workflow size={11} className="text-purple-600 dark:text-purple-400" /> Tech Evolution Journey
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 font-mono text-[9px]">
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-500">2017 - Origins</p>
                  <p className="text-purple-600 dark:text-purple-300 font-semibold">Batch / VBScript</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-500">Desktop & OOP</p>
                  <p className="text-cyan-600 dark:text-cyan-300 font-semibold">C# / VB.NET / Java / Python</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-500">Web Ecosystem</p>
                  <p className="text-emerald-600 dark:text-emerald-300 font-semibold">Node.js / JS / TS</p>
                </div>
                <div className="p-2 rounded-lg bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <p className="text-slate-500">Current Focus</p>
                  <p className="text-amber-600 dark:text-amber-300 font-semibold">React / Next.js / Rust</p>
                </div>
              </div>
            </div>
          </div>

          {/* COLUNA DIREITA */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            {/* TERMINAL CARD */}
            <div className="reveal-up flex-1 bg-slate-100 dark:bg-[#0A0A0E] border border-slate-200 dark:border-white/10 rounded-2xl p-4 font-mono text-[10px] text-slate-600 dark:text-slate-400 flex flex-col justify-between space-y-2 shadow-sm dark:shadow-none">
              <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-1.5">
                <div className="flex items-center gap-1.5">
                  <TerminalIcon size={13} className="text-purple-600 dark:text-purple-400" />
                  <span className="text-[10px] text-slate-700 dark:text-slate-300">system-specs.json</span>
                </div>
                <span className="text-[8px] text-emerald-700 dark:text-emerald-400 bg-emerald-500/20 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded font-medium">Active State</span>
              </div>
              <div className="space-y-1 text-[10px]">
                <p><span className="text-purple-600 dark:text-purple-400 font-semibold">languages_spoken</span>: ["Portuguese (Native)", "English (Technical)"]</p>
                <p><span className="text-cyan-600 dark:text-cyan-400 font-semibold">nuget_packages</span>: ["13+ Published", "9,100+ Total Downloads"]</p>
                <p><span className="text-emerald-600 dark:text-emerald-400 font-semibold">current_study</span>: "Rust Memory Safety & Low-level Optimization"</p>
                <p><span className="text-amber-600 dark:text-amber-400 font-semibold">design_ethos</span>: "No-Bloatware, Security First, Pixel-Perfect UI"</p>
              </div>
              <div className="p-2 rounded-lg bg-white dark:bg-black/60 border border-slate-200 dark:border-white/5 text-[9px] text-purple-700 dark:text-purple-300 truncate">
                <span className="font-semibold text-slate-500 dark:text-slate-400">$ status --availability</span> {"->"} <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Open for Architecture & Development</span>
              </div>
            </div>

            <div className="reveal-up bg-white/60 dark:bg-[#0E0E12]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-3.5 space-y-1.5 backdrop-blur-xl shrink-0 shadow-sm dark:shadow-none">
              <h4 className="text-xs font-bold text-slate-900 dark:text-white flex items-center gap-1.5 uppercase tracking-wider">
                <Sparkles size={12} className="text-purple-600 dark:text-purple-400" /> Architecture Strategy
              </h4>
              <div className="grid grid-cols-2 gap-2 text-[9px]">
                <div className="p-2 rounded-xl bg-purple-50 dark:bg-purple-500/5 border border-purple-200 dark:border-purple-500/20 space-y-0.5">
                  <div className="flex items-center gap-1 font-semibold text-purple-700 dark:text-purple-300"><Lock size={10} /> Closed Systems</div>
                  <p className="text-slate-600 dark:text-slate-400 leading-tight">Intranets & IoT kiosks with strict source protection.</p>
                </div>
                <div className="p-2 rounded-xl bg-cyan-50 dark:bg-cyan-500/5 border border-cyan-200 dark:border-cyan-500/20 space-y-0.5">
                  <div className="flex items-center gap-1 font-semibold text-cyan-700 dark:text-cyan-300"><Globe size={10} /> Open Source</div>
                  <p className="text-slate-600 dark:text-slate-400 leading-tight">Public web applications, NuGet packages, and software.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}