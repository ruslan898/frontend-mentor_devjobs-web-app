import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
};

export default function CardGrid({ children }: CardGridProps) {
  return (
    <section className="container md:max-lg:w-[95%]">
      <ul className="grid grid-cols-[repeat(auto-fit,350px)] justify-center gap-x-2.5 gap-y-12.5 md:gap-y-16.25 lg:gap-x-7.5">
        {children}
      </ul>
    </section>
  );
}
