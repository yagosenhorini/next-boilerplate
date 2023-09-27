module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**', // should be tested in e2e
    '!src/lib/registry.tsx',
    '!src/types/**',
    '!src/**/stories.tsx',
    '!src/styles/**',
  ],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts'],
  modulePaths: ['<rootDir>/src/'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': [
      'babel-jest',
      {
        presets: ['next/babel'],
      },
    ],
  },
  // https://github.com/styled-components/styled-components/issues/4081
  // v6 of styled-components doesn't inject styles in test environment
  // we should to force it to use the browser version
  moduleNameMapper: {
    '^styled-components':
      'styled-components/dist/styled-components.browser.cjs.js',
    '@Components/*': '<rootDir>/src/components$1',
    '@Containers/*': '<rootDir>/src/containers$1',
    '@Constants/*': '<rootDir>/src/constants$1',
    '@Contexts/*': '<rootDir>/src/contexts$1',
    '@Core/*': '<rootDir>/src/core$1',
    '@HOC/*': '<rootDir>/src/hoc$1',
    '@Hooks/*': '<rootDir>/src/hooks$1',
    '@Icons/*': '<rootDir>/src/assets/icons$1',
    '@Images/*': '<rootDir>/src/assets/images$1',
    '@Layouts/*': '<rootDir>/src/layouts$1',
    '@Pages/*': '<rootDir>/src/pages$1',
    '@Resources/*': '<rootDir>/src/resources$1',
    '@Settings/*': '<rootDir>/src/settings$1',
    '@Services/*': '<rootDir>/src/services$1',
    '@Store/*': '<rootDir>/src/store$1',
    '@Styles/*': '<rootDir>/src/styles$1',
    '@Theme/*': '<rootDir>/src/theme$1',
    '@Types/*': '<rootDir>/src/types$1',
    '@Utils/*': '<rootDir>/src/utils$1',
  },
};
