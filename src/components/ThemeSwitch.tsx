"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import SunIcon from "@/assets/desktop/icon-sun.svg";
import MoonIcon from "@/assets/desktop/icon-moon.svg";

function subscribe() {
  return () => {};
}

export default function ThemeSwitch() {
  const mounted = useSyncExternalStore(
    subscribe,
    () => true,
    () => false,
  );
  const { theme, setTheme } = useTheme();

  if (!mounted) {
    return null;
  }

  function toggleTheme() {
    setTheme(theme === "dark" ? "light" : "dark");
  }

  return (
    <div className="flex items-center gap-4">
      <Image src={SunIcon} alt="Sun icon" />
      <label className="relative inline-block h-6 w-12 cursor-pointer">
        <input
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
          className="peer absolute h-px w-px opacity-0"
        />

        <span className="before:bg-accent hover:before:bg-accent-hover absolute inset-0 rounded-full bg-(--neutral-0) transition-colors duration-200 ease-linear before:absolute before:top-1.25 before:left-1.25 before:h-3.5 before:w-3.5 before:rounded-full before:transition before:delay-100 before:content-[''] before:ease-initial peer-checked:before:translate-x-6" />
      </label>
      <Image src={MoonIcon} alt="Moon icon" />
    </div>
  );
}
