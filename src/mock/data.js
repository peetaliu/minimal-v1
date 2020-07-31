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
  paragraphOne:
    "I build web experiences with a focus on useability and simplicity. Frontend experience consists mainly of ReactJS but I'm always trying out other frameworks (Vue, Angular, Svelte). Backend skills include building RESTful api's with Node/Express and some limited knowledge of GraphQL",
  paragraphTwo:
    "I'm continuously learning and trying to better myself as a developer everyday. “Wisdom is not a product of schooling but of the lifelong attempt to acquire it.” - Some physicist named Albert",
  paragraphThree:
    "When I'm not working on dev stuff, you'll usually find me in the gym or in the garage working on my car",
  resume: 'url',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'moodify.png',
    title: 'Moodify',
    info: 'React, Node/Express',
    info2: 'Spotify track recommendations based on your current mood',
    url: '',
    repo: 'https://github.com/peetaliu/InMyFeelings',
  },
  {
    id: nanoid(),
    img: 'botvid19.PNG',
    title: 'BOTVID-19',
    info: 'Disord.js',
    info2: 'Discord bot with commands to display up-to-date COVID-19 related data',
    url: '',
    repo: 'https://github.com/peetaliu/sunny_bot', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: '',
    title: 'JSON-GEN',
    info: 'JS',
    info2: 'Generates custom json data based on fields specified by the user',
    url: '',
    repo: 'https://github.com/peetaliu/json_gen', // if no repo, the button will not show up
  },
];

// TECH DATA

export const techData = {
  title: 'Some technologies I enjoy working with:',
  logos: [
    {
      name: 'React',
      img: 'react.png',
    },
    {
      name: 'Node.js',
      img: 'node.png',
    },
    {
      name: 'MongoDB',
      img: 'mongo.png',
    },
    {
      name: 'Sass',
      img: 'sass.png',
    },
    {
      name: 'GraphQL',
      img: 'gql.png',
    },
    {
      name: 'PostgreSQL',
      img: 'pgsql.png',
    },
  ],
};

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Awesome!',
  ctasub: '',
  btn: "Let's get in touch",
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
