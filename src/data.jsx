import { IoMdArrowForward } from "react-icons/io";

export const projectsData = [
  {
    id: "Azalais-Dark-Theme",
    name: "Azalais Dark Theme",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1670386320/Aza%20Theme/SERVER_zayubs.jpg",
    category: "theme",
    description: "Dark theme made for the eye, aka my daily theme for VS Code",
    description2: "1",
    stack: ["JSON, Yo code ..."],

    view: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
    learnMore: "/azalais-dark-theme",
  },
  {
    id: "Noted",
    name: "Noted",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1667619885/Noted/logo-white_scpd27.png",
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
    id: "Funky-Junkie",
    name: "Funky Junkie",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1670656004/portfolio/funy_x5ygvq.jpg",
    category: "Store-front",
    description: "Urban clothing store from Boston, build with Shopify.",
    description2: "1",
    stack: ["HydrogenJS, TS"],
    view: "https://www.funkyjunkieco.com/",
    learnMore: "",
  },
  {
    id: "Pure-by-Mel",
    name: "Pure by Mel",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1655672313/cld-sample-4.jpg",
    category: "Web development",
    description:
      "A smoothy store base in Randolph, MA. Focus on providing sweet to your love ones for the holiday",
    description2:
      "Our Mission is to make every guests day better by serving great tasting products as a celebration of health and happiness.",
    stack: ["NextJS, TailwindCSS, TypeScript, Stripe, etc.."],
    view: "https://github.com/ChristopherAlphonse/ye",
  },
  {
    id: "Benivi",
    name: "Benivi",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1670656004/portfolio/BENIVI_xkjp6l.jpg",
    category: "Store-front",
    description: "Urban shopify store-front, build with Shopify.",
    description2: "1",
    stack: ["Stripe, Shopify"],
    view: "https://beniviclothing.com/",
    learnMore: "/projects/benivi",
  },
  {
    id: "Melissa-and-Lexis",
    name: "Melissa and Lexis",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1670656004/portfolio/me_cjagc2.jpg",
    category: "Store-front",
    description:
      "SquareSpace, SEO and maintenance maintained by me, V2 will be utilizing NextJS  ",
    stack: ["SquareSpace, Contentful"],
    description2: "1",
    view: "https://melissaandlexis.square.site/",
    learnMore: "",
  },
  {
    id: "Admin-Dashboard",
    name: "Admin Dashboard",
    image:
      "https://res.cloudinary.com/img-api-pager-2/image/upload/v1670656382/screenshot1_gthucf.png",
    category: "Web development",
    description: "Dashboard for management/workflow helper",
    description2:
      "The Admin Dashboard displays tabs for multiple pages that provide a personalized view of BI performance, data correctness, required cube maintenance and required administrative actions. These pages contain the results of detailed analyses, represented by links, images, graphs, pie charts and BI reports.",
    stack: ["Vite, TS, Node, Sass"],
    view: "https://github.com/ChristopherAlphonse/admindashboard",
    learnMore: "/projects/admindashboard",
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

export const aboutData = {
  title: "About Me:",
  subtitle1:
    "In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.",
  subtitle2:
    "Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.",
  btnText: "Know more",
  btnIcon: <IoMdArrowForward />,
};
