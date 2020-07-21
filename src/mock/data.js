import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Peter | Fullstack',
  lang: 'en',
  description: 'Portfolio',
};

export const menuData = {
  logo: 'Peter L.',
  items: [{ id: nanoid(), name: 'lightbulb' }],
};

// HERO DATA
export const heroData = {
  title: "Hi! I'm ",
  name: 'Peter.',
  subtitle: 'Fullstack Developer.',
  tech: 'React, Node/Express.',
  cta: 'Learn More',
  loc: 'Based in Toronto.',
  contact: "Let's get in touch.",
  ref: 'mailto:peterdotliu@gmail.com',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Software Developer, Fitness Enthusiast, Car Lover',
  paragraphTwo:
    'I build web experiences with a focus on useability and simplicity. My front ends are built with React, while my backends consist of RESTful apis with Node/Express and MongoDB.',
  paragraphThree:
    "When I'm not doing dev stuff, you can find me in the gym or wrenching in the garage",
  resume: 'url',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'BOTVID-19',
    info: 'Discord bot which displays COVID-19 news and numbers',
    info2: '',
    url: '',
    repo: 'https://github.com/peetaliu/sunny_bot', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Awesome!',
  ctasub: "Just want to chat? That's fine too!",
  btn: "Let's Get in Touch",
  email: 'peterdotliu@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/peetaliu',
    },
    {
      id: nanoid(),
      name: 'instagram',
      url: 'https://www.instagram.com/peetaagram/',
    },
    {
      id: nanoid(),
      name: 'envelope',
      url: 'mailto:peterdotliu@gmail.com',
    },
  ],
};
