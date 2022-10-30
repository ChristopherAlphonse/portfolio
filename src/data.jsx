// projects images
import Project1 from "./assets/img/projects/Benivi/Benivi.webp";
import Project2 from "./assets/img/projects/melissaandlexis/Mellisa and Lexis.webp";
import Project3 from "./assets/img/projects/Funkyjunkie/Funkyjunkie.webp";
// import Project4 from "./assets/img/projects/p4.webp";
// import Project5 from "./assets/img/projects/p5.webp";
// import Project6 from "./assets/img/projects/p6.webp";
// projects

const Project4 =
  "https://res.cloudinary.com/img-api-pager-2/image/upload/v1667087192/Aza%20Theme/aza_nuv0gn.jpg";

export const projectsData = [
  {
    id: "1",
    name: "Azalais Dark Theme",
    image: Project4,
    category: "Web development",
    description: "Dark theme for VS Code",
    stack: ["Stripe"],
    stack2: ["Sanity"],
    stack3: ["Hydrogen"],
    sourceCode: "https://github.com",
    livePreview:
      "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
  },
  {
    id: "2",
    name: "Benivi",
    image: Project1,
    category: "Store-front",
    description: "Urban shopify store-front",
    stack: ["Stripe"],
    stack2: ["Sanity"],
    stack3: ["Hydrogen"],
    sourceCode: "https://github.com",
    livePreview: "https://beniviclothing.com/",
  },
  {
    id: "3",
    name: "Mellisa and Lexis",
    image: Project2,
    category: "Store-front",
    description:
      "SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    // stack: ["Hydrogen"],
    // stack2: ["TypeScript"],
    // stack3: ["Tailwind"],
    sourceCode: "https://github.com",
    livePreview: "https://melissaandlexis.square.site/",
  },
  {
    id: "4",
    name: "Funkyjunkie",
    image: Project3,
    category: "Web development",
    description: "Urban clothing store from Boston.",
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
