import { ArrowUpRight } from "lucide-react";

export default function Buttons() {
    return (
        <>
            <a 
              href="#projects" 
              className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-black font-semibold text-sm transition-all duration-300 hover:bg-slate-800 dark:hover:bg-slate-200 shadow-md dark:shadow-[0_0_30px_rgba(255,255,255,0.05)] hover:scale-[1.02]"
            >
              View Projects
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a
              href="#contact" 
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 font-semibold text-sm transition-all duration-300 hover:bg-slate-50 dark:hover:bg-white/[0.06] hover:border-slate-300 dark:hover:border-white/20"
            >
              Start Project
            </a>
        </>
    );
}