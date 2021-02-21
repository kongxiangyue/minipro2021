//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {}
  },
 
  onLoad: function () {
    var that=this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
        that.setData({
          userInfo: res.userInfo
        })
      }
    })
    
  }
})
