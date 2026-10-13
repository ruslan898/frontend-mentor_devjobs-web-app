import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import type { ElementType, ReactNode } from "react";

type TitleProps = {
  level: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  variant: "lg" | "md" | "sm";
  children: ReactNode;
};

export default function Title({
  level,
  children,
  className,
  variant,
  ...props
}: TitleProps) {
  const classes = twMerge(
    clsx(
      "font-bold leading-[125%] text-tpg transition duration-100",
      variant === "lg" && "text-xl md:text-[28px]",
      variant === "md" && "text-xl md:text-2xl",
      variant === "sm" && "text-xl",
      className,
    ),
  );
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
