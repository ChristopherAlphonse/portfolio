import Project1 from "./assets/img/Projects-images/Dash.png.webp";
import Project2 from "./assets/img/Projects-images/Benivi.png.webp";
import Project3 from "./assets/img/Projects-images/Benivi.png.webp";
import Project4 from "./assets/img/Projects-images/Benivi.png.webp";
import Project5 from "./assets/img/Projects-images/Benivi.png.webp";
import Project6 from "./assets/img/Projects-images/Benivi.png.webp";

export const projectsData = [
  {
    id: "1",
    name: "Admin Dashboard",
    image: Project1,
    category: "Web development",
    description: "Dashboard for management",
    stack: ["Vite, TS, Node.."],
    sourceCode: "https://github.com/ChristopherAlphonse/admindashboard",
    livePreview: null,
  },
  {
    id: "2",
    name: "Azalais Dark Theme",
    image: Project2,
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
    image: Project3,
    category: "Store-front",
    description: "Urban shopify store-front",
    stack: ["Stripe, Shopify"],
    sourceCode: null,
    livePreview: "https://beniviclothing.com/",
  },
  {
    id: "4",
    name: "Melissa and Lexis",
    image: Project4,
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
    image: Project5,
    category: "Store-front",
    description: "Urban clothing store from Boston.",
    stack: ["HydrogenJS, TS"],
    sourceCode: null,
    livePreview: "https://www.funkyjunkieco.com/",
  },
  {
    id: "6",
    name: "Noted",
    image: Project6,
    category: "Web development",
    description:
      "Note taking app with verification for sign in/out and forgot password",
    stack: ["Vite, TS, Node, Nodemailer, MongoDB"],
    sourceCode: "https://github.com/ChristopherAlphonse/Noted",
    livePreview: null,
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
