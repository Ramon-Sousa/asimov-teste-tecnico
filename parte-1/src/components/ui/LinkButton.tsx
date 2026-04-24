import { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type LinkButtonVariant = "primary" | "outline" | "green";

interface LinkButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkButtonVariant;
  fullWidth?: boolean;
}

const variants: Record<LinkButtonVariant, string> = {
  primary:
    "bg-dark text-white border border-dark hover:bg-black hover:border-black active:scale-95",
  outline:
    "bg-transparent text-dark border border-dark hover:bg-dark hover:text-white active:scale-95",
  green:
    "bg-green text-black border border-green hover:opacity-90 active:scale-95",
};

export default function LinkButton({
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...props
}: LinkButtonProps) {
  return (
    <a
      className={cn(
        "inline-flex items-center justify-center rounded-btn px-9 py-5 text-xl font-normal leading-7 transition-all duration-200 whitespace-nowrap",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
}
