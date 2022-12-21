import { FeaturedData } from "../../data";
import React from "react";
import TempHero from "./TempHero";

const Featured = () => {
  return (
    <div className="container mx-auto h-full bg-white">
      <div className="flex justify-end">
        <div className=" before:-w-9 mb-20 text-center before:mx-auto before:mb-2 before:mr-1 before:block before:h-1 before:rounded-sm before:bg-blue-400 sm:text-left sm:before:mx-0">
          <h1 className="text-3xl dark:text-zinc-800">Featured Projects</h1>
        </div>
      </div>
      <div className="bg-zinc-100 shadow-xl shadow-blue-900/40 dark:bg-zinc-900">
        <section className="grid grid-cols-1 gap-y-9">
          {FeaturedData.map((item) => {
            return <TempHero key={item.id} featured={item} />;
          })}
        </section>
      </div>{" "}
    </div>
  );
};
export default Featured;
