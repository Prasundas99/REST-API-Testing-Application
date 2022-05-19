module.exports = {
    extends: '@snowpack/app-scripts-react',
  
    devOptions: {
      port: process.env.PORT || 3000,
      src: 'src',
      bundle: false,
      routes: 'index.html',
    },
  
    packageOptions: {
      polyfillNode: true,
    },
  };