const config = require('./../jest-puppeteer.config.js');
const { port } = config.server;

describe('app', () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${port}`);
  });

  it('should display a react logo', async () => {
    await expect(page).toMatch('React');
  });

  it('should match a link with a "Learn React" text inside', async () => {
    await expect(page).toMatchElement('.App-link', { text: 'Learn React' });
  });
});
