import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  MessageSquare,
  ArrowUpRight,
  Package,
  CheckCircle2,
  AlertCircle,
  Loader2
} from "lucide-react";
import InstagramIcon from "@/assets/instagram.svg?react";
import GithubIcon from "@/assets/github.svg?react";
import LinkedinIcon from "@/assets/linkedin.svg?react";
import NugetIcon from "@/assets/nuget.svg?react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("https://portfolio-email-worker.vilma4040p.workers.dev/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-slate-50 dark:bg-[#070709] box-border px-4 md:px-8 flex flex-col justify-center items-center transition-colors duration-500"
    >
      {/* 🔮 BACKGROUND GLOWS */}
      <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] rounded-full bg-purple-600/10 dark:bg-purple-600/[0.04] blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] rounded-full bg-cyan-500/10 dark:bg-cyan-500/[0.04] blur-[120px] pointer-events-none z-0" />

      {/* 📐 CYBERPUNK GRID TEXTURE */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] pointer-events-none z-0" />

      <div className="relative z-10 w-full max-w-7xl flex-1 flex flex-col justify-between gap-3 min-h-0">

        {/* HEADER DA SEÇÃO */}
        <div className="reveal-up flex flex-col space-y-0.5 shrink-0">
          <div className="flex items-center gap-2 text-purple-600 dark:text-purple-400 font-mono text-[11px] uppercase tracking-widest">
            <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
            Get in Touch
          </div>
          <h2 className="text-2xl lg:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
            Let's <span className="bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-xs font-light max-w-2xl leading-relaxed transition-all duration-300 hover:text-slate-800 dark:hover:text-slate-300">
            Feel free to reach out for collaborations, project inquiries, or just to say hello. Operating worldwide from Bahia, Brazil.
          </p>
        </div>

        {/* LAYOUT DE CONTATO EM GRID DE 2 COLUNAS */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3 items-stretch flex-1 min-h-0">

          {/* COLUNA ESQUERDA: INFORMAÇÕES DE ALCANCE (5 colunas) */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-2.5 min-h-0">

            {/* CARD DE DETALHES RÁPIDOS */}
            <div className="reveal-up flex-1 bg-white/60 dark:bg-[#0E0E12]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-4 backdrop-blur-xl flex flex-col justify-between space-y-2 min-h-0 shadow-sm dark:shadow-none">
              <div className="space-y-1.5">
                <span className="inline-flex items-center gap-1.5 text-[8px] font-mono tracking-wider uppercase bg-purple-100 dark:bg-purple-500/10 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-500/20 px-2 py-0.5 rounded-md w-fit">
                  Direct Reach
                </span>
                <h3 className="text-sm lg:text-base font-bold text-slate-900 dark:text-white tracking-tight">
                  Always open for interesting ideas & challenges.
                </h3>
                <p className="text-slate-600 dark:text-slate-300 text-[10px] lg:text-[11px] font-light leading-relaxed">
                  Have an internal dashboard, automation system, or an IoT project (like totem kiosks) in mind? Drop a message.
                </p>
              </div>

              {/* LISTA DE INFOS */}
              <div className="space-y-1.5 pt-1.5 border-t border-slate-200 dark:border-white/5">
                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <div className="p-1 rounded-lg bg-purple-100 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 shrink-0">
                    <Mail size={13} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] font-mono text-slate-500 uppercase leading-none">Email Me</p>
                    <a href="mailto:articpolardev@gmail.com" className="text-[11px] font-medium text-slate-700 dark:text-slate-200 hover:text-purple-600 dark:hover:text-white hover:underline truncate block mt-0.5">
                      articpolardev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/5">
                  <div className="p-1 rounded-lg bg-cyan-100 dark:bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 shrink-0">
                    <MapPin size={13} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[8px] font-mono text-slate-500 uppercase leading-none">Location</p>
                    <p className="text-[11px] font-medium text-slate-700 dark:text-slate-200 truncate mt-0.5">
                      Bom Jesus da Lapa, BA - Brazil (GMT-3)
                    </p>
                  </div>
                </div>

                {/* HISTÓRICO NUGET */}
                <a
                  href="https://www.nuget.org/profiles/JoseLucas"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-1.5 rounded-xl bg-blue-50 dark:bg-blue-500/5 border border-blue-200 dark:border-blue-500/10 hover:border-blue-300 dark:hover:border-blue-500/30 transition group"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <div className="p-1 rounded-lg bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 shrink-0">
                      <Package size={13} />
                    </div>
                    <div>
                      <p className="text-[8px] font-mono text-slate-500 uppercase leading-none">NuGet Profile</p>
                      <p className="text-[11px] font-medium text-slate-700 dark:text-slate-200 mt-0.5">
                        +9.1k Package Downloads
                      </p>
                    </div>
                  </div>
                  <ArrowUpRight size={13} className="text-slate-400 dark:text-slate-500 group-hover:text-blue-600 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>
              </div>
            </div>

            {/* CARD DE REDES SOCIAIS NA BASE */}
            <div className="reveal-up bg-white/60 dark:bg-[#0E0E12]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-2.5 flex items-center justify-between backdrop-blur-xl shrink-0 shadow-sm dark:shadow-none">
              <span className="text-[8px] font-mono text-slate-500 dark:text-slate-400 uppercase tracking-widest">Connect on socials:</span>

              <div className="flex items-center gap-2">
                <a href="https://www.linkedin.com/in/jose-lucas-santos-silva-articpolardev" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:[filter:drop-shadow(0_0_8px_rgba(10,102,194,0.6))] transition-all">
                  <LinkedinIcon className="w-3.5 h-3.5 fill-current" />
                </a>
                <a href="https://github.com/ArticPolarDEV" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:[filter:drop-shadow(0_0_8px_rgba(168,85,247,0.6))] transition-all">
                  <GithubIcon className="w-3.5 h-3.5 fill-current" />
                </a>
                <a href="https://instagram.com/ArticPolarDEV" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:[filter:drop-shadow(0_0_8px_rgba(225,48,108,0.6))] transition-all">
                  <InstagramIcon className="w-3.5 h-3.5 fill-current" />
                </a>
                <a href="https://www.nuget.org/profiles/JoseLucas" target="_blank" rel="noreferrer" className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:[filter:drop-shadow(0_0_8px_rgba(0,72,128,0.6))] transition-all">
                  <NugetIcon className="w-3.5 h-3.5 fill-current" />
                </a>
              </div>
            </div>

          </div>

          {/* COLUNA DIREITA: FORMULÁRIO DE CONTATO (7 colunas) */}
          <div className="reveal-up lg:col-span-7 bg-white/60 dark:bg-[#0E0E12]/60 border border-slate-200 dark:border-white/10 rounded-2xl p-4 backdrop-blur-xl flex flex-col justify-between space-y-2 min-h-0 shadow-sm dark:shadow-none">

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 text-[8px] font-mono tracking-wider uppercase bg-cyan-100 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-200 dark:border-cyan-500/20 px-2 py-0.5 rounded-md">
                  <MessageSquare size={11} /> Contact Form
                </span>
                <span className="text-[8px] font-mono text-slate-500">Estimating reply in {"<"} 24h</span>
              </div>

              {/* INPUTS DO FORMULÁRIO */}
              <form className="space-y-2" onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-0.5">
                    <label htmlFor="name" className="text-[8px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. John Doe"
                      className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 transition-colors disabled:opacity-50"
                      required
                      disabled={status === "loading"}
                    />
                  </div>

                  <div className="space-y-0.5">
                    <label htmlFor="email" className="text-[8px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 transition-colors disabled:opacity-50"
                      required
                      disabled={status === "loading"}
                    />
                  </div>
                </div>

                <div className="space-y-0.5">
                  <label htmlFor="subject" className="text-[8px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What would you like to discuss?"
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 transition-colors disabled:opacity-50"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                <div className="space-y-0.5">
                  <label htmlFor="message" className="text-[8px] font-mono text-slate-600 dark:text-slate-400 uppercase tracking-wider">Your Message</label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Hello Jose, I'd like to reach you regarding..."
                    className="w-full bg-white dark:bg-black/40 border border-slate-200 dark:border-white/5 rounded-xl px-2.5 py-1.5 text-[11px] text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-600 focus:outline-none focus:border-purple-500 dark:focus:border-purple-500/50 transition-colors resize-none h-[65px] lg:h-[75px] disabled:opacity-50"
                    required
                    disabled={status === "loading"}
                  />
                </div>

                {/* BOTÃO DE SUBMIT DINÂMICO */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full border rounded-xl py-2 px-3 text-[11px] font-semibold flex items-center justify-center gap-2 transition-all active:scale-[0.98] ${
                    status === "success"
                      ? "bg-emerald-50 dark:bg-emerald-500/20 border-emerald-300 dark:border-emerald-500/40 text-emerald-700 dark:text-emerald-300"
                      : status === "error"
                      ? "bg-red-50 dark:bg-red-500/20 border-red-300 dark:border-red-500/40 text-red-700 dark:text-red-300"
                      : "bg-gradient-to-r from-purple-100 to-cyan-100 dark:from-purple-600/20 dark:to-cyan-600/20 hover:from-purple-200 hover:to-cyan-200 dark:hover:from-purple-600/30 dark:hover:to-cyan-600/30 border-purple-300 dark:border-purple-500/30 hover:border-cyan-400 dark:hover:border-cyan-500/40 text-slate-800 dark:text-white shadow-sm dark:shadow-[0_0_12px_rgba(168,85,247,0.1)]"
                  }`}
                >
                  {status === "loading" && <Loader2 size={12} className="animate-spin text-purple-600 dark:text-purple-400" />}
                  {status === "success" && <CheckCircle2 size={12} className="text-emerald-600 dark:text-emerald-400" />}
                  {status === "error" && <AlertCircle size={12} className="text-red-600 dark:text-red-400" />}

                  {status === "idle" && (
                    <>
                      Send Message
                      <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                  {status === "loading" && "Transmitting Message..."}
                  {status === "success" && "Message Sent Successfully!"}
                  {status === "error" && "Failed to Send. Try Again."}
                </button>
              </form>
            </div>

            {/* BASE/COPYRIGHT */}
            <div className="pt-1.5 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[8px] font-mono text-slate-500 shrink-0">
              <span>DESIGNED BY ARTICPOLARDEV</span>
              <span>© {new Date().getFullYear()} ALL RIGHTS RESERVED</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}