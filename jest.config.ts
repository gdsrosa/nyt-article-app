/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  transform: {
    'node_modules/.+\\.(ts|tsx)$': 'ts-jest',
  },
};
