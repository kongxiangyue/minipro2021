Page({
  data: {
    password:"123456"
  },
  test: function () {
    wx.setStorage({
      key: "name",
      data:"张三"
    })
    wx.setStorage({
      key: "password",
      data: "123456"
    })
  wx.navigateTo({
    url: '../getStorage/getStorage',
  })
  }
})
