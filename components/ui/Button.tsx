import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentPropsWithoutRef } from "react";

type ButtonVariant = "primary" | "secondary" | "outline";

type ButtonProps = {
  children: React.ReactNode;
  url: string;
  variant?: ButtonVariant;
  className?: string;
} & Omit<
  ComponentPropsWithoutRef<typeof Link>,
  "href" | "children" | "className"
>;

const buttonBaseStyles =
  "max-sm:w-full max-sm:text-sm px-8 py-4 rounded-full font-medium transition-colors duration-300 ease-in-out inline-block text-center";

const buttonVariants: Record<ButtonVariant, string> = {
  primary: "bg-brand text-light hover:bg-brand/90",
  secondary: "bg-light text-brand hover:bg-light/90",
  outline:
    "bg-transparent text-light border border-light hover:bg-light hover:text-brand",
};

const Button = ({
  children,
  url,
  variant = "primary",
  className,
  ...props
}: ButtonProps) => {
  return (
    <Link
      href={url}
      className={cn(buttonBaseStyles, buttonVariants[variant], className)}
      {...props}
    >
      {children}
    </Link>
  );
};

export default Button;
