"use client";

import { type ChangeEvent, useState } from "react";
import Image from "next/image";
import SunIcon from "@/assets/desktop/icon-sun.svg";
import MoonIcon from "@/assets/desktop/icon-moon.svg";

export default function ThemeSwitch() {
  const [isDark, setIsDark] = useState(false);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsDark(event.target.checked);
  };

  return (
    <div className="flex items-center gap-4">
      <Image src={SunIcon} alt="Sun icon" />
      <label className="relative inline-block h-6 w-12 cursor-pointer">
        <input
          type="checkbox"
          checked={isDark}
          onChange={handleChange}
          className="peer absolute h-px w-px opacity-0"
        />

        <span className="before:bg-accent hover:before:bg-accent-hover absolute inset-0 rounded-full bg-(--neutral-0) transition-colors duration-200 ease-linear before:absolute before:top-1.25 before:left-1.25 before:h-3.5 before:w-3.5 before:rounded-full before:transition before:delay-100 before:content-[''] before:ease-initial peer-checked:before:translate-x-6" />
      </label>
      <Image src={MoonIcon} alt="Moon icon" />
    </div>
  );
}
