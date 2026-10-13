import Image from "next/image";
import Title from "./Title";
import type { DataItem } from "@/types/types";

type CardProps = {
  data: DataItem;
};

export default function Card({ data }: CardProps) {
  const {
    logo,
    logoBackground,
    logoWidth,
    logoHeight,
    company,
    position,
    postedAt,
    contract,
    location,
  } = data;

  return (
    <div className="bg-surface group/card relative flex min-h-63.25 w-87.5 cursor-pointer flex-col rounded-lg px-8 py-5 text-base">
      <div
        className="absolute top-0 flex h-12.5 w-12.5 -translate-y-1/2 items-center justify-center rounded-2xl"
        style={{ backgroundColor: logoBackground }}
      >
        <Image
          src={logo}
          alt="Scoot logo"
          width={logoWidth}
          height={logoHeight}
        />
      </div>
      <div className="flex flex-1 flex-col justify-center gap-3">
        <ul className="flex gap-3">
          <li>{postedAt}</li>
          <span className="bg-tpg-muted my-auto size-1 rounded-full"></span>
          <li>{contract}</li>
        </ul>
        <Title
          level={2}
          variant="sm"
          className="group-hover/card:text-tpg-muted"
        >
          {position}
        </Title>
        <p>{company}</p>
      </div>
      <p className="text-accent text-sm font-bold">{location}</p>
    </div>
  );
}
