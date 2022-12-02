import { Footer, Header } from "../components/compIndex";
import { HarleyCover, PureByMelGif, PureByMelPic } from "../assets";
import { Helmet, HelmetProvider } from "react-helmet-async";

import React from "react";
import { projectsData } from "../data";

const Items = Object.entries(projectsData);

// console.log({ Items });

const navigation = [
  { name: "Home", href: "/", current: true },
  {
    name: "Resume",
    href: "https://drive.google.com/file/d/1CsOt5QC-eNyWjDZ0MpDCNhyuMW7LRea9/view?usp=sharing",
    current: false,
  },
  {
    name: "Cert",
    href: "https://drive.google.com/file/d/1k1qrYWQeJOyMB743MuDphaMmcZG5hTlR/view?usp=sharing",
    current: false,
  },
  {
    name: "GitHub",
    href: "https://github.com/ChristopherAlphonse",
    current: false,
  },
  {
    name: "linkedin",
    href: "https://www.linkedin.com/in/christopher-alphonse-834989161/",
    current: false,
  },
  {
    name: "My Theme",
    href: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
    current: false,
  },
  {
    name: "My PWSH Settings",
    href: "https://github.com/ChristopherAlphonse/Powershell",
    current: false,
  },
  {
    name: "Recommended",
    href: "https://github.com/builtbybel/privatezilla",
    current: false,
  },
  {
    name: <Theme />,
    href: null,
    current: false,
  },
];

const data = {
  cat: Items[0][1].category,

  des: Items[0][1].description,

  des2: Items[0][1].description2,

  img: Items[0][1].image,
  title: Items[0][1].name,
};
// console.log(data.title);
// console.log(Items[0][1]);

function Pure() {
  return (
    <HelmetProvider>
      <Helmet prioritizeSeoTags>
        <link rel="canonical" href="/projects/purebymel" />
        <link
          rel="Noted"
          href="https://christopheralphonse.com/v1/projects/purebymel"
        />
        <title>Christopher Alphonse | Pure Store</title>

        <meta
          name="description"
          content=" Full Stack Developer and PC enthusiast. I want to focus on writing
              clean, efficient code, and user friendly UI/UX experiences"
        />
      </Helmet>

      <Header />

      <section class="bg-white dark:bg-gray-900">
        <div class="relative flex">
          <div class="min-h-screen lg:w-1/3"></div>
          <div class="hidden w-3/4 min-h-screen bg-gray-100 dark:bg-gray-800 lg:block"></div>

          <div class="container flex flex-col justify-center w-full min-h-screen px-6 py-10 mx-auto lg:absolute lg:inset-x-0">
            <h1 class="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">
              What our <span class="text-blue-500">customers</span> <br /> are
              saying
            </h1>

            <div class="mt-10 lg:mt-20 lg:flex lg:items-center">
              <img
                class="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              />

              <div class="mt-8 lg:px-10 lg:mt-0">
                <h1 class="text-2xl font-semibold text-gray-800 dark:text-white lg:w-72">
                  Help us improve our productivity
                </h1>

                <p class="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                  “ Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Tempore quibusdam ducimus libero ad tempora doloribus expedita
                  laborum saepe voluptas perferendis delectus assumenda rerum,
                  culpa aperiam dolorum, obcaecati corrupti aspernatur a. ”
                </p>

                <h3 class="mt-6 text-lg font-medium text-blue-500">
                  Ronik Ederson
                </h3>
                <p class="text-gray-600 dark:text-gray-300">
                  Marketing Manager at Stech
                </p>
              </div>
            </div>

            <div class="flex items-center justify-between mt-12 lg:justify-start">
              <button
                title="left arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                title="right arrow"
                class="p-2 text-gray-800 transition-colors duration-300 border rounded-full rtl:-scale-x-100 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 lg:mx-6 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </HelmetProvider>
  );
}

export default Pure;
