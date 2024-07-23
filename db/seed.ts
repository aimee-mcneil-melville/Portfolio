import { db, Portfolio, Tech, Gallery, Links } from 'astro:db'

export default async function () {
  await db.insert(Portfolio).values([
    {
      title: 'Trip Hive',
      subtitle:
        "My team's final group project at Dev Academy. We continue to add new features.",
      image: '/triphive/events.png',
      goal: 'Create an application that can be used by members of the group and eventually marketed to the public.',
      text: '',
    },
    {
      title: 'Hair Salon Website',
      subtitle: 'A team project to build a new website for a hair salon.',
      image: '/hairsalon/home.png',
      goal: 'A project to learn new technologies and simulate a real-world scenario.',
      text: '',
    },
    {
      title: 'My Portfolio',
      subtitle:
        "This very website! I wanted to create a site where people can see what I'm all about.",
      image: '/image3.jpg',
      goal: '',
      text: '',
    },
  ])

  await db.insert(Tech).values([
    { portfolioId: 1, name: 'React', icon: 'simple-icons:react' },
    { portfolioId: 1, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 1, name: 'Vite Testing', icon: 'simple-icons:vitest' },
    { portfolioId: 1, name: 'Knex', icon: 'simple-icons:knexdotjs' },
    { portfolioId: 1, name: 'SqLite3', icon: 'simple-icons:sqlite' },
    { portfolioId: 1, name: 'Bulma', icon: 'simple-icons:bulma' },
    { portfolioId: 1, name: 'Github Projects', icon: 'simple-icons:github' },
    { portfolioId: 2, name: 'Astro', icon: 'simple-icons:astro' },
    { portfolioId: 2, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 2, name: 'Tailwind', icon: 'simple-icons:tailwindcss' },
    { portfolioId: 2, name: 'Github Projects', icon: 'simple-icons:github' },
    { portfolioId: 3, name: 'Astro || Astro DB', icon: 'simple-icons:astro' },
    { portfolioId: 3, name: 'Typescript', icon: 'simple-icons:typescript' },
    { portfolioId: 3, name: 'Sass', icon: 'simple-icons:sass' },
  ])

  await db.insert(Gallery).values([
    { portfolioId: 1, image: '/triphive/schedule.png' },
    { portfolioId: 1, image: '/triphive/profile.png' },
    { portfolioId: 1, image: '/triphive/events-l.png' },
    { portfolioId: 1, image: '/triphive/signup.png' },
    { portfolioId: 2, image: '/hairsalon/services.png' },
    { portfolioId: 2, image: '/hairsalon/portfolio.png' },
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
  ])
}
