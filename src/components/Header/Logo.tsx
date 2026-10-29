import LogoSvg from "@/assets/logo.svg?react";

export default function Logo() {
  return (
    <div className="flex items-center gap-2 font-semibold text-lg tracking-wide select-none cursor-pointer transition-transform duration-300 hover:scale-[1.01]">
      <div className="flex items-center justify-center shrink-0">
        <LogoSvg className="w-8 h-8 text-slate-900 dark:text-white transition-colors duration-500 hover:rotate-[-4deg]" />
      </div>
      <span className="bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 dark:from-white dark:via-slate-200 dark:to-slate-400 bg-clip-text text-transparent transition-colors duration-500">
        ArticPolarDEV
      </span>
    </div>
  );
}