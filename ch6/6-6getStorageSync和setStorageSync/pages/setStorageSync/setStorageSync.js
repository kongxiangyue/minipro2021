Page({
  data: {
  },
  test: function () {
  wx.setStorageSync("name", "李四")
    wx.setStorageSync("password", "123456")
   wx.navigateTo({
     url: '../getStorageSync/getStorageSync',
   })
  }
})
