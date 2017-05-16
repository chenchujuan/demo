//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    coffee: [{ "_id": "590ea51c1dc2ec1a5b02e3dd", "typeId": "1", "prod_name": "我想对你说", "overtime": "全天候", "pictures": [{ "bigPic": "20170507123956716349f5ee5c7gw1fashudue0fj20go0dnq8k.jpg", "small": "20170507123956716349f5ee5c7gw1fashudue0fj20go0dnq8k.jpg" }, { "bigPic": "20170507123956252989f5ee5c7gw1fashuf27d0j20go0dh7am.jpg", "small": "20170507123956252989f5ee5c7gw1fashuf27d0j20go0dh7am.jpg" }, { "bigPic": "20170507123956509449f5ee5c7gw1fashugexiaj20go0d90yi.jpg", "small": "20170507123956509449f5ee5c7gw1fashugexiaj20go0d90yi.jpg" }, { "bigPic": "20170507123956334889f5ee5c7gw1fashugxjasj20go0dg454.jpg", "small": "20170507123956334889f5ee5c7gw1fashugxjasj20go0dg454.jpg" }, { "bigPic": "20170507123956492939f5ee5c7gw1fashuhl76pj20go0bste2.jpg", "small": "20170507123956492939f5ee5c7gw1fashuhl76pj20go0bste2.jpg" }, { "bigPic": "20170507123956666899f5ee5c7gw1fashuirspzj20go0bt43n.jpg", "small": "20170507123956666899f5ee5c7gw1fashuirspzj20go0bt43n.jpg" }], "gift": [{ "name": "当季特饮", "price": "39" }, { "name": "轻甜冷萃", "price": "39" }, { "name": "冷萃冰冰乐", "price": "36" }, { "name": "拿铁", "price": "31" }, { "name": "焦糖玛奇朵", "price": "35" }, { "name": "抹茶星冰乐", "price": "35" }, { "name": "摩卡", "price": "35" }, { "name": "馥芮白", "price": "36" }, { "name": "卡布奇诺", "price": "31" }] }, { "_id": "590ea5a2e91b161a72dc9abc", "typeId": "1", "prod_name": "给特别的你", "overtime": "全天候", "pictures": [{ "bigPic": "201705071242105228862c7e2bajw1fagvkixjbsj20zk0qoanq.jpg", "small": "201705071242105228862c7e2bajw1fagvkixjbsj20zk0qoanq.jpg" }, { "bigPic": "201705071242103357162c7e2bajw1fagvku0vcqj20zk0qo7j5.jpg", "small": "201705071242103357162c7e2bajw1fagvku0vcqj20zk0qo7j5.jpg" }, { "bigPic": "201705071242108513562c7e2bajw1fagvln8vw8j20zk0qoncc.jpg", "small": "201705071242108513562c7e2bajw1fagvln8vw8j20zk0qoncc.jpg" }, { "bigPic": "201705071242101296962c7e2bajw1fagvmmoj97j20zk0qodvf.jpg", "small": "201705071242101296962c7e2bajw1fagvmmoj97j20zk0qodvf.jpg" }], "gift": [{ "name": "当季特饮", "price": "39" }, { "name": "轻甜冷萃", "price": "39" }, { "name": "冷萃冰冰乐", "price": "36" }, { "name": "拿铁", "price": "31" }, { "name": "焦糖玛奇朵", "price": "35" }, { "name": "抹茶星冰乐", "price": "35" }, { "name": "摩卡", "price": "35" }, { "name": "馥芮白", "price": "36" }, { "name": "卡布奇诺", "price": "31" }] }],
    xlk: [{"_id":"590ea7e9de313a1cac55ae7d","typeId":"2","prod_name":"出发，去夏天","overtime":"全天候","pictures":[{"bigPic":"2017050712515354984005GtH2jgy1ff1lqqj2ekj32c02c01kg.jpg","small":"2017050712515354984005GtH2jgy1ff1lqqj2ekj32c02c01kg.jpg"},{"bigPic":"2017050712515396970005GtH2jgy1ff1lqrb51lj315u0wwn5z.jpg","small":"2017050712515396970005GtH2jgy1ff1lqrb51lj315u0wwn5z.jpg"}],"gift":[{"name":"星礼卡","price":"50"},{"name":"星礼卡","price":"100"},{"name":"星礼卡","price":"200"},{"name":"星礼卡","price":"250"},{"name":"星礼卡","price":"300"},{"name":"星礼卡","price":"350"},{"name":"星礼卡","price":"400"},{"name":"星礼卡","price":"450"},{"name":"星礼卡","price":"500"}]},{"_id":"590ea7ffde313a1cac55ae7e","typeId":"2","prod_name":"一起热情一夏","overtime":"全天候","pictures":[{"bigPic":"2017050712521493961005GtH2jgy1fds6upthb1j32c02c07pi.jpg","small":"2017050712521493961005GtH2jgy1fds6upthb1j32c02c07pi.jpg"},{"bigPic":"2017050712521430607005GtH2jgy1fds6uysjjaj32c02c0ty4.jpg","small":"2017050712521430607005GtH2jgy1fds6uysjjaj32c02c0ty4.jpg"},{"bigPic":"2017050712521423613005GtH2jgy1fds6v6v65mj32c02c04qp.jpg","small":"2017050712521423613005GtH2jgy1fds6v6v65mj32c02c04qp.jpg"},{"bigPic":"2017050712521481356005GtH2jgy1fds6vd0r8cj32c02c0x59.jpg","small":"2017050712521481356005GtH2jgy1fds6vd0r8cj32c02c0x59.jpg"}],"gift":[{"name":"星礼卡","price":"50"},{"name":"星礼卡","price":"100"},{"name":"星礼卡","price":"200"},{"name":"星礼卡","price":"250"},{"name":"星礼卡","price":"300"},{"name":"星礼卡","price":"350"},{"name":"星礼卡","price":"400"},{"name":"星礼卡","price":"450"},{"name":"星礼卡","price":"500"}]},{"_id":"590ea815de313a1cac55ae7f","typeId":"2","prod_name":"满满正能量","overtime":"全天候","pictures":[{"bigPic":"2017050712523728475655a00f8gw1faq4lgqri2j20qo0zk7bb.jpg","small":"2017050712523728475655a00f8gw1faq4lgqri2j20qo0zk7bb.jpg"},{"bigPic":"2017050712523778313655a00f8gw1faq4lh1f0zj20qo0zkjxv.jpg","small":"2017050712523778313655a00f8gw1faq4lh1f0zj20qo0zkjxv.jpg"},{"bigPic":"2017050712523746332655a00f8gw1faq4lkfs0aj20qo0zk7he.jpg","small":"2017050712523746332655a00f8gw1faq4lkfs0aj20qo0zk7he.jpg"},{"bigPic":"2017050712523731630655a00f8gw1faq4ln32m4j20qo0zk427.jpg","small":"2017050712523731630655a00f8gw1faq4ln32m4j20qo0zk427.jpg"},{"bigPic":"2017050712523767519655a00f8gw1faq4lnlsfsj20qo0zkwmf.jpg","small":"2017050712523767519655a00f8gw1faq4lnlsfsj20qo0zkwmf.jpg"},{"bigPic":"2017050712523744342655a00f8gw1faq4lo8p2xj20qo0zkgs4.jpg","small":"2017050712523744342655a00f8gw1faq4lo8p2xj20qo0zkgs4.jpg"}],"gift":[{"name":"星礼卡","price":"50"},{"name":"星礼卡","price":"100"},{"name":"星礼卡","price":"200"},{"name":"星礼卡","price":"250"},{"name":"星礼卡","price":"300"},{"name":"星礼卡","price":"350"},{"name":"星礼卡","price":"400"},{"name":"星礼卡","price":"450"},{"name":"星礼卡","price":"500"}]},{"_id":"590ea828de313a1cac55ae80","typeId":"2","prod_name":"为你点赞","overtime":"全天候","pictures":[{"bigPic":"201705071252564394768f50f14ly1fcngh1tc0aj20zk0qowuv.jpg","small":"201705071252564394768f50f14ly1fcngh1tc0aj20zk0qowuv.jpg"},{"bigPic":"201705071252564840168f50f14ly1fcngh2zw28j20zk0qotpq.jpg","small":"201705071252564840168f50f14ly1fcngh2zw28j20zk0qotpq.jpg"},{"bigPic":"201705071252566824068f50f14ly1fcngh4fh9lj20zk0qoqes.jpg","small":"201705071252566824068f50f14ly1fcngh4fh9lj20zk0qoqes.jpg"},{"bigPic":"201705071252564281868f50f14ly1fcngh5mkunj20zk0qowu3.jpg","small":"201705071252564281868f50f14ly1fcngh5mkunj20zk0qowu3.jpg"},{"bigPic":"201705071252566634168f50f14ly1fcngh6ohafj20zk0qok67.jpg","small":"201705071252566634168f50f14ly1fcngh6ohafj20zk0qok67.jpg"}],"gift":[{"name":"星礼卡","price":"50"},{"name":"星礼卡","price":"100"},{"name":"星礼卡","price":"200"},{"name":"星礼卡","price":"250"},{"name":"星礼卡","price":"300"},{"name":"星礼卡","price":"350"},{"name":"星礼卡","price":"400"},{"name":"星礼卡","price":"450"},{"name":"星礼卡","price":"500"}]}],
    bannerSrc: "banner/2017050712540428611banner.png",
    ip: '/uploads/'
  },

  onTap: function (e) {
    wx.navigateTo({
      url: '../detail/detail?id=' + e.currentTarget.id,
    })
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  // 页面加载执行的函数
  onLoad: function () {
    var that = this;
    // 请求ajax动态获取数据
    // wx.request({
    //   url: that.data.ip + 'success',
    //   success: function (res) {
    //     // 重新序列化数组，让其数据分离
    //     // 咖啡typeId (1) 星礼卡 (2)
    //     var coffee = [];
    //     var xlk = [];

    //     for (var i = 0; i < res.data.length; i++) {
    //       if (res.data[i].typeId === "1") {
    //         coffee.push(res.data[i]);
    //       } else if (res.data[i].typeId === "2") {
    //         xlk.push(res.data[i]);
    //       }
    //     }
    //     console.log(JSON.stringify(xlk));
    //     // 重新设置数据
    //     that.setData({
    //       coffee: coffee,
    //       xlk: xlk
    //     })
    //   }
    // })

    // 获取banner的数据
    // wx.request({
    //   url: that.data.ip + 'wxShowBanner',
    //   success: function (res) {
    //     // 重新设置数据
    //     console.log(JSON.stringify(res.data.pictures));
    //     that.setData({
    //       bannerSrc: res.data.pictures
    //     })
    //   }
    // })

  },

  //跳转到购买历史
  goHistory: function () {
    var that = this;
    wx.navigateTo({
      url: '/pages/history/history'
    })
  }

})
