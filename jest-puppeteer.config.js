// We're using port 5000 as it's the default port used by serve
// We expect the app to be built beforehand
module.exports = {
  server: {
    command: `npm run start`,
    port: 5000,
    launchTimeout: 10000,
    debug: true,
  },
};
