import config from './../jest-puppeteer.config.js';
const { port } = config.server;

describe('app', () => {
  beforeEach(async () => {
    await page.goto(`http://localhost:${port}`);
  });

  it('should have "React App" as title', async () => {
    const title = await page.title();
    expect(title).toBe('React App');
  });
});
