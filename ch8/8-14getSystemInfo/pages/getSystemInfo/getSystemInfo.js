const app = getApp()

Page({
  data: {
    model: '',
    pixelRatio: '',
    windowWidth: '',
    windowHeight: '',
    language: '',
    version: '',
    system: '',
    platform: ''
  },

  onLoad: function () {

  },

  getInfo: function () {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          model: res.model,
          pixelRatio: res.pixelRatio,
          windowWidth: res.windowWidth,
          windowHeight: res.windowHeight,
          language: res.language,
          version: res.version,
          system: res.system,
          platform: res.platform
        })
      },
      fail: function (res) {

      },
      complete: function (res) {

      }
    })
  }
})
