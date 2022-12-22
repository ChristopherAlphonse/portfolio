import { AD, AZ, FU, ME, NO, PU } from "./assets";

export const projectsData = [
  {
    id: "Funky-Junkie",
    name: "Funky Junkie",
    image: FU,
    category: "Store-front",
    short: "Shopify Store",
    status: "Production",
    description:
      "Launched new Shopify store for urban clothing store in Canton, Massachusetts, Offered wide range of high-quality clothing and accessories, Focused on excellent customer service and competitive pricing",
    description2:
      "As a consultant for an urban clothing store, I worked on improving the SEO, theme, and styling of their Shopify store. My primary focus was on identifying opportunities for growth and providing recommendations for how to capitalize on those opportunities. This included conducting keyword research, optimizing on-page elements. In addition to my work on SEO, I also helped the store owner select and customize a theme that would best suit their brand and target audience. I provided guidance on color schemes, typography, and layout to create a cohesive and visually appealing online store. To handle merchandise orders, we implemented a drop shipping approach using tools like Contentful and Stripe. My role was more consultative than hands-on coding, but I worked closely with the store owner to ensure that the drop shipping system was set up effectively and efficiently.",
    stack: ["SEO, Contentful, Stripe"],
    view: "https://www.funkyjunkieco.com/",
  },
  {
    id: "Melissa-and-Lexis",
    name: "Melissa and Lexis",
    short: "E-Commerce Store",
    status: "Production",
    image: ME,
    category: "Store-front",
    description:
      "This local store specializes in providing delicious sweets and smoothies for intimate occasions. From romantic desserts to refreshing smoothies, they have a wide variety of treats that are perfect for any special moment. ",
    stack: ["SquareSpace, Contentful"],
    description2:
      "During this project, I focused my efforts on marketing and SEO for the online store. My main goal was to help the store owner increase traffic and sales on the website. To achieve this, I  identify opportunities for growth and developed strategies to capitalize on those opportunities. This included conducting keyword research, optimizing on-page elements, and building high-quality backlinks. In addition to my focus on marketing and SEO, I also brought my knowledge of customer engagement and user experience design to the table. I worked with the store owner to understand their target audience and identify ways to enhance the overall user experience on the site. This included identifying pain points in the customer journey and suggesting improvements to streamline the shopping process. Overall, my goal was to create a seamless and enjoyable experience for customers, which would ultimately lead to increased sales for the store.",
    view: "https://melissaandlexis.square.site/",
  },
  {
    id: "Admin-Dashboard",
    name: "Admin Dashboard",
    image: AD,
    category: "Web development",
    short: "Workflow Helper/ Time Management System",
    status: "Development",
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

export const FeaturedData = [
  {
    id: "Azalais-Dark-Theme",
    name: "Azalais Dark Theme",
    image: AZ,
    category: "theme",
    short: "Dark Theme for Visual Studio Code",
    status: "Production",
    description:
      "Azalais Dark Theme is the perfect solution for anyone who spends a lot of time in a text editor. I designed it to be easy on the eyes and reduce eye fatigue, and it's become my daily theme for VS Code.",
    description2:
      " I am constantly on the lookout for ways to improve my workflow and reduce eye strain. That's why I created Azalais Dark Theme for VS Code - a custom color scheme that is designed to be easy on the eyes and suitable for users with color blindness. I did extensive research on the best colors for these purposes, and I used Yo Code, XML, and JSON to create the theme. The result is a visually appealing and functional theme that has received positive feedback from users. I am proud to offer this theme on the VS Code marketplace, and I will continue to maintain and improve it for the benefit of other users.",
    stack: ["JSON, XML, Yo code, NPM, VSCE"],
    view: "https://marketplace.visualstudio.com/items?itemName=ChristopherAlphonse.azalais-dark-theme&ssr=false#overview",
  },
  {
    id: "Noted",
    name: "Noted",
    short: "Note Taking app Landing page & Desktop App",
    status: "Development",
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
    id: "Pure-by-Mel",
    name: "Pure by Mel",
    short: "E-Commerce Store",
    status: "Development",
    image: PU,
    category: "Web development",
    description:
      "Smoothie store based in Randolph, MA, and specialize in providing sweet treats for your loved ones during the holiday season",
    description2:
      "Currently in development. It's the second version of the store, which was originally created using Squarespace. To create a new and improved version, I am utilizing a variety of technologies to achieve a minimalistic and user-friendly interface, type-safe code, server-side rendering, and optimized search engine visibility. By using TypeScript , I ensure that the codebase is less prone to errors and easier to work with as the project grows. I use NextJS as my go to for SSR, resulting in faster page load times and better search engine visibility. I use Tailwind for rapid prototyping and easy customization of styles. By using Tailwind CSS, I can quickly create a consistent and visually appealing design. I integrated Stripe to  provide a secure and convenient way for customers to purchase products. By using Sanity.io, I can easily manage and update the store's product catalog and other content without the need for a traditional CMS.     Overall, the combination of these technologies allows me to build a fast, user-friendly, and SEO-optimized store.",
    stack: [
      "NextJS, TailwindCSS, TypeScript, Stripe, Sanity.io, Framer Motion, MongoDB",
    ],
    view: "https://github.com/ChristopherAlphonse/ye",
  },
];
