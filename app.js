//app.js
App({
  onLaunch: function () {
    var that = this;
    // wx.login({
    //   success: function (loginCode) {
    //     var appid = 'wxbb6a33e4f48e48f0'; //填写微信小程序appid  
    //     var secret = '65dbb28d3e5d92c01eca38333ff72e6a'; //填写微信小程序secret  
    //     // 发起请求获取对应的微信Id
    //     wx.request({
    //       url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + loginCode.code + '&grant_type=authorization_code',
    //       success: function (res) {
    //         // 成功接受数据
    //         if (res.data) {
    //           // 存储到session
    //           wx.setStorageSync('wxId', res.data.openid);
    //         }

    //       }
    //     })
    //   }
    // });
  }
})