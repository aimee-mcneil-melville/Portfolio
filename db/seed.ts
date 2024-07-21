import { db, Portfolio, Tech, Gallery, Links } from 'astro:db'

export default async function () {
  await db.insert(Portfolio).values([
    {
      title: 'Trip Hive',
      subtitle:
        "My team's final group project at Dev Academy. We continue to add new features.",
      image: '/image1.jpeg',
      goal: 'Create an application that can be used by members of the group and eventually marketed to the public.',
      text: 'this is a blurb about the project',
    },
    {
      title: 'Hair Salon Website',
      subtitle: 'A team project to build a new website for a hair salon.',
      image: '/image2.jpg',
      goal: 'A project to learn new technologies and simulate a real-world scenario.',
      text: 'this is another project blurb',
    },
  ])

  await db.insert(Tech).values([
    { portfolioId: 1, name: 'React' },
    { portfolioId: 1, name: 'Typescript' },
    { portfolioId: 1, name: 'Knex' },
    { portfolioId: 1, name: 'SqLite3' },
    { portfolioId: 1, name: 'Bulma' },
    { portfolioId: 2, name: 'Astro' },
    { portfolioId: 2, name: 'Typescript' },
    { portfolioId: 2, name: 'Tailwind' },
  ])

  await db.insert(Gallery).values([
    { portfolioId: 1, image: '/image2.jpg' },
    { portfolioId: 1, image: '/image3.jpg' },
    { portfolioId: 1, image: '/image4.webp' },
    { portfolioId: 2, image: '/image1.jpeg' },
    { portfolioId: 2, image: '/image3.jpg' },
  ])

  await db.insert(Links).values([
    {
      portfolioId: 1,
      title: 'Github',
      url: 'https://github.com/kahikatea-2024/Flight-Plan',
      image: '',
      logo: 'logos:github-icon',
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
      logo: 'logos:github-icon',
    },
  ])
}
