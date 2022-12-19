import React from "react";

const TempHero = () => {
  return (
    <div className="containerr flex h-[100vh] items-center  overflow-hidden bg-zinc-900 py-32 dark:bg-zinc-50 ">
      <div className="container mx-auto h-full">
        <div className="flex justify-end">
          <div className=" before:-w-9 mb-20 text-center before:mx-auto before:mb-2 before:mr-1 before:block before:h-1 before:rounded-sm before:bg-blue-400 sm:text-left sm:before:mx-0">
            <h1 className="text-3xl dark:text-zinc-800">Featured Projects</h1>
          </div>
        </div>

        <section className="">
          <div className="flex flex-wrap">
            <div className=" md:w-1/2">
              <div className="h-full w-full rounded bg-[url('https://source.unsplash.com/random/1280x720')] bg-cover shadow-md"></div>
            </div>

            <div className="h-auto px-4 md:w-1/2">
              <div className="mb-8">
                <img
                  className="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
              <div>
                <img
                  className="rounded shadow-md"
                  src="https://source.unsplash.com/random/1280x720"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TempHero;
