import { GraduationCap, Code, Users, BadgeCheck } from "lucide-react";
import type { ReactNode } from "react";

const BULLETS = [
  {
    icon: <GraduationCap size={24} strokeWidth={2} />,
    text: "+40 horas de conteúdo direto ao ponto",
  },
  {
    icon: <Code size={24} strokeWidth={2} />,
    text: "Projetos com Python + IA desde o módulo 1",
  },
  {
    icon: <Users size={24} strokeWidth={2} />,
    text: "Suporte da comunidade com +20.000 alunos",
  },
  {
    icon: <BadgeCheck size={24} strokeWidth={2} />,
    text: "Certificado reconhecido pelo mercado",
  },
] as const;

export default function Bullets() {
  return (
    <section className="flex justify-center w-full mt-14">
      
      <div className="max-w-[1000px] w-full px-6 lg:px-0">
        
        {/* Desktop */}
        <div className="hidden md:flex items-center justify-between gap-6">
          {BULLETS.map((item, i) => (
            <div
              key={i}
              className="flex items-center justify-center gap-2.5 flex-1 min-w-0"
            >
              <span className="text-[#85E8EA] shrink-0">
                {item.icon}
              </span>

              <p className="text-[14px] leading-[20px] text-[#8A94A6] tracking-[-0.02em] text-center">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile */}
        <div className="flex flex-col items-center gap-5 md:hidden">
          {BULLETS.map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <span className="text-[#85E8EA] shrink-0">
                {item.icon}
              </span>

              <p className="text-[14px] leading-[20px] text-[#8A94A6] tracking-[-0.02em]">
                {item.text}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}