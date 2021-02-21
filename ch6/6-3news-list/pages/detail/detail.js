//aboutme.js
//获取应用实例
var app = getApp()
Page({
  data: {
    id1: 1,
    shuzu: []
  },
  onLoad: function (options) {
    // this.setData({
    // id1: decodeURIComponent(options.id),
    //})
    console.log(options)
    var that = this
    wx.request({
      url: 'http://127.0.0.1:8080/mini/detail', //仅为示例，并非真实的接口地址
      data: { id: decodeURIComponent(options.id) },
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'  // 默认值
      },
      success(res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })
  },
  closepage: function () {
    wx.navigateBack()
  },
  toastChange: function () {
    this.setData({ toastHidden: true })
    wx.navigateBack()
  },
})