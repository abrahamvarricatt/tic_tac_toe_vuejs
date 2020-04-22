module.exports = {
  chainWebpack: config => {
    config.plugin('html').tap(args => {
      args[0].title = 'Tic Tac Toe'
      return args
    })
  },
  css: {
    loaderOptions: {
      scss: {
        prependData: `@import "~bootstrap/scss/bootstrap";`
      }
    }
  }
}
