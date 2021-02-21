

Page({
  data:{
    username:null,
   
  },

  onLoad:function(options){
    var a=wx.getStorageSync("name");
   
    console.log(a)
    this.setData({
      username:a,
      
    })
  },
  onReady:function(){
   console.log("111")
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