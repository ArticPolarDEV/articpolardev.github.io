export default function Graphic() {
  return (
    <div className="relative w-full aspect-square rounded-2xl p-4 bg-white/60 dark:bg-white/[0.01] border border-slate-200 dark:border-white/[0.04] backdrop-blur-xl shadow-lg dark:shadow-[0_15px_40px_rgba(0,0,0,0.4)] flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:-translate-y-1 hover:border-purple-300 dark:hover:border-purple-500/20 hover:shadow-[0_0_30px_rgba(168,85,247,0.12)]">
        
        {/* Linha reflexiva sutil */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-400/40 dark:via-purple-500/20 to-transparent" />
        
        <div className="w-full h-full flex flex-col justify-between relative z-10">
          <div className="flex items-center justify-between">
            <div className="flex gap-1">
              <div className="w-2 h-2 rounded-full bg-red-500/60 dark:bg-red-500/40" />
              <div className="w-2 h-2 rounded-full bg-yellow-500/60 dark:bg-yellow-500/40" />
              <div className="w-2 h-2 rounded-full bg-green-500/60 dark:bg-green-500/40" />
            </div>
            <span className="text-[9px] font-mono text-slate-600 dark:text-slate-500">organic_traffic.json</span>
          </div>
          
          {/* Gráfico Abstrato Compactado (Reduzido para h-24 e py-2) */}
          <div className="my-auto py-2 flex items-end justify-between h-24 gap-1.5 px-1">
            <div className="w-full bg-purple-500/30 dark:bg-purple-500/20 rounded-t h-[40%] group-hover:bg-purple-500/50 dark:group-hover:bg-purple-500/40 transition-all duration-500" />
            <div className="w-full bg-indigo-500/30 dark:bg-indigo-500/20 rounded-t h-[65%] group-hover:bg-indigo-500/50 dark:group-hover:bg-indigo-500/40 transition-all duration-500 delay-75" />
            <div className="w-full bg-purple-500/40 dark:bg-purple-500/30 rounded-t h-[50%] group-hover:bg-purple-500/60 dark:group-hover:bg-purple-500/50 transition-all duration-500 delay-100" />
            <div className="w-full bg-cyan-500/30 dark:bg-cyan-500/20 rounded-t h-[85%] group-hover:bg-cyan-500/50 dark:group-hover:bg-cyan-500/40 transition-all duration-500 delay-150" />
          </div>

          <div className="space-y-0.5">
            <p className="text-[10px] font-mono text-purple-700 dark:text-purple-400">SEO Optimization</p>
            <p className="text-xs font-medium text-slate-900 dark:text-white">Performance Score: 100%</p>
          </div>
        </div>
        
        <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-2xl pointer-events-none" />
    </div>
  );
}