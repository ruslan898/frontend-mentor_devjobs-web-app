import Image from "next/image";
import Button from "./Button";
import scootLogo from "@/../public/logos/scoot.svg";

export default function CompanyLabel() {
  return (
    <section className="bg-surface relative container max-w-182.5 rounded-md md:flex">
      <div className="absolute top-0 left-[50%] flex h-12.5 w-12.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-amber-600 md:hidden">
        <Image src={scootLogo} alt="Scoot logo" />
      </div>

      <div className="hidden size-35 items-center justify-center bg-amber-600 md:flex rounded-l-md">
        <Image src={scootLogo} alt="Scoot logo" className="w-20" />
      </div>

      <div className="flex flex-col items-center gap-4 p-8 pt-12.5 md:flex-1 md:flex-row md:justify-between md:py-2 md:pr-9.25 md:pl-10">
        <div className="text-center md:text-left">
          <p className="text-tpg mb-2 text-[20px] font-bold md:mb-1.5">Scoot</p>
          <p>scoot.com</p>
        </div>
        <Button variant="secondary">Company Site</Button>
      </div>
    </section>
  );
}
