//const  aliyunTheme = require ('@ant-design/aliyun-theme')
const CracoLessPlugin = require('craco-less');
//const antdLess = require('./antdLess')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: {  },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};