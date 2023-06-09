export type Position = {
  active: boolean;
  title: string;
  time: string;
  technologies: string;
  summary: string;
  achivements: string[];
};

export const companies = ["blockfi", "cedeira"] as const;

export type Companies = typeof companies[number];

export type Experiences = Record<Companies, Position>;

export const experiences: Experiences = {
  blockfi: {
    active: true,
    title: "Front-End Engineer",
    time: "March 2020 - December 2022",
    technologies: "React, Typescript, Jest, Redux, Styled-Components",
    achivements: [
      "Develop new features used by millions of users around the world like introducing ACH and BIA Trading",
      "Increase test coverage from 30% to 98%",
      "Write documentation for internal libraries like Goblin",
      " Introduce new members of the team to the code base. ",
    ],
    summary: "",
  },
  cedeira: {
    active: false,
    title: "React Developer",
    time: "March 2023 - Present",
    technologies: "React, Typescript, Jest, Redux, MUI",
    summary:
      "Develop high-quality code with a focus on creating and maintaining comprehensive tests. I work closely with the development team to ensure the delivery of reliable and robust software. Implementing best practices and coding standards ensures our code is scalable, modular, and easily maintainable",
    achivements: [],
  },
};
