import Project1 from "./assets/img/Projects-images/Dash.png.webp";
import Project2 from "./assets/img/Projects-images/aza.png.webp";
import Project3 from "./assets/img/Projects-images/Benivi.png.webp";
import Project4 from "./assets/img/Projects-images/Mel.png.webp";
import Project5 from "./assets/img/Projects-images/Funky.png.webp";
import Project6 from "./assets/img/Projects-images/Noted.png.webp";
import { PureByMelPic } from "../src/assets/index";

export const projectsData = [
  {
    id: "Pure by Mel",
    name: "Pure by Mel",
    image: PureByMelPic,
    category: "Web development",
    description:
      "A smoothy store base in Randolph, MA. Focus on providing sweet to your love ones for the holiday",
    description2:
      "Our Mission is to make every guests day better by serving great tasting products as a celebration of health and happiness.",
    stack: ["NextJS, TailwindCSS, TypeScript, Stripe, etc.."],
    view: "https://github.com/ChristopherAlphonse/ye",
    learnMore: "/projects/purebymel",
  },
  {
    id: "Admin Dashboard",
    name: "Admin Dashboard",
    image: Project1,
    category: "Web development",
    description: "Dashboard for management/workflow helper",
    description2:
      "The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.",
    stack: ["Vite, TS, Node, Sass"],
    view: "https://github.com/ChristopherAlphonse/admindashboard",
    learnMore: "/projects/admindashboard",
  },
  {
    id: "Noted",
    name: "Noted",
    image: Project6,
    category: "Web development",
    description:
      "Note taking app Build with Full stack methodology for both web and desktop Native capability, with password reset capability, Sign In/Up, Still on working progress",
    stack: ["Vite, TS, Node, Rust, Tauri, Tailwind"],
    description2:
      "Notes is the best place to jot down quick thoughts or to save longer notes filled with checklists, images, web links, scanned documents, handwritten notes, or sketches. And with iCloud, it is easy to keep all your devices in sync, so you'll always have your notes with you.",
    view: "https://github.com/ChristopherAlphonse/Noted",
    learnMore: "/projects/note-app",
  },
  {
    id: "Azalais Dark Theme",
    name: "Azalais Dark Theme",
    image: Project2,
    category: "theme",
    description: "Dark theme made for the eye, aka my daily theme for VS Code",
    description2: "",
    stack: ["JSON, Yo code ..."],

    view: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
    learnMore: "/azalais-dark-theme",
  },
  {
    id: "Benivi",
    name: "Benivi",
    image: Project3,
    category: "Store-front",
    description: "Urban shopify store-front, build with Shopify.",
    description2: "",
    stack: ["Stripe, Shopify"],
    view: "https://beniviclothing.com/",
    learnMore: "/projects/benivi",
  },
  {
    id: "Melissa and Lexis",
    name: "Melissa and Lexis",
    image: Project4,
    category: "Store-front",
    description:
      "SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    stack: ["SquareSpace, Contentful"],
    description2: "",
    view: "https://melissaandlexis.square.site/",
    learnMore: "",
  },
  {
    id: "Funky Junkie",
    name: "Funky Junkie",
    image: Project5,
    category: "Store-front",
    description: "Urban clothing store from Boston, build with Shopify.",
    description2: "",
    stack: ["HydrogenJS, TS"],
    view: "https://www.funkyjunkieco.com/",
    learnMore: "",
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
