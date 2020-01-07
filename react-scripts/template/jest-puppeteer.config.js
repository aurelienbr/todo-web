module.exports = {
  server: {
    command: `cross-env PORT=4000 npm run dev`,
    port: 4000,
    launchTimeout: 10000,
    debug: true,
  },
};
