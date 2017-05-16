// pages/order/order.js
Page({
  data: {
    number: 234567823456789090,
    time: '2017-05-04  13:49:21',
    payment: '31.00元',
    use: 'Obtained by 佩婷0619',
    starbar: [{
      src: '2017050712515354984005GtH2jgy1ff1lqqj2ekj32c02c01kg.jpg',
      names: '卡布奇诺',
      price: '31.00元'
    }],
    ip : '/uploads/'
  },

  onLoad:function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var that = this;
    // 请求ajax动态获取数据
    // wx.request({
    //   url: that.data.ip + 'history',
    //   success: function (res) {
    //     // 成功接受数据
    //     console.log(res);
    //     // 重新设置数据
    //     // that.setData({
    //     //   number: res.number,
    //     //   time: res.time,
    //     //   payment: res.payment,
    //     //   use: res.use
    //     // })
    //   }
    // })

  },
  onReady:function () {
    // 页面渲染完成
  },
  onShow:function () {
    // 页面显示
  },
  onHide:function () {
    // 页面隐藏
  },
  onUnload:function () {
    // 页面关闭
  }
})