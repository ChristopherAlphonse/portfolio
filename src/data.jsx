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
    category: "Web development",
    description:
      "Benivi Clothing is made using Shopify and Sanity.io for CMS. Priority was a slick design, I used Hydrogen which is a react base framework for the Front-end",
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
    category: "Web development",
    description:
      "Mellisa And Lexis is a smoothy website  made using squareSpace no code Headless API and SEO and google analytics manage by me",
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
    description: "This is prod 3",
    stack: ["Stripe"],
    stack2: ["Sanity"],
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
    name: "web development",
  },
  {
    name: "Bootcamp Projects",
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
