//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   a:5,
   b:5,
   c:0,
   Info:""
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var c=app.add(this.data.a,this.data.b)
    var Info=app.Info
    this.setData({
      c:c,
      Info:Info
      })
  }
   
})
