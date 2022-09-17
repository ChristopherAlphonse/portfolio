// projects images
import Project1 from "./assets/img/projects/Benivi/Benivi.webp";
import Project2 from "./assets/img/projects/melissaandlexis/Mellisa and Lexis.webp";
import Project3 from "./assets/img/projects/Funkyjunkie/Funkyjunkie.webp";
// import Project4 from "./assets/img/projects/p4.webp";
// import Project5 from "./assets/img/projects/p5.webp";
// import Project6 from "./assets/img/projects/p6.webp";
// projects
export const projectsData = [
  {
    id: "1",
    name: "Benivi",
    image: Project1,
    category: "Store-front",
    description: "Benivi Clothing is a modern/urban shopify store-front",
    stack: ["Stripe"],
    stack2: ["Sanity"],
    stack3: ["Hydrogen"],
    sourceCode: "https://github.com",
    livePreview: "https://beniviclothing.com/",
  },
  {
    id: "2",
    name: "Mellisa and Lexis",
    image: Project2,
    category: "Store-front",
    description:
      "Melissa And Lexis is a smoothy website  made using SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    // stack: ["Hydrogen"],
    // stack2: ["TypeScript"],
    // stack3: ["Tailwind"],
    sourceCode: "https://github.com",
    livePreview: "https://melissaandlexis.square.site/",
  },
  {
    id: "3",
    name: "Funkyjunkie",
    image: Project3,
    category: "Web development",
    description: "Funkyjunkie is a Urban clothing store from Boston.",
    stack: ["Tailwind"],
    stack2: ["TypeScript"],
    stack3: ["Hydrogen"],
    sourceCode: "https://github.com",
    livePreview: "https://www.funkyjunkieco.com/",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "Store-front",
  },
  {
    name: "Web development",
  },
];
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "projects",
    href: "portfolio",
  },
  {
    name: "contact",
    href: "contact",
  },
];
