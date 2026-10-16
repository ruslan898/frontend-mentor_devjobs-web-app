import { useId } from "react";
import Image from "next/image";
import searchIcon from "@/assets/desktop/icon-search.svg";
import locationIcon from "@/assets/desktop/icon-location.svg";
import filterIcon from "@/assets/mobile/icon-filter.svg";
import Button from "./Button";

export default function Searchbar() {
  const id = useId();

  return (
    <form className="bg-surface container grid grid-cols-[1fr_auto] rounded-md md:grid-cols-3 dark:text-(--neutral-0)">
      <div className="flex items-center gap-4 px-5 py-4.5 md:border-e">
        <Image src={searchIcon} alt="Search icon" className="hidden md:block" />
        <input
          type="text"
          placeholder="Filter by title…"
          name="title"
          className="caret-accent outline-none"
        />
      </div>
      <div className="hidden items-center gap-4 border-e px-6 py-4.5 md:flex">
        <Image src={locationIcon} alt="Location icon" />
        <input
          type="text"
          placeholder="Filter by location…"
          name="location"
          className="caret-accent outline-none"
        />
      </div>
      <div className="hidden items-center justify-center gap-4 py-4.5 md:flex">
        <input
          type="checkbox"
          name="full-time"
          id={id}
          className="checked:bg-accent checked:before:text-tpg-inverted size-6 cursor-pointer appearance-none rounded-sm bg-[#e8e8ea] checked:opacity-100 checked:before:block checked:before:text-center checked:before:leading-5.5 checked:before:content-['✓'] dark:bg-[#333542]"
        />

        <label
          htmlFor={id}
          className="text-tpg mr-2.5 cursor-pointer font-bold"
        >
          Full Time
        </label>
        <Button className="max-lg:px-3.5">Search</Button>
      </div>
      <div className="flex items-center gap-6 p-4 md:hidden">
        <button type="button">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill="#6E8098"
              fillRule="nonzero"
              className="dark:fill-tpg-inverted"
            />
          </svg>
        </button>

        <Button>
          <svg width={24} height={24} xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#5964E0"
              fillRule="nonzero"
              className="fill-tpg-inverted"
            />
          </svg>
        </Button>
      </div>
    </form>
  );
}
