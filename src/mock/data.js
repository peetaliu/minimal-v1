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
  title: "Hi, I'm ",
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
    "I love programming, travelling, photography, cars, and lifting (somewhat) heavy things. My preferred form of dev stack is a React frontend with a Node/Express REST backend and either MongoDB or PostgreSQL for storage. I've also dabbled with GraphQL and am excited to put what I've learned into practice",
  paragraphTwo:
    'I previously worked as a project coordinator, and also as a personal trainer, but my heart was always set on web development. With the world being in the state that its in, I figured now would be a good time to do something I truly enjoy rather than something I tolerate.',
  paragraphThree:
    "When I'm not working on dev stuff, you'll usually find me in the gym, in the garage working on my car, or planning my next big trip",
  resume: 'url',
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'moodify.png',
    title: 'Moodify',
    info: 'React, Redux, Node/Express',
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
    img: 'jsongen.PNG',
    title: 'JSON-GEN',
    info: 'JS',
    info2: 'Generates custom json data based on fields specified by the user',
    url: '',
    repo: 'https://github.com/peetaliu/json_gen', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'port.PNG',
    title: 'Portfolio',
    info: 'Gatsby.js',
    info2: 'My personal website.',
    url: 'https://peetaliu.dev',
    repo: 'https://github.com/peetaliu/minimal-v1', // if no repo, the button will not show up
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
