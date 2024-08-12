import { Experience, Skill } from "./type";

export const SKILL_LIST: Skill[] = [
  {
    name: "HTML",
    level: 3,
    image: "/assets/imgs/stacks/html.png",
    rating: 9,
  },
  {
    name: "CSS",
    level: 3,
    image: "/assets/imgs/stacks/css.png",
    rating: 8,
  },
  {
    name: "JavaScript",
    level: 3,
    image: "/assets/imgs/stacks/javascript.png",
    rating: 8,
  },
  {
    name: "Typescript",
    level: 3,
    image: "/assets/imgs/stacks/typescript.png",
    rating: 8.5,
  },
  {
    name: "React",
    level: 2,
    image: "/assets/imgs/stacks/reactjs.png",
    rating: 9,
  },
  {
    name: "Next.js",
    level: 2,
    image: "/assets/imgs/stacks/nextjs.png",
    rating: 7.5,
  },
  {
    name: "Node.js",
    level: 2,
    image: "/assets/imgs/stacks/nodejs.png",
    rating: 7.5,
  },
  {
    name: "Express.js",
    level: 2,
    image: "/assets/imgs/stacks/expressjs.png",
    rating: 7,
  },
  { name: "PHP", level: 2, image: "/assets/imgs/stacks/php.png", rating: 5.75 },
  {
    name: "Graphql.js",
    level: 2,
    image: "/assets/imgs/stacks/graphql.png",
    rating: 6,
  },
];

export const EXPERIENCES_LIST: Experience[] = [
  {
    companyName: "TeraByte",
    startDate: "Feb 2023",
    endDate: "Present",
    role: "Frontend Developer",
    description:
      "Developed new features and enhancements for applications using React.js, Next.js, and TypeScript. Enhanced performance by optimizing REST API calls, reducing load times, and increasing page speed by 15%. Collaborated with the UX team to design a new user interface, resulting in a 20% increase in user satisfaction scores. Introduced automated testing and unit tests, reducing bug-related delays by 30% and enhancing code quality by 20%. Led the design and deployment of robust Azure DevOps Pipelines, ensuring seamless integration for efficient software release delivery Ensured Cross-Browser Compatibility and responsiveness by meticulously testing applications on various browsers and screen sizes. Actively trained and mentored interns, providing hands-on guidance in coding best practices and system architecture. Reviewed code, offering constructive feedback to cultivate a collaborative learning environment and uphold code quality standards.",
    technologies: [
      "HTML5",
      "CSS3",
      "TypeScript",
      "Next.js",
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Material-UI",
      "RESTful APIs",
      "React-Query",
      "Zustand",
      "Jest",
      "Vitest",
      "MongoDB",
      "Azure DevOps Pipelines",
    ],
  },
  {
    companyName: "BiCatalyst",
    startDate: "Dec 2021",
    endDate: "Jan 2023",
    role: "Full-Stack Developer",
    description:
      "Leveraged Prisma ORM in Next.js to define data models and optimize queries, achieving a 20% enhancement in scalability and performance. Led development of REST API and GraphQL solutions, enhancing system efficiency and communication. Developed and implemented reusable components using Next.js, Redux, next-auth, next-pwa, and next-i18next, improving code maintainability and modularity. Utilized Tailwind CSS and Next.js for front-end development, crafting responsive and visually appealing user interfaces. Streamlined development with Tailwind Libraries, such as DaisyUI, resulting in more efficient and maintainable code. ",
    technologies: [
      "TypeScript",
      "Next.js",
      "Redux",
      "next-auth",
      "Tailwind CSS",
      "Prisma ORM",
      "PostgreSQL",
      "GraphQL",
    ],
  },
  {
    companyName: "Freelance",
    startDate: "Oct 2019",
    role: "Full-Stack Developer",
    endDate: "Nov 2021",
    description:
      "Maintained scalable Node.js server-side applications, achieving a 15% reduction in response times and enhancing overall performance. Executed the design and implementation of RESTful APIs, ensuring seamless operations and boosting productivity for end-users Integrated MongoDB to manage data effectively, achieving streamlined operations and ensuring a high level of data integrity. Conducted rigorous testing, achieving a 20% increase in system stability and a 15% improvement in scalability for a crucial application Debugged 3+existing projects and software modules.",
    technologies: [
      "JavaScript",
      "CSS3",
      "Node.js",
      "Express.js",
      "RESTful APIs",
      "MongoDB",
    ],
  },
];
