module.exports = options => {
  return {
    ...options,
    runtimeCaching: [
      {
        urlPattern: /\.js$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /\.css$/,
        handler: 'CacheFirst',
      },
      {
        urlPattern: /\.svg$/,
        handler: 'CacheFirst',
      },
    ],
  };
};
