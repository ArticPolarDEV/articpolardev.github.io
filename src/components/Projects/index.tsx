import { 
  Lock, 
  Database, 
  ShieldCheck, 
  LayoutDashboard, 
  KeyRound, 
  Layers 
} from "lucide-react";
import BentoCard from "../Features/BentoCard";

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-slate-50 dark:bg-[#070709] box-border px-4 md:px-8 transition-colors duration-500">
      {/* 🔮 BACKGROUND GLOWS */}
      <div className="absolute top-[30%] right-[10%] w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/[0.05] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-[250px] md:w-[450px] h-[250px] md:h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.04] blur-[120px] pointer-events-none z-0" />
      
      {/* 📐 CYBERPUNK GRID TEXTURE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-between gap-3">
        
        {/* HEADER */}
        <div className="reveal-up flex flex-col space-y-0.5 shrink-0">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-[10px] md:text-[11px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Featured Engineering
          </div>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Selected <span className="bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Case Studies</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs font-light max-w-2xl leading-relaxed transition-colors">
            Private enterprise applications and internal management systems built with strict data protection, robust authentication, and scalable architecture.
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 items-stretch flex-1 min-h-0">
          
          {/* LEFT PANEL: SYSTEM DETAILS (8 cols) */}
          <BentoCard className="reveal-up lg:col-span-8 h-full flex flex-col justify-between p-4 lg:p-5 min-h-0 overflow-hidden">
            <div className="space-y-3">
              
              {/* TOP BADGES */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-wider uppercase bg-amber-100 dark:bg-amber-500/10 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-500/20 px-2.5 py-0.5 rounded-md transition-colors">
                  <Lock size={11} /> Private Enterprise System
                </span>
                <span className="inline-flex items-center gap-1.5 text-[9px] font-mono tracking-wider uppercase bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 px-2.5 py-0.5 rounded-md transition-colors">
                  Internal Dashboard
                </span>
              </div>

              {/* TITLE & DESCRIPTION */}
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                  Restricted Management & Educational Dashboard
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-xs font-light leading-relaxed">
                  A custom end-to-end management ecosystem designed for closed-network environments. Protects sensitive data while delivering centralized operations, student tracking, real-time analytics, and automated attendance workflows.
                </p>
              </div>

              {/* HIGHLIGHTS */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-1 transition-colors">
                  <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-400 text-xs font-semibold">
                    <KeyRound size={13} /> Auth & Protection
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    NextAuth v5 integrating fine-grained Role-Based Access Control (RBAC).
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-1 transition-colors">
                  <div className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-400 text-xs font-semibold">
                    <Database size={13} /> Database & ORM
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    Prisma ORM + MySQL executing optimized relational data queries.
                  </p>
                </div>

                <div className="p-2.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5 space-y-1 transition-colors">
                  <div className="flex items-center gap-1.5 text-emerald-700 dark:text-emerald-400 text-xs font-semibold">
                    <LayoutDashboard size={13} /> Complex CRUDs
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                    Multi-tier data flows, real-time filtering, and reactive UI controls.
                  </p>
                </div>
              </div>
            </div>

            {/* TECH STACK & FOOTER */}
            <div className="pt-2.5 border-t border-slate-200 dark:border-white/5 flex flex-wrap items-center justify-between gap-2 shrink-0 transition-colors">
              <div className="flex flex-wrap items-center gap-1.5">
                {["Next.js", "TypeScript", "NextAuth v5", "Prisma ORM", "MySQL", "Chakra UI"].map((tech) => (
                  <span key={tech} className="text-[9px] sm:text-[10px] font-mono text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-2 py-0.5 rounded-md transition-colors">
                    {tech}
                  </span>
                ))}
              </div>

              <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                <ShieldCheck size={12} className="text-emerald-600 dark:text-emerald-400" /> Protected Source Code
              </span>
            </div>
          </BentoCard>

          {/* RIGHT PANEL: TERMINAL & HIGHLIGHT */}
          <div className="lg:col-span-4 flex flex-col justify-between gap-3.5 h-full min-h-0">
            
            {/* TERMINAL CARD */}
            <BentoCard className="reveal-up flex-1 p-3 bg-slate-50 dark:bg-[#0A0A0E] flex flex-col justify-between min-h-0 overflow-hidden shadow-sm dark:shadow-none transition-colors">
              <div className="w-full h-full rounded-xl bg-white dark:bg-black/80 border border-slate-200 dark:border-white/10 p-2.5 font-mono text-[10px] text-slate-600 dark:text-slate-400 flex flex-col justify-between space-y-2 transition-colors">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-white/10 pb-1.5 shrink-0 transition-colors">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-[8px] text-slate-500">internal-system.local</span>
                </div>

                <div className="space-y-1.5 my-auto text-[9px] sm:text-[10px]">
                  <p className="text-purple-700 dark:text-purple-400">$ prisma studio --schema=./schema.prisma</p>
                  <p className="text-slate-500 dark:text-slate-500">✔ Connected to MySQL Database</p>
                  <p className="text-emerald-600 dark:text-emerald-400">✔ NextAuth Verified: Role [ADMIN]</p>
                  <p className="text-cyan-600 dark:text-cyan-300">✔ Rendering Component Tree...</p>
                </div>

                <div className="pt-1.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[8px] text-slate-500 shrink-0 transition-colors">
                  <span>STATUS: 200 OK</span>
                  <span className="text-purple-700 dark:text-purple-400 font-semibold">PRIVATE SYSTEM</span>
                </div>
              </div>
            </BentoCard>

            {/* ARCHITECTURE HIGHLIGHT CARD */}
            <BentoCard className="h-auto p-3.5 flex flex-col justify-center bg-purple-50 dark:bg-purple-950/10 border-purple-200 dark:border-purple-500/20 shrink-0 shadow-sm dark:shadow-none transition-colors">
              <div className="flex items-center gap-1.5 text-purple-700 dark:text-purple-300 font-bold text-[10px] uppercase tracking-wider">
                <Layers size={11} /> Fullstack Precision
              </div>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] font-light leading-tight mt-1">
                Engineered end-to-end: from relational schemas to reactive interfaces with secure RBAC authentication.
              </p>
            </BentoCard>

          </div>

        </div>

      </div>
    </section>
  );
}