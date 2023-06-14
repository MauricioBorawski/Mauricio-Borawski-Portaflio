export type Position = {
  active: boolean;
  title: string;
  time: string;
  technologies: string;
  summary: string;
  achivements: string[];
};

export type Projects = {
  title: string;
  techonolgies: string;
  summary: string;
  github: string;
  image: string;
};

export const companies = ["cedeira", "blockfi"] as const;

export type Companies = typeof companies[number];

export type Experiences = Record<Companies, Position>;

export const experiences: Experiences = {
  cedeira: {
    active: true,
    title: "React Developer",
    time: "March 2023 - Present",
    technologies: "React, Typescript, Jest, Redux, MUI",
    summary:
      "Develop high-quality code with a focus on creating and maintaining comprehensive tests. I work closely with the development team to ensure the delivery of reliable and robust software. Implementing best practices and coding standards ensures our code is scalable, modular, and easily maintainable.",
    achivements: [],
  },
  blockfi: {
    active: false,
    title: "Front-End Engineer",
    time: "March 2020 - December 2022",
    technologies: "React, Typescript, Jest, Redux, Styled-Components",
    achivements: [
      "Develop new features used by millions of users around the world like introducing ACH and BIA Trading.",
      "Increase test coverage from 30% to 98%.",
      "Write documentation for internal libraries like Goblin.",
      " Introduce new members of the team to the code base. ",
    ],
    summary: "",
  },
};

export const projects: Projects[] = [
  {
    title: "React Pokedex",
    techonolgies: "React, Typescript, MUI",
    summary:
      "React Pokedex is a project build for testing the Restful Pokemon API. In this Pokedex you can check the types and stats of all pokemons.",
    github: "https://github.com/MauricioBorawski/pokedex",
    image: "./public/pokedex-react.png",
  },
  {
    title: "LoL Discord Bot",
    techonolgies: "NodeJS, Axios, discord.js",
    summary:
      "LoL Discord Bot is a tool that lets you search for players in game and see with who is playing and also search for profiles and their stats.",
    github: "https://github.com/MauricioBorawski/LolDiscordBot",
    image: "./public/discord-cover.jpg",
  },
  {
    title: "My Portafolio",
    techonolgies: "Astro, Tailwind",
    summary: "This is the code for my portafolio.",
    github: "https://github.com/MauricioBorawski/my-portfolio",
    image: "./public/portafolio-cover.png",
  },
];
