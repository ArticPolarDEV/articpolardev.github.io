import React from "react";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: "purple" | "cyan" | "pink" | "amber" | "emerald" | "indigo";
}

const borderGlows = {
  purple: "hover:border-purple-300 dark:hover:border-purple-500/30",
  cyan: "hover:border-cyan-300 dark:hover:border-cyan-500/30",
  pink: "hover:border-pink-300 dark:hover:border-pink-500/30",
  amber: "hover:border-amber-300 dark:hover:border-amber-500/30",
  emerald: "hover:border-emerald-300 dark:hover:border-emerald-500/30",
  indigo: "hover:border-indigo-300 dark:hover:border-indigo-500/30",
};

export default function BentoCard({ 
  children, 
  className = "", 
  glowColor 
}: BentoCardProps) {
  const hoverClass = glowColor ? borderGlows[glowColor] : "";
  
  return (
    <div
      className={`
        bg-white/60 dark:bg-[#0E0E12]/80 
        border border-slate-200 dark:border-white/10 dark:border-t-white/20 
        backdrop-blur-xl rounded-2xl p-4 lg:p-5 flex flex-col justify-between 
        shadow-sm dark:shadow-2xl transition-all duration-500 ease-out relative overflow-hidden
        hover:-translate-y-1 hover:border-slate-300 dark:hover:border-white/20 
        hover:shadow-md dark:hover:shadow-[0_18px_40px_rgba(15,23,42,0.35)]
        ${hoverClass} ${className}
      `}
    >
      {children}
    </div>
  );
}