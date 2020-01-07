module.exports = {
  preset: 'jest-puppeteer',
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: './*\\.test\\.ts$',
};
