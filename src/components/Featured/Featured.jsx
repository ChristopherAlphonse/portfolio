import { FeaturedData } from "../../Data/data";
import TempHero from "./TempHero";

function Featured() {
  return (
    <div className="align-center container mx-auto grid h-full max-w-full place-items-center overflow-hidden  bg-zinc-800 dark:bg-zinc-50 ">
      <div className=" mb-20">
        <h1 className=" mt-9 text-3xl dark:text-zinc-800 md:text-5xl">
          Featured Projects
        </h1>
      </div>

      <section className="mb-2 grid h-full max-w-7xl gap-y-9">
        {FeaturedData.map((item) => (
          <TempHero key={item.id} featured={item} />
        ))}
      </section>
    </div>
  );
}
export default Featured;
