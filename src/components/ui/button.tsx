import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "font-bold font-space relative z-10 w-full rounded-lg active:translate-x-0 active:translate-y-0 duration-150 ease-in-out",
  {
    variants: {
      variant: {
        default: "bg-secondary text-white",
      },
      size: {
        sm: "p-2 px-6 text-sm -translate-x-1 -translate-y-1 hover:-translate-x-1.5 hover:-translate-y-1.5",
        md: "p-4 px-8 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-2 hover:-translate-y-2",
        lg: "p-6 px-8 -translate-x-1.5 -translate-y-1.5 hover:-translate-x-2 hover:-translate-y-2",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  children,
  variant,
  size,
  className,
}: ButtonProps) {
  return (
    <div className="relative mt-2">
      <button className={cn(buttonVariants({ variant, size, className }))}>
        {children}
      </button>
      <div className="absolute inset-0 bg-primary rounded-lg" />
    </div>
  );
}
