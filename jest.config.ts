import type { Config } from 'jest'
import nextJest from 'next/jest.js'

const createJestConfig = nextJest({
  // Forneça o caminho para o seu app Next.js para carregar next.config.js e arquivos .env no ambiente de teste
  dir: './',
})

const config: Config = {
  coverageProvider: 'v8',
  testEnvironment: 'jsdom',
  // Adiciona arquivos de configuração antes de cada teste
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
  moduleNameMapper: {
    // Ajuste se você usa aliases de caminho no tsconfig.json (ex: @/(.*))
    '^@/(.*)$': '<rootDir>/src/$1',
  },
}

export default createJestConfig(config)
