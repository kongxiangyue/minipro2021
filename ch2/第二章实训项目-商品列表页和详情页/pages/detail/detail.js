const app = getApp();
Page({
  data: { //数据初始化
    data:null
  },
  //页面加载时获得app.js中的数据
  onLoad: function(option) {
    var id = option.listid
    this.setData({
      data: app.goodsdata[id]
    })
  }

})