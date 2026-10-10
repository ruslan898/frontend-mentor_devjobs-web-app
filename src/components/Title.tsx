import clsx from "clsx";

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
  const classes = clsx(
    "font-bold leading-[125%] text-tpg transition duration-100",
    variant === "lg" && "text-[20px] md:text-[28px]",
    variant === "md" && "text-[20px] md:text-[24px]",
    variant === "sm" && "text-[20px]",
    className,
  );
  const Tag = `h${level}` as ElementType;

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
}
