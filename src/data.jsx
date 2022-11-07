import Project1 from "./assets/img/projects/Benivi/Benivi.webp";
import Project2 from "./assets/img/projects/melissaandlexis/Mellisa and Lexis.webp";
import Project3 from "./assets/img/projects/Funkyjunkie/Funkyjunkie.webp";
import Project5 from "./assets/img/projects/Admindashboard/prev.webp";

const Project4 =
  "https://res.cloudinary.com/img-api-pager-2/image/upload/v1667087192/Aza%20Theme/aza_nuv0gn.jpg";

export const projectsData = [
  {
    id: "1",
    name: "Admin Dashboard",
    image: Project5,
    category: "Web development",
    description: "Dashboard for management",
    stack: ["Vite, TS, Node.."],
    sourceCode: "https://github.com/ChristopherAlphonse/admindashboard",
    livePreview: null,
  },
  {
    id: "2",
    name: "Azalais Dark Theme",
    image: Project4,
    category: "theme",
    description: "Dark theme for VS Code",
    stack: ["JSON, Yo code ..."],
    sourceCode: "https://github.com/ChristopherAlphonse/azalais-dark-",
    livePreview:
      "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
  },
  {
    id: "3",
    name: "BENIVI",
    image: Project1,
    category: "Store-front",
    description: "Urban shopify store-front",
    stack: ["Stripe, Shopify"],
    sourceCode: null,
    livePreview: "https://beniviclothing.com/",
  },
  {
    id: "4",
    name: "Melissa and Lexis",
    image: Project2,
    category: "Store-front",
    description:
      "SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    stack: ["SquareSpace, Contentful"],
    sourceCode: null,
    livePreview: "https://melissaandlexis.square.site/",
  },
  {
    id: "5",
    name: "Funky Junkie",
    image: Project3,
    category: "Store-front",
    description: "Urban clothing store from Boston.",
    stack: ["HydrogenJS, TS"],
    sourceCode: null,
    livePreview: "https://www.funkyjunkieco.com/",
  },
];

// projects
export const projectsNav = [
  {
    name: "All",
  },
  {
    name: "Store-front",
  },
  {
    name: "Web development",
  },
  {
    name: "Theme",
  },
];
