import Card from "@/components/Card";
import CardGrid from "@/components/CardGrid";
import data from "@/../data.json";
import Searchbar from "@/components/Searchbar";
import type { DataItem } from "@/types/types";
import Button from "@/components/Button";

export default function Home() {
  return (
    <div className="flex -translate-y-10 flex-col gap-26.25">
      <Searchbar />
      <div className="flex flex-col gap-14">
        <CardGrid>
          {data.map((item: DataItem) => {
            return <Card key={item.id} data={item} />;
          })}
        </CardGrid>
        <Button className="mx-auto">Load More</Button>
      </div>
    </div>
  );
}
