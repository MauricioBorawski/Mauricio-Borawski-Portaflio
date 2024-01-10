export type Position = {
  title: string;
  company: string;
  date: string;
  description: string;
  href: string;
};

export type Projects = {
  title: string;
  src: string;
  description: string;
  github: string;
  link?: string;
};

export type Experiences = Array<Position>;

export const experiences: Experiences = [
  {
    title: "Front End Developer",
    company: "Agrology S.R.L",
    date: "August 2023 - Present",
    description:
      "Responsible for creating, implementing, and maintaining new features. Developing unit tests and end-to-end tests with a focus on BDD (Behavior Driven Development) to ensure software quality and compliance with specific requirements. Tasked with conceiving and maintaining the style design, ensuring visual coherence and usability to enhance the user experience",
    href: "https://www.linkedin.com/company/agrology-agro/",
  },
  {
    title: "Front End Developer",
    company: "Cedeira Software Factory",
    date: "March 2023 - August 2023",
    description:
      "Develop high-quality code with a focus on creating and maintaining comprehensive tests. I work closely with the development team to ensure the delivery of reliable and robust software. Implementing best practices and coding standards ensures our code is scalable, modular, and easily maintainable.",
    href: "https://www.linkedin.com/company/cedeirasf/",
  },
  {
    title: "Front End Engineer",
    company: "BlockFi",
    date: "March 2020 - December 2022",
    description:
      "Developed impactful new features utilized by a global user base, notably introducing ACH and BIA Trading functionalities, catering to millions of users worldwide. Significantly elevated test coverage from a mere 30% to an impressive 98%, ensuring robustness and reliability of the software. Authored comprehensive documentation for internal libraries such as Goblin, aiding team members in understanding and effectively utilizing these resources. Played a pivotal role in onboarding new team members, facilitating their smooth integration into the codebase and project workflow.",
    href: "https://www.linkedin.com/company/blockfi/",
  },
];

export const projects: Projects[] = [
  {
    title: "React Pokedex",
    description:
      "React Pokedex is a project build for testing the Restful Pokemon API. In this Pokedex you can check the types and stats of all pokemons.",
    github: "https://github.com/MauricioBorawski/pokedex",
    src: "",
  },
  {
    title: "LoL Discord Bot",
    description:
      "LoL Discord Bot is a tool that lets you search for players in game and see with who is playing and also search for profiles and their stats.",
    github: "https://github.com/MauricioBorawski/LolDiscordBot",
    src: "",
  },
  {
    title: "ChadAO",
    description: "ChadAo is game inspired by the Argentum Online genre. Is a epic fantasy 2D MMORPG.",
    github: "https://github.com/MauricioBorawski/ChadAO",
    src: "",
  },
  {
    title: "Stitch Counter",
    description: "Stitch Counter is an app designed to keep track of the stitches in your crochet project. It features multiple individual counters as well as an overall counter. It's crafted to assist you in keeping track of the stitches in your project, ensuring you never lose your place.",
    github: "https://github.com/MauricioBorawski/contador_vueltas",
    src: "",
  },
  {
    title: "This Portfolio",
    description: "This is the code for my portafolio.",
    github: "https://github.com/MauricioBorawski/my-portfolio",
    src: "",
  },
];
