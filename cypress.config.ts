import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3000', // Altere se o seu Next.js rodar em outra porta
    setupNodeEvents(on, config) {
      // implemente event listeners aqui, se necessário
    },
  },
})
