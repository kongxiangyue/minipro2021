const App = getApp();
Page({
  //从缓存中购物车中的数据
  onLoad: function(options) {
    var cartItems = wx.getStorageSync("cartItems")
    var total = wx.getStorageSync("total")
    var data = App.globalData.data
    this.setData({
      cartItems: cartItems,
      total: total
    })
  },
  //选择配送时间
  timeChange1: function(e) {
    var value1 = e.detail.value;
    this.setData({
      time1: value1
    });
  },
  timeChange2: function(e) {
    var value2 = e.detail.value;
    this.setData({
      time2: value2
    });
  },
})