interface SectionHeadingProps {
  title: string;
  description?: string;
}

export default function SectionHeading({ title, description }: SectionHeadingProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-10 items-center md:items-center px-5 md:px-container text-center md:text-left">
      <div className="shrink-0">
        <span className="inline-block bg-green rounded-tag px-1.5 font-medium text-2xl md:text-4xl leading-none text-black">
          {title}
        </span>
      </div>
      {description && (
        <p className="text-base md:text-lg leading-snug text-black max-w-xl">
          {description}
        </p>
      )}
    </div>
  );
}
