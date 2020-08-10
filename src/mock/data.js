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
    "Greetings! How nice of you to drop by. So you want to know a bit about me. Well, to sum it up, I love coding, travelling, photography, cars, and lifting (somewhat) heavy things. Pretty basic eh? Anyways, you're probably here for the techy stuff so let's dive right in. My preferred dev stack is a React frontend with a Node/Express backend and either MongoDB or PostgreSQL for storage. I've built REST api's in my personal projects and also dabbled a bit with GraphQL. While this is my preferred stack, it's not the only one I'll work with. I'm always willing to learn something new!",
  paragraphTwo:
    "My previous non-tech related roles include Project Coordinator for an ad agency and also a personal trainer (which I still do from time-to-time). However, don't let my previous occupations fool you, Web development has always been my passion.",
  paragraphThree:
    "When I'm not working on dev stuff, you'll usually find me in the gym, in the garage working on my car, or getting lost in some foreign country.",
  resume: '',
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
    repo: 'https://github.com/peetaliu/Moodify',
  },
  {
    id: nanoid(),
    img: 'botvid19.PNG',
    title: 'BOTVID-19',
    info: 'Disord.js',
    info2: 'Discord bot with commands to display up-to-date COVID-19 related data',
    url: '',
    repo: 'https://github.com/peetaliu/BOTVID-19', // if no repo, the button will not show up
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

// EDUCATION DATA
export const eduData = [
  {
    id: nanoid(),
    cert: 'Online Certificate',
    school: 'Full Stack Open 2020',
    program: 'Deep Dive Into Modern Web Development',
    url: 'https://fullstackopen.com/en',
    certDate: 'May 2020',
  },
  {
    id: nanoid(),
    cert: 'Adv. Diploma in CST',
    school: 'Sheridan College',
    program: 'Software Development and Network Engineering',
    url: '',
    certDate: 'April 2017',
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
