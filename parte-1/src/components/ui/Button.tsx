import { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "green";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  fullWidth?: boolean;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-dark text-white border border-dark hover:bg-black hover:border-black active:scale-95",
  outline:
    "bg-transparent text-dark border border-dark hover:bg-dark hover:text-white active:scale-95",
  green:
    "bg-green text-black border border-green hover:opacity-90 active:scale-95",
};

export default function Button({
  variant = "primary",
  fullWidth = false,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-btn px-9 py-5 text-xl font-normal leading-7 transition-all duration-200 cursor-pointer whitespace-nowrap",
        variants[variant],
        fullWidth && "w-full",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
