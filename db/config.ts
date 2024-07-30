import { defineDb, defineTable, column } from 'astro:db'

const Portfolio = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    subtitle: column.text(),
    image: column.text(),
    goal: column.text(),
    text: column.text(),
  },
})

const Tech = defineTable({
  columns: {
    portfolioId: column.number({ references: () => Portfolio.columns.id }),
    name: column.text(),
    icon: column.text(),
  },
})

const Gallery = defineTable({
  columns: {
    portfolioId: column.number({ references: () => Portfolio.columns.id }),
    image: column.text(),
    alt: column.text(),
  },
})

const Links = defineTable({
  columns: {
    portfolioId: column.number({ references: () => Portfolio.columns.id }),
    title: column.text(),
    url: column.text(),
    image: column.text(),
    logo: column.text(),
  },
})

export default defineDb({
  tables: { Portfolio, Tech, Gallery, Links },
})
