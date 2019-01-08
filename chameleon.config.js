
// 设置静态资源的线上路径
const publicPath = 'http://10.179.100.193';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';

cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx"],
  buildInfo: {
    wxAppId: '123456',
    wxEntryPage: '',
    webPath: 'https://api.chameleon.com/h5/index'
  },
  wx: {
    dev: {
    },
    build: {
      apiPrefix
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/`,
      apiPrefix
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/`,
      hash: false,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx`,
      apiPrefix
    }
  }
})

