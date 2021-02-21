
var app=getApp()
Page({
  data:{
    goodsdata:null
  },
  onLoad(){
   this.setData({
     goodsdata:app.goodsdata
   })
  },
  todetail: function (e) {
    var listid = e.currentTarget.dataset.id
    console.log("你点击了第" + (listid + 1) + "个商品")
    wx.navigateTo({
      url: '../detail/detail?listid=' + listid
    })
  }
})