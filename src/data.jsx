import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
} from "react-icons/fi";

// projects images
// import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
// import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

// // skills images
// import SkillImg1 from "./assets/img/skills/html5.png";
// import SkillImg2 from "./assets/img/skills/css3.png";
// import SkillImg3 from "./assets/img/skills/js.png";
// import SkillImg4 from "./assets/img/skills/reactjs.png";
// import SkillImg5 from "./assets/img/skills/nextjs.png";
// import SkillImg6 from "./assets/img/skills/nodejs.png";
// import SkillImg7 from "./assets/img/skills/git.png";
// import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.webp";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.webp";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.webp";

// social
export const social = [
  {
    icon: <FiYoutube />,
    href: "",
  },
  {
    icon: <FiInstagram />,
    href: "",
  },
  {
    icon: <FiGithub />,
    href: "",
  },
  {
    icon: <FiDribbble />,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    name: "Project 1",
    image: Project2,
    category: "Web development",
    description: "This is prod 1",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    id: "2",
    name: "Project 2",
    image: Project4,
    category: "contribution",
    description: "This is prod 2",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
  {
    id: "3",
    name: "Project 3",
    image: Project5,
    category: "contribution",
    description: "This is prod 3",
    stack: ["SASS", "TypeScript", "React"],
    sourceCode: "https://github.com",
    livePreview: "https://github.com",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  // {
  //   name: "UI/UX Design",
  // },
  {
    name: "web development",
  },
  {
    name: "Contribution",
  },
];

// skill
// export const skills = [
//   {
//     image: SkillImg1,
//   },
//   {
//     image: SkillImg2,
//   },
//   {
//     image: SkillImg3,
//   },
//   {
//     image: SkillImg4,
//   },
//   {
//     image: SkillImg5,
//   },
//   {
//     image: SkillImg6,
//   },
//   {
//     image: SkillImg7,
//   },
//   {
//     image: SkillImg8,
//   },
// ];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description: "1",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description: "rice",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description: "cake.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
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
