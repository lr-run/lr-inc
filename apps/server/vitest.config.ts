import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['tests/**/*.test.ts'],
    setupFiles: ['/tests/helpers/setup.ts'],
  },
  resolve: {},
})
