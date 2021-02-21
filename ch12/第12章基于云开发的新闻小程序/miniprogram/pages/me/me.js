var app = getApp();
Page({
  data:{
    userInfo:{}
  },
  onLoad:function(){
    var that=this
    wx.getUserInfo({
      success: function (res) {
       that.setData({
         userInfo:res.userInfo
       })
      }
    })
  },
  mefuntion:function(e){
 wx.navigateTo({
   url: '../add/add',
 })
  },
  setup:function(){
    wx.navigateTo({
      url: '../setting/setting',
    })
  }

})