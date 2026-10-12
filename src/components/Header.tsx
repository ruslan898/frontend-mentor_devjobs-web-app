import Image from "next/image";
import Logo from "@/assets/desktop/logo.svg";
import ThemeSwitch from "./ThemeSwitch";
import Link from "next/link";

export default function Header() {
  return (
    <header className="h-34 w-full bg-(image:--bg-header-mobile) bg-cover bg-center pt-8 md:bg-(image:--bg-header-tablet) lg:bg-(image:--bg-header-desktop)">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link href="/">
            <Image src={Logo} alt="Logo" priority />
          </Link>
          <div>
            <ThemeSwitch />
          </div>
        </div>
      </div>
    </header>
  );
}
