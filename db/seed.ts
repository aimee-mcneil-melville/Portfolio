import { db, Portfolio, Tech, Gallery, Links } from 'astro:db'

export default async function () {
  await db.insert(Portfolio).values([
    {
      title: 'Trip Hive',
      subtitle:
        "My team's final group project at Dev Academy. We continue to expand and add new features.",
      image: '/triphive/triphive-logo.png',
      goal: 'Going on a trip in a group? Trip Hive will keep everyone in the loop!',
      text: 'The idea for Trip Hive came about from some personal experiences within my final project group. Currently web application that can be used by members of the project team, it is planned to be a downloadable app marketed to the public. User story: a travel companion app for a group of people, so that everyone has access to information and is accountable and responsible for their time. Groups of friends, families, bands, and corporate travel are just some of the use cases for this app.',
    },
    {
      title: 'Hair Salon Website',
      subtitle: 'A team project to build a new website for a hair salon.',
      image: '/hairsalon/home.png',
      goal: 'A project to learn new technologies and simulate a real-world scenario.',
      text: "I was invited in to this personal project by a member of my cohort. We created a website for a hair salon, and learned new technology in the process. We chose to learn Astro due to it's speed, flexibility, and server-side rendering. This project involved planning and collaboration, teaching and learning from each other.",
    },
    {
      title: 'My Portfolio',
      subtitle:
        "This very website! I wanted to create a place where people can see what I'm all about.",
      image: '/portfolio/saimee.png',
      goal: '',
      text: 'For this project I decided to use Astro for a second time - this time including Astro DB. Throughout this project I have gained more knowledge on this stack as well as feeling confident in learning new tech by myself. Additional skills I learned include using icon libraries, Sass, new routing techniques, and hosting. From design to deployment this has been an entirely self-motivated solo project.',
    },
  ])

  await db.insert(Tech).values([
    { portfolioId: 1, name: 'React', icon: 'simple-icons:react' },
    { portfolioId: 1, name: 'Bulma', icon: 'simple-icons:bulma' },
    { portfolioId: 1, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 1, name: 'SqLite3', icon: 'simple-icons:sqlite' },
    { portfolioId: 1, name: 'Javascript', icon: 'simple-icons:javascript' },
    { portfolioId: 1, name: 'Knex', icon: 'simple-icons:knexdotjs' },
    { portfolioId: 1, name: 'Vite Testing', icon: 'simple-icons:vitest' },
    { portfolioId: 1, name: 'Github Projects', icon: 'simple-icons:github' },
    { portfolioId: 1, name: 'NPM Packages', icon: 'simple-icons:npm' },
    { portfolioId: 1, name: 'VSCode', icon: 'simple-icons:visualstudiocode' },
    { portfolioId: 2, name: 'Astro', icon: 'simple-icons:astro' },
    { portfolioId: 2, name: 'VSCode', icon: 'simple-icons:visualstudiocode' },
    { portfolioId: 2, name: 'Javascript', icon: 'simple-icons:javascript' },
    { portfolioId: 2, name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
    { portfolioId: 2, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 2, name: 'Github Projects', icon: 'simple-icons:github' },
    { portfolioId: 3, name: 'Astro || Astro DB', icon: 'simple-icons:astro' },
    { portfolioId: 3, name: 'NPM Packages', icon: 'simple-icons:npm' },
    { portfolioId: 3, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 3, name: 'Sass', icon: 'simple-icons:sass' },
    { portfolioId: 3, name: 'Javascript', icon: 'simple-icons:javascript' },
    { portfolioId: 3, name: 'VSCode', icon: 'simple-icons:visualstudiocode' },
  ])

  await db.insert(Gallery).values([
    {
      portfolioId: 1,
      image: '/triphive/schedule.png',
      alt: 'image of schedule from Triphive website',
    },
    {
      portfolioId: 1,
      image: '/triphive/profile.png',
      alt: 'image of profile from Triphive website',
    },
    {
      portfolioId: 1,
      image: '/triphive/events-l.png',
      alt: 'image of events from Triphive website',
    },
    {
      portfolioId: 2,
      image: '/hairsalon/home.png',
      alt: 'image of home page on hair salon website',
    },
    {
      portfolioId: 2,
      image: '/hairsalon/services.png',
      alt: 'image of services from hair salon website',
    },
    {
      portfolioId: 2,
      image: '/hairsalon/portfolio.png',
      alt: 'image of portfolio from hair salon website',
    },
    {
      portfolioId: 3,
      image: '/portfolio/dynamic.png',
      alt: 'image of code from this portfolio',
    },
    {
      portfolioId: 3,
      image: '/portfolio/database.png',
      alt: 'image of code from this portfolio',
    },
  ])

  await db.insert(Links).values([
    {
      portfolioId: 1,
      title: 'Github',
      url: 'https://github.com/kahikatea-2024/Flight-Plan',
      image: '',
      logo: 'simple-icons:github',
    },
    {
      portfolioId: 1,
      title: 'Website',
      url: 'https://triphive.pushed.nz/',
      image: '',
      logo: 'triphive-logo',
    },
    {
      portfolioId: 2,
      title: 'Github',
      url: 'https://github.com/fatima-yar/imagehair',
      image: '',
      logo: 'simple-icons:github',
    },
    {
      portfolioId: 2,
      title: 'Video Demo',
      url: 'https://www.youtube.com/watch?v=f6n5flc4xxc',
      image: '',
      logo: 'simple-icons:youtube',
    },
    {
      portfolioId: 3,
      title: 'Github',
      url: 'https://github.com/aimee-mcneil-melville/Portfolio',
      image: '',
      logo: 'simple-icons:github',
    },
  ])
}
