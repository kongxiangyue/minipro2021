const App = getApp();
Page({
  //获取数据
  onLoad: function(options) {
    this.setData({
      main_key: App.globalData.data
    })
  },
  //单击商品列表跳转商品详情页
  btntodetail: function(e) {
    var listid = e.currentTarget.dataset.id
    console.log("你点击了第" + (listid + 1) + "个商品")
    wx.navigateTo({
      url: '../../pages/goods-detail/goods-detail?listid=' + listid
    })
  }
})