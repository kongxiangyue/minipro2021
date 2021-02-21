//index.js
const app = getApp()

Page({
  data: {
    wishs: []

  },
  onLoad: function (e) {

    var that = this
    const db = wx.cloud.database()
    db.collection('wishwall').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          wishs: res.data
        })
      }
    })
  },
  details:function(e){
    console.log(e.target.id)   //点击了那条愿望
    wx.navigateTo({
      url: "../details/details?id="+e.target.id
    })

  },
  add:function(e){
    wx.navigateTo({
      url: '../add/add',
    })
  }

})
