const path = require('path')

const resolve = dir => {
  return path.join(__dirname, dir)
}

const BASE_URL = process.env.NODE_ENV === 'procution' ? '/iview-admin' : '/'

module.exports = {
  lintOnSave: false,
  publicPath: BASE_URL,
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src')) // key,value自行定义，比如.set('@@', resolve('src/components'))
      .set('_c', resolve('src/components'))
  },

  productionSourceMap:false,    //打包时不生成.map文件

  devServer:{   //配置客户端跨域请求
      proxy:'http://t.yushu.im'
  }

}
