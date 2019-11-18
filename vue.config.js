module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  publicPath:"./",
  // chainWebpack(config){
  //   config.resolve.alias
  //      .set("api",resolve('src/api'))
  // }

}
