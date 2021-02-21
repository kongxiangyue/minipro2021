//index.js
//获取应用实例
var app = getApp()
Page({
 
  data: {
    motto: 'Hello World',
    userInfo: {},

    avatar:null
  },
  //事件处理函数
  dian: function() {
    console.log("--bindViewTap--")
    var that = this;
    wx.downloadFile({
      url: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3018968254,2801372361&fm=26&gp=0.jpg',
       type: 'image',
        success: function(res) {
          console.log(res)
         that.setData({avatar:res.tempFilePath})
          
        }
      })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  dian2: function () {
    wx.downloadFile({
      url: "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3018968254,2801372361&fm=26&gp=0.jpg",
      success: function (res) {
        console.log(res);
        var rr = res.tempFilePath;
        wx.saveImageToPhotosAlbum({
          filePath: rr,
          success(res) {
            wx.showToast({
              title: '保存成功',
              icon: 'success',
              duration: 2000
            })
          }
        })
      }
    })
  }

})
