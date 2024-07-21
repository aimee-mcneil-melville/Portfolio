import { defineConfig } from 'astro/config'
import icon from 'astro-icon'

import db from '@astrojs/db'

// https://astro.build/config
export default defineConfig({
  integrations: [icon(), db()],
})
