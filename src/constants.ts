export type Position = {
  title: string;
  company: string;
  date: string;
  description: string;
  href: string;
};

export type Projects = {
  title: string;
  techonolgies: string;
  summary: string;
  github: string;
  image: string;
};

export const companies = ["cedeira", "blockfi"] as const;

export type Companies = (typeof companies)[number];

export type Experiences = Array<Position>;

export const experiences: Experiences = [
  {
    title: "Front End Developer",
    company: "Agrology S.R.L",
    date: "August 2023 - Present",
    description: "",
    href: "https://www.linkedin.com/company/agrology-agro/",
  },
  {
    title: "Front-End Developer",
    company: "Cedeira Software Factory",
    date: "March 2023 - August 2023",
    description:
      "Develop high-quality code with a focus on creating and maintaining comprehensive tests. I work closely with the development team to ensure the delivery of reliable and robust software. Implementing best practices and coding standards ensures our code is scalable, modular, and easily maintainable.",
    href: "https://www.linkedin.com/company/cedeirasf/",
  },
  {
    title: "Front-End Engineer",
    company: "BlockFi",
    date: "March 2020 - December 2022",
    description: "",
    href: "https://www.linkedin.com/company/blockfi/",
  },
];

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
    title: "This Portfolio",
    techonolgies: "Astro, Tailwind",
    summary: "This is the code for my portafolio.",
    github: "https://github.com/MauricioBorawski/my-portfolio",
    image: "./public/portafolio-cover.png",
  },
];
