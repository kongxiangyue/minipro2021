
var app = getApp();
Page({
  data:{
    username:null
  },
  onLoad:function(options){
    console.log((wx.getStorageSync("username")));
    this.setData({
      username:wx.getStorageSync("username")
    })

  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})