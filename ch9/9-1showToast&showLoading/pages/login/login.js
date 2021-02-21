
var app = getApp();

Page({
  data:{
  },
  onLoad:function(options){
   
  },
 
  formsubmit:function (e){
    console.log(e)
    if (e.detail.value.yhm == "admin"&e.detail.value.mm=="admin")
    {
      wx.setStorageSync("name", e.detail.value.yhm);
      wx.showLoading({
        title: '登陆中',
        duration: 10000
      })

      setTimeout(function () {
        wx.redirectTo({
          url: '../user/user',
        })
      }, 10000)
    }
      
      setTimeout(function () {
        wx.showToast({
          title: '登陆成功',
          icon: 'success',
          duration: 10000
        })
      }, 10000)
    }

})