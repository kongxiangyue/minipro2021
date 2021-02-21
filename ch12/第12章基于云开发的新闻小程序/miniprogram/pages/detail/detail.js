
//获取应用实例
var app = getApp()
Page({
  data: {
    id1: 1,
    detail_content: {}
  },
  onLoad: function (options) {
    console.log(options)
    var that = this
    var detail_id = options.detail_id;
    const db = wx.cloud.database()
    db.collection('ch12').doc(detail_id).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          detail_content: res.data
        })
      }
    })

   
  }
})