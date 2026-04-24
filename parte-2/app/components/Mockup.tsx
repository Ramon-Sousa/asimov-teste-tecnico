import Image from "next/image";

function Dot() {
  return <div className="h-5 w-5 rounded-full bg-[#2A2F35]" />;
}

export default function Mockup() {
  return (
    <div
      className="relative mx-auto w-full max-w-[1240px]
      aspect-video md:aspect-[1240/642]
      rounded-[24px] md:rounded-[32px]
      border border-white/10
      bg-[#0E1012]"
      role="img"
      aria-label="Preview da plataforma Asimov Academy"
    >
      {/* Header */}
      <div className="absolute inset-x-5 top-4 z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Dot />
          <Dot />
          <Dot />
        </div>

        <span className="text-sm md:text-base text-white/50">
          Asimov Academy
        </span>
      </div>

      {/* Content */}
      <div className="absolute inset-x-4 top-[52px] bottom-4">
        <div className="relative h-full w-full overflow-hidden rounded-[12px] md:rounded-[16px]">
          <Image
            src="/images/mockup.png"
            alt="Plataforma Asimov Academy com cursos de Python e IA"
            fill
            priority
            sizes="(max-width: 768px) 92vw, (max-width: 1280px) 90vw, 1200px"
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}