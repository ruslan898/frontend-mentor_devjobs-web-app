import { ReactNode } from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | 'light';
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const classes = twMerge(
    clsx(
      "leading-[125%] transition-colors delay-75 cursor-pointer rounded-md inline-block py-3 max-w-37.5 font-bold",
      {
        "bg-accent text-tpg-inverted hover:bg-accent-hover px-8":
          variant === "primary",
        "bg-[#b7b9c6] text-(--indigo-500) hover:bg-[#9fa2cc] px-5 dark:bg-[#2d333f] dark:text-tpg-inverted dark:hover:bg-[#545863]":
          variant === "secondary",
        "bg-[#c9c9c9] text-tpg-inverted hover:bg-[#d2d2d2] px-5":
          variant === "light",
      },
      className,
    ),
  );

  return <button className={classes}>{children}</button>;
}
