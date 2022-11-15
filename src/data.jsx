import Project1 from "./assets/img/Projects-images/Dash.png.webp";
import Project2 from "./assets/img/Projects-images/aza.png.webp";
import Project3 from "./assets/img/Projects-images/Benivi.png.webp";
import Project4 from "./assets/img/Projects-images/Mel.png.webp";
import Project5 from "./assets/img/Projects-images/Funky.png.webp";
import Project6 from "./assets/img/Projects-images/Noted.png.webp";

export const projectsData = [
  {
    id: "Admin Dashboard",
    name: "Admin Dashboard",
    image: Project1,
    category: "Web development",
    description: "Dashboard for management/workflow helper",
    stack: ["Vite, TS, Node, Sass"],
    sourceCode: "https://github.com/ChristopherAlphonse/admindashboard",
    livePreview: null,
  },
  {
    id: "Noted",
    name: "Noted",
    image: Project6,
    category: "Web development",
    description:
      "Note taking app Build with Full stack methodology for both web and desktop Native capability, with password reset capability, Sign In/Up, Still on working progress",
    stack: ["Vite, TS, Node, Rust, Tauri, Tailwind"],
    sourceCode: "https://github.com/ChristopherAlphonse/Noted",
    livePreview: null,
  },
  {
    id: "Azalais Dark Theme",
    name: "Azalais Dark Theme",
    image: Project2,
    category: "theme",
    description: "Dark theme made for the eye, aka my daily theme for VS Code",
    stack: ["JSON, Yo code ..."],
    sourceCode: "https://github.com/ChristopherAlphonse/azalais-dark-",
    livePreview:
      "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
  },
  {
    id: "Benivi",
    name: "Benivi, NO SOURCE CODE",
    image: Project3,
    category: "Store-front",
    description: "Urban shopify store-front, build with Shopify.",
    stack: ["Stripe, Shopify"],
    sourceCode: null,
    livePreview: "https://beniviclothing.com/",
  },
  {
    id: "Melissa and Lexis",
    name: "Melissa and Lexis, NO SOURCE CODE",
    image: Project4,
    category: "Store-front",
    description:
      "SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    stack: ["SquareSpace, Contentful"],
    sourceCode: null,
    livePreview: "https://melissaandlexis.square.site/",
  },
  {
    id: "Funky Junkie",
    name: "Funky Junkie, NO SOURCE CODE",
    image: Project5,
    category: "Store-front",
    description: "Urban clothing store from Boston, build with Shopify.",
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
