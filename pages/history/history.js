// pages/history/history.js
Page({
  data: {
    items: [{ "src": "2017050712515354984005GtH2jgy1ff1lqqj2ekj32c02c01kg.jpg", "titles": "出发，去夏天", "time": "2017/5/7 下午1:26", "price": "50" }, { "src": "20170507123956716349f5ee5c7gw1fashudue0fj20go0dnq8k.jpg", "titles": "我想对你说", "time": "2017/5/7 下午8:41", "price": "35" }],
    ip: '/uploads/'

  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    // 微信id
    // var wxId = wx.getStorageSync('wxId');
    // var that = this;
    // // 请求ajax动态获取数据
    // wx.request({
    //   url: that.data.ip + 'history/' + wxId,
    //   success: function (res) {
    //     // 成功接受数据
    //     for (var i = 0; i < res.data.length; i++) {
    //       res.data[i].time = (new Date(res.data[i].time)).toLocaleString().replace(/:\d{1,2}$/, '');
    //     }

    //     // 重新设置数据
    //     that.setData({
    //       items: res.data
    //     })

    //   }
    // })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})