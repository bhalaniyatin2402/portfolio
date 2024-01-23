export interface IconDetail {
  name: string,
  icon: string,
  bgColor: string
}

export interface ProjectDetail {
  name: string,
  description: string,
  link: string,
  githubLink: string,
  technologies: string[],
  image: string
}

type IconData = Array<IconDetail>

type ProjectList = Array<ProjectDetail>

export const data: IconData = [
  {
    name: "React JS",
    icon: "devicon:react",
    bgColor: "#61DAFB45",
  },
  {
    name: "Node JS",
    icon: "logos:nodejs",
    bgColor: "#56A24450",
  },
  {
    name: "Express JS",
    icon: "skill-icons:expressjs-light",
    bgColor: "#00000057",
  },
  {
    name: "Mongo DB",
    icon: "skill-icons:mongodb",
    bgColor: "#12924F57",
  },
  {
    name: "Javascript",
    icon: "logos:javascript",
    bgColor: "#F7DF1E57",
  },
  {
    name: "Git",
    icon: "devicon:git",
    bgColor: "#F34F2957",
  },
  {
    name: "github",
    icon: "skill-icons:github-light",
    bgColor: "#00000057",
  },
  {
    name: "Redux Toolkit",
    icon: "devicon:redux",
    bgColor: "#764ABC57",
  },
  {
    name: "HTML",
    icon: "vscode-icons:file-type-html",
    bgColor: "#F0652A57",
  },
  {
    name: "CSS",
    icon: "vscode-icons:file-type-css",
    bgColor: "#2D80Bd57",
  },
  {
    name: "Tailwind CSS",
    icon: "skill-icons:tailwindcss-dark",
    bgColor: "#23BCBC57",
  },
  {
    name: "scss",
    icon: "vscode-icons:file-type-scss2",
    bgColor: "#CC669957",
  },
  // {
  //   name: "Next Js",
  //   icon: "skill-icons:nextjs-light",
  //   bgColor: "#00000057",
  // },
  // {
  //   name: "Typescript",
  //   icon: "logos:typescript-icon",
  //   bgColor: "#3178C657",
  // },
  // {
  //   name: "React testng ibrary",
  //   icon: "logos:testing-library",
  //   bgColor: "#B5232457",
  // },
  // {
  //   name: "Vitest",
  //   icon: "vscode-icons:file-type-vitest",
  //   bgColor: "#FCC72B57",
  // },
];

export const templates: ProjectList = [
  {
    name: "beast",
    description: "responsive template of beast using html and css only",
    link: "https://bhalaniyatin2402.github.io/beast/",
    githubLink: "https://github.com/bhalaniyatin2402/beast",
    technologies: ["vscode-icons:file-type-html", "vscode-icons:file-type-css"],
    image: "./beast.png",
  },
  // {
  //   name: "real_estate",
  //   description: "real estate responsive template using html and css only",
  //   link: "https://bhalaniyatin2402.github.io/real_estate/",
  //   githubLink: "https://github.com/bhalaniyatin2402/real_estate",
  //   technologies: ["vscode-icons:file-type-html", "vscode-icons:file-type-css"],
  //   image: "./real_estate.png",
  // },
  {
    name: "zaap",
    description: "zaap responsive template using react and typescript",
    link: "https://zaap-template.vercel.app/",
    githubLink: "https://github.com/bhalaniyatin2402/zaap-template",
    technologies: ["devicon:react", "skill-icons:nextjs-light", "logos:typescript-icon", "skill-icons:tailwindcss-dark"],
    image: "./zaap.PNG",
  },
];

export const reactProject: ProjectList = [
  {
    name: "streamy",
    description:
      "streamy for details and videos of movies & tv shows using tmdb api",
    link: "https://streamy-movie-tv.netlify.app/",
    githubLink: "https://github.com/bhalaniyatin2402/Streamy/tree/_tests_",
    technologies: [
      "devicon:react",
      "vscode-icons:file-type-scss2",
      "devicon:redux",
      "logos:testing-library",
      "vscode-icons:file-type-vitest",
      "logos:msw",
    ],
    image: "./streamy.png",
  },
  {
    name: "portfolio",
    description: "my personal portfolio for showing my skils and all projects",
    link: "https://yatin-bhalani.netlify.app/",
    githubLink: "https://github.com/bhalaniyatin2402/portfolio",
    technologies: [
      "devicon:react",
      "skill-icons:tailwindcss-dark",
      "vscode-icons:file-type-scss2",
    ],
    image: "./portfolio.png",
  },
];

export const backendProjects: ProjectList = [
  {
    name: "authentication",
    description: "user authentication incliding user profile and mailing",
    link: "",
    githubLink: "https://github.com/bhalaniyatin2402/user_authentication",
    technologies: ["logos:nodejs", "devicon:express", "skill-icons:mongodb"],
    image: "./user_authentication.png",
  },
  {
    name: "PWSkills_Blog",
    description: "bloging app for reading and writing blogs",
    link: "",
    githubLink: "https://github.com/bhalaniyatin2402/blog_app",
    technologies: [
      "logos:nodejs",
      "devicon:express",
      "skill-icons:mongodb",
      '<Icon icon="logos:cloudinary-icon" />',
    ],
    image: "./blog.png",
  },
];

export const tailwindCss: ProjectList = [
  {
    name: "Trustco",
    description: "fully responsive template using tailwind css only",
    link: "https://trustco-template.netlify.app/",
    githubLink: "https://github.com/bhalaniyatin2402/tailwind_css",
    technologies: ["devicon:react", "skill-icons:tailwindcss-dark"],
    image: "./trustco.png",
  },
];

export const mernProject: ProjectList = [
  {
    name: "Coursify",
    description: "creatig a learning management system using mern stack",
    link: "https://lms-coursify.vercel.app/",
    githubLink: "https://github.com/bhalaniyatin2402/LMS",
    technologies: [
      "logos:nodejs",
      "skill-icons:expressjs-light",
      "skill-icons:mongodb",
      "devicon:react",
      "devicon:redux",
      "skill-icons:tailwindcss-dark",
      "logos:cloudinary-icon",
    ],
    image: "./coursify.PNG",
  },
  {
    name: "Pixabay",
    description: "creatig a learning management system using mern stack",
    link: "https://pixabay-clone-pi.vercel.app/",
    githubLink: "https://github.com/bhalaniyatin2402/pixabay_clone",
    technologies: [
      "logos:nodejs",
      "skill-icons:expressjs-light",
      "skill-icons:mongodb",
      "devicon:react",
      "devicon:redux",
      "skill-icons:tailwindcss-dark",
      "skill-icons:materialui-light"
    ],
    image: "./pixabay-clone.PNG",
  },
];

export const reactNext: ProjectList = [
  {
    name: "adiba",
    description: "creating a adiba frontend project using react with next-js and typescript",
    link: "",
    githubLink: "https://github.com/bhalaniyatin2402/adiba",
    technologies: ["devicon:react", "skill-icons:nextjs-light", "logos:typescript-icon", "skill-icons:tailwindcss-dark"],
    image: "./adiba.PNG",
  },
];
