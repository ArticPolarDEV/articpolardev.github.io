import { Shield, Zap, Sparkles, Code2, LineChart, Cpu } from "lucide-react";
import BentoCard from "./BentoCard";

export default function Features() {
  return (
    <section id="skills" className="relative w-full bg-slate-50 dark:bg-[#070709] box-border px-4 md:px-8 transition-colors duration-500">
      {/* GLOWS */}
      <div className="absolute top-[20%] left-[15%] w-[300px] md:w-[550px] h-[300px] md:h-[550px] rounded-full bg-purple-600/10 dark:bg-purple-600/[0.06] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[15%] right-[10%] w-[250px] md:w-[500px] h-[250px] md:h-[500px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.04] blur-[120px] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl h-full flex flex-col justify-center">
        <div className="reveal-up w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-3 gap-3 md:gap-4 box-border md:max-h-[82vh]">
          
          {/* BLOCO 1 */}
          <BentoCard className="sm:col-span-2 md:col-span-1 md:row-span-1 justify-center p-3.5 lg:p-4">
            <span className="w-fit text-[9px] font-mono tracking-widest text-purple-700 dark:text-purple-400 uppercase bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 px-2 py-0.5 rounded-md mb-2">
              Specialties
            </span>
            <h2 className="text-base lg:text-xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              Minimalist design.<br />
              <span className="bg-gradient-to-r from-purple-700 to-cyan-700 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Pure engineering.</span>
            </h2>
          </BentoCard>

          {/* BLOCO 2 */}
          <BentoCard className="sm:col-span-2 md:col-span-2 md:row-span-2 p-4 lg:p-5">
            <div className="space-y-2">
              <div className="w-7 h-7 rounded-lg bg-purple-100 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
                <Code2 size={15} />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-slate-900 dark:text-white tracking-tight">End-to-End Web Applications</h3>
              <p className="text-slate-600 dark:text-slate-400 text-xs lg:text-sm font-light leading-relaxed">
                Architecting solid server-side logic and database schemas coupled with production-ready frontend interfaces. Powered by React, Next.js, Node.js, and TypeScript.
              </p>
            </div>
            <div className="p-2.5 mt-3 rounded-xl bg-slate-100 dark:bg-black/60 border border-slate-200 dark:border-white/5 font-mono text-xs text-slate-600 dark:text-slate-400 overflow-hidden flex items-center h-8 shrink-0">
              <p className="text-purple-700 dark:text-purple-300 truncate">const app = await ArticPolarDEV.deploy(&#123; stack: 'Fullstack' &#125;);</p>
            </div>
          </BentoCard>

          {/* BLOCO 3 */}
          <BentoCard className="p-3.5 lg:p-4" glowColor="amber">
            <div className="flex justify-between items-start">
              <div className="p-1.5 rounded-lg bg-amber-100 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400"><Zap size={15} /></div>
              <span className="text-[9px] font-mono text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-1.5 py-0.5 rounded">100% Score</span>
            </div>
            <div className="mt-2">
              <h4 className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">Critical Performance</h4>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] lg:text-xs font-light mt-0.5 leading-tight">Optimizing Core Web Vitals for swift rendering.</p>
            </div>
          </BentoCard>

          {/* BLOCO 4 */}
          <BentoCard className="p-3.5 lg:p-4" glowColor="cyan">
            <div className="p-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 w-fit"><LineChart size={15} /></div>
            <div className="mt-2">
              <h4 className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">Infrastructure SEO</h4>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] lg:text-xs font-light mt-0.5 leading-tight">Engineered semantic DOM structures ensuring crawling.</p>
            </div>
          </BentoCard>

          {/* BLOCO 5 */}
          <BentoCard className="p-3.5 lg:p-4" glowColor="pink">
            <div className="p-1.5 rounded-lg bg-pink-100 dark:bg-pink-500/10 text-pink-600 dark:text-pink-400 w-fit"><Sparkles size={15} /></div>
            <div className="mt-2">
              <h4 className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">Flawless UI/UX</h4>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] lg:text-xs font-light mt-0.5 leading-tight">Interactive elements embedded with micro-transitions.</p>
            </div>
          </BentoCard>

          {/* BLOCO 6 */}
          <BentoCard className="sm:col-span-2 md:col-span-2 md:row-span-1 p-3.5 lg:p-4">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"><Shield size={15} /></div>
              <span className="text-[9px] font-mono text-slate-600 dark:text-slate-500 border border-slate-300 dark:border-white/5 rounded px-2 py-0.5">Clean Code</span>
            </div>
            <div className="mt-1">
              <h4 className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">Clean & Secure Codebase</h4>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] lg:text-xs font-light mt-0.5 leading-tight">Writing maintainable code passing safety conventions.</p>
            </div>
          </BentoCard>

          {/* BLOCO 7 */}
          <BentoCard className="sm:col-span-2 md:col-span-2 md:row-span-1 p-3.5 lg:p-4">
            <div className="flex items-center justify-between">
              <div className="p-1.5 rounded-lg bg-indigo-100 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400"><Cpu size={15} /></div>
              <span className="text-[9px] font-mono text-indigo-700 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 px-1.5 py-0.5 rounded">Architecture</span>
            </div>
            <div className="mt-1">
              <h4 className="text-xs lg:text-sm font-bold text-slate-900 dark:text-white">Scalable Engineering</h4>
              <p className="text-slate-600 dark:text-slate-400 text-[10px] lg:text-xs font-light mt-0.5 leading-tight">Leveraging asynchronous execution and cache states.</p>
            </div>
          </BentoCard>

        </div>
      </div>
    </section>
  );
}