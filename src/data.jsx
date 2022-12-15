import { AD, AZ, FU, ME, NO, PU } from "./assets";

export const projectsData = [
  {
    id: "Azalais-Dark-Theme",
    name: "Azalais Dark Theme",
    image: AZ,
    category: "theme",
    description:
      "Azalais Dark Theme is the perfect solution for anyone who spends a lot of time in a text editor. I designed it to be easy on the eyes and reduce eye fatigue, and it's become my daily theme for VS Code.",
    description2:
      " I am constantly on the lookout for ways to improve my workflow and reduce eye strain. That's why I created Azalais Dark Theme for VS Code - a custom color scheme that is designed to be easy on the eyes and suitable for users with color blindness. I did extensive research on the best colors for these purposes, and I used Yo Code, XML, and JSON to create the theme. The result is a visually appealing and functional theme that has received positive feedback from users. I am proud to offer this theme on the VS Code marketplace, and I will continue to maintain and improve it for the benefit of other users.",
    stack: ["JSON, XML, Yo code ..."],

    view: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
  },
  {
    id: "Noted",
    name: "Noted",
    image: NO,
    category: "Web development",
    description:
      "Note taking app with full stack for web and desktop. Native features include password reset and sign in/up. Still in development ",
    stack: ["Vite, TypeScript, Node, Rust, TauriJS, Tailwind, MongoDB"],
    description2:
      "I have completed the landing page for my note taking app, which includes features like time-sensitive password reset and encryption using JWT, bcrypt, and CORS. My goal is to wrap the app with Rust for the desktop version, but I have noticed a performance hit. The main languages and frameworks I am using are TauriJS, Vite, TypeScript, Rust, Tailwind, JWT, bcrypt, Nodemailer, and Node. I am dedicated to my note taking app and have big plans for its development. I have implemented best practices and am approaching the project as a SAAS, rather than a disposable project. I want to push myself and give it my all in order to realize my vision for the app. I have a long way to go, but I am determined and excited to see where this project takes me.",
    view: "https://github.com/ChristopherAlphonse/Noted",
  },
  {
    id: "Funky-Junkie",
    name: "Funky Junkie",
    image: FU,
    category: "Store-front",
    description:
      "Shopify store for an urban clothing store based in Canton, MA",
    description2:
      "I worked on improving the SEO, theme, and styling of the Shopify store for an urban clothing store. My role was more consultative than hands-on coding, and we used tools like Contentful, Stripe, and others to handle merchandise orders using a drop shipping approach.",
    stack: ["SEO, Contentful, Stripe"],
    view: "https://www.funkyjunkieco.com/",
  },
  {
    id: "Pure-by-Mel",
    name: "Pure by Mel",
    image: PU,
    category: "Web development",
    description:
      "Smoothie store based in Randolph, MA, and specialize in providing sweet treats for your loved ones during the holiday season",
    description2:
      "Pure by Mel is still being developed - it is the second version of this online store, which was originally created using Squarespace. I am using a range of technologies, including TypeScript, NextJS, TailwindCSS, Framer Motion, Stripe, and Sanity.io, to build a new and improved online store. ",
    stack: [
      "NextJS, TailwindCSS, TypeScript, Stripe, Sanity.io, Framer Motion, MongoDB",
    ],
    view: "https://github.com/ChristopherAlphonse/ye",
  },
  {
    id: "Melissa-and-Lexis",
    name: "Melissa and Lexis",
    image: ME,
    category: "Store-front",
    description:
      "This local store specializes in providing delicious sweets and smoothies for intimate occasions. From romantic desserts to refreshing smoothies, they have a wide variety of treats that are perfect for any special moment. ",
    stack: ["SquareSpace, Contentful"],
    description2:
      "My primary focus for this project was on marketing and SEO. I helped the store owner develop and implement strategies for increasing traffic and sales on the website. I also brought my knowledge of customer engagement and user experience design to the table, to help enhance the overall user experience on the site.",
    view: "https://melissaandlexis.square.site/",
  },
  {
    id: "Admin-Dashboard",
    name: "Admin Dashboard",
    image: AD,
    category: "Web development",
    description:
      "This dashboard is designed to support effective management and workflow management. It provides a comprehensive, yet user-friendly interface that allows managers to quickly access and analyze key data ",
    description2:
      "This dashboard is designed to support effective management and workflow management. It provides a comprehensive, yet user-friendly interface that allows managers to quickly access and analyze key performance data, track progress on projects and tasks, and identify opportunities for improvement. With this tool, managers can gain real-time visibility into their team's performance and make informed decisions to optimize their workflow and drive better results.",
    stack: ["Vite, TypeScript, Node, Sass, MongoDB, Express, Cloudinary"],
    view: "https://github.com/ChristopherAlphonse/admindashboard",
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
