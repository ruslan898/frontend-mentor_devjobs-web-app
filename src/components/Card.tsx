import Image from "next/image";
import Title from "./Title";

export default function Card() {
  return (
    <div className="bg-surface group/card relative flex min-h-63.25 w-87.5 cursor-pointer flex-col rounded-lg px-8 py-5 text-base">
      <div className="absolute top-0 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#E99210]">
        <Image src="/logos/scoot.svg" alt="Scoot logo" width={30} height={20} />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        <ul className="flex gap-3">
          <li>5h ago</li>
          <span className="bg-tpg-muted my-auto size-1 rounded-full"></span>
          <li>Full Time</li>
        </ul>
        <Title
          level={2}
          variant="sm"
          className="group-hover/card:text-tpg-muted"
        >
          Senior Software Engineer
        </Title>
        <p>Scoot</p>
      </div>
      <p className="text-accent text-sm">United Kingdom</p>
    </div>
  );
}
