// pages/detail/detail.js
Page({
  data: {
    defaultSize: 'default',
    primarySize: 'default',
    warnSize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    num: 0,
    styles: 'border:2px solid #1aac19;border-radius:5px;color:#1aac19',
    none: 'border:2px solid transparent',
    changeBorder: 0,
    borderOne: 'border:1px solid #989;color:#7f7f7f',
    card: { "_id": "590ea51c1dc2ec1a5b02e3dd", "typeId": "1", "prod_name": "我想对你说", "overtime": "全天候", "pictures": [{ "bigPic": "20170507123956716349f5ee5c7gw1fashudue0fj20go0dnq8k.jpg", "small": "20170507123956716349f5ee5c7gw1fashudue0fj20go0dnq8k.jpg" }, { "bigPic": "20170507123956252989f5ee5c7gw1fashuf27d0j20go0dh7am.jpg", "small": "20170507123956252989f5ee5c7gw1fashuf27d0j20go0dh7am.jpg" }, { "bigPic": "20170507123956334889f5ee5c7gw1fashugxjasj20go0dg454.jpg", "small": "20170507123956334889f5ee5c7gw1fashugxjasj20go0dg454.jpg" }, { "bigPic": "20170507123956492939f5ee5c7gw1fashuhl76pj20go0bste2.jpg", "small": "20170507123956492939f5ee5c7gw1fashuhl76pj20go0bste2.jpg" }, { "bigPic": "20170507123956666899f5ee5c7gw1fashuirspzj20go0bt43n.jpg", "small": "20170507123956666899f5ee5c7gw1fashuirspzj20go0bt43n.jpg" }], "gift": [{ "name": "当季特饮", "price": "39" }, { "name": "轻甜冷萃", "price": "39" }, { "name": "冷萃冰冰乐", "price": "36" }, { "name": "拿铁", "price": "31" }, { "name": "焦糖玛奇朵", "price": "35" }, { "name": "抹茶星冰乐", "price": "35" }, { "name": "摩卡", "price": "35" }, { "name": "馥芮白", "price": "36" }, { "name": "卡布奇诺", "price": "31" }] },
    ip: '/uploads/',
    price: 50,
    carId: '590ea51c1dc2ec1a5b02e3dd'
  },

  onLoad: function (options) {
    var that = this;
    // 请求ajax动态获取数据
    // wx.request({
    //   url: that.data.ip + 'cat/' + options.id,
    //   success: function (res) {
    //     // 成功接受数据
    //     console.log(JSON.stringify(res.data.card._id));
    //     // 重新设置数据
    //     that.setData({
    //       card: res.data.card,
    //       carId: res.data.card._id
    //     })
    //   }
    // })

    // // 页面初始化 options为页面跳转所带来的参数
    // console.log(options);
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
  },
  onTap: function (e) {
    this.setData({
      num: e.currentTarget.dataset.name
    });
  },
  // 购买接口
  onbuy: function () {
    var that = this;
    // 模态框显示购买成功
    wx.showModal({
      title: '提示',
      content: '购买成功',
      success: function (res) {
        if (res.confirm) {
          // 跳转代码
          // ...  回到首页
          wx.reLaunch({
            url: '../index/index',
          })

        } else if (res.cancel) {
          console.log('用户点击取消');
        }
      }
    });

  },
  onchange: function (e) {
    this.setData({
      changeBorder: e.currentTarget.dataset.name,
      price: this.data.card.gift[e.currentTarget.dataset.name].price
    })
  }


})