import Graphic from "./Graphic"
import Buttons from "./Buttons";
import Badge from "./Badge";

export default function Hero() {
  return (
    <section id="home" className="relative w-full flex flex-col justify-center items-center bg-transparent box-border">

      {/* Container principal - reduzimos o gap vertical de 12 para 6 */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">

        {/* LADO ESQUERDO: Textos e CTAs (Compactado para space-y-4) */}
        <div className="reveal-up lg:col-span-7 flex flex-col items-start space-y-4 text-left">

          <div className="transition-all duration-500 hover:translate-y-[-1px]">
            <Badge />
          </div>

          <div className="space-y-1">
            <p className="text-xs font-semibold tracking-widest text-slate-600 dark:text-slate-400 uppercase transition-all duration-300 hover:text-slate-900 dark:hover:text-slate-200">
              Hello there, welcome!
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-none transition-all duration-300 hover:text-purple-700 dark:hover:text-purple-100">
              I'm José Lucas
            </h1>
            <span className="inline-block text-xs font-mono text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-500/10 px-2 py-0.5 rounded-md border border-purple-200 dark:border-purple-500/20 transition-all duration-300 hover:border-purple-300 dark:hover:border-purple-400/40 hover:bg-purple-200 dark:hover:bg-purple-500/15">
              aka ArticPolarDEV
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-800 dark:text-slate-300 leading-tight transition-colors duration-500">
            A Fullstack Developer <br />
            {/* --- Gradiente Corrigido com Suporte para Dark/Light Mode --- */}
            <span className="bg-gradient-to-r from-purple-800 via-indigo-700 to-cyan-800 dark:from-purple-400 dark:via-indigo-200 dark:to-cyan-400 bg-clip-text text-transparent transition-colors duration-500">
              & UI/UX Designer
            </span> <br />
            <span className="text-slate-600 dark:text-slate-400 transition-colors duration-500">& SEO Expert.</span>
          </h2>

          <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm max-w-lg font-light leading-relaxed transition-all duration-300 hover:text-slate-800 dark:hover:text-slate-300">
            Building high-performance web applications with fluid interfaces, focused on providing the best digital user experience.
          </p>

          <div className="pt-1 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto reveal-up-delayed">
            <Buttons />
          </div>
        </div>

        {/* LADO DIREITO: Forçando o card a diminuir no notebook */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full reveal-up-delayed">
          {/* Travado em no máximo 320px de largura nas telas de notebook */}
          <div className="float-slow w-full max-w-[320px] lg:max-w-[340px]">
            <Graphic />
          </div>
        </div>

      </div>
    </section>
  );
}