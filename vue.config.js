module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/clientsystem/'
      : '/',
      
      configureWebpack: {
        devtool: 'source-map'
      }
      
    }
