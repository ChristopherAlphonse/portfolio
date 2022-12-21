import React from "react";

const TempHero = () => {
  return (
    <div className="containerr flex h-[100vh] items-center  overflow-hidden bg-zinc-800 py-32 dark:bg-zinc-50 ">
      <div className="container mx-auto h-full">
        <div className="flex justify-end">
          <div className=" before:-w-9 mb-20 text-center before:mx-auto before:mb-2 before:mr-1 before:block before:h-1 before:rounded-sm before:bg-blue-400 sm:text-left sm:before:mx-0">
            <h1 className="text-3xl dark:text-zinc-800">Featured Projects</h1>
          </div>
        </div>

        <div>
          <div class="box max-w-6xl bg-zinc-900 shadow-xl shadow-blue-900/40">
            <p class="para mx-3 mb-5 flex justify-center bg-gray-900 py-2 text-white lg:justify-end lg:bg-transparent">
              NextJS, TypeScript, Rust, Node, TauriJS
            </p>

            <section class="body-font text-gray-600">
              <div class="container mx-auto">
                <div class="-mx-4 -mb-10 flex flex-wrap text-center">
                  <div class="mb-10 px-4 sm:w-1/2">
                    <div class="mb-9 text-7xl uppercase sm:text-5xl">
                      Project 001
                    </div>
                    <div class="title-font text-md mt-6 mb-5 flex items-center bg-gray-900 p-5 text-white shadow-2xl lg:text-lg">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Atque quisquam, itaque, dolore earum doloremque aperiam
                      alias sapiente sunt modi illo commodi incidunt quae ipsa!
                      Illum fuga quidem perspiciatis eaque odit!
                    </div>
                    <div class="mb-10 ml-1 flex justify-center">
                      <button class="bb md:text-md inline-flex rounded-3xl text-sm text-white">
                        VIEW
                      </button>
                      <button class="text-md ml-7 inline-flex rounded-3xl py-2 px-6 text-sm text-gray-50">
                        LEARN MORE
                      </button>
                    </div>
                  </div>
                  <div class="ye mb-10 px-9 pb-9 sm:w-1/2">
                    <div class="h-70">
                      <img
                        alt="content"
                        class="object-fit object-center"
                        src="https://images.unsplash.com/photo-1551103782-8ab07afd45c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TempHero;
