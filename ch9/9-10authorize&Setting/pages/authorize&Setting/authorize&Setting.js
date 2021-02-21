//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
   
  },
  
  onLoad: function () {
    context:''
  },
  location1:function(){
    var that=this
    wx.getSetting({
      success(res) {
        console.log(res)
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                success: function(res) {
                 console.log(res)
                  that.setData({ context: "你所在的经度是" + res.latitude+"你所在的纬度是"+res.longitude})
                },
              })
            }
          })
        }
      }
    })
  },
 
  location2: function () {
    var that = this
  
        wx.getSetting({
          success(res) {
            console.log(res.authSetting)
            if (!res.authSetting['scope.record']) {
              wx.openSetting({
                success(res) {
                  console.log(res)
                  wx.startRecord({
                    success(res) {
                      const tempFilePath = res.tempFilePath
                      console.log("录音结束")
                    }
              })
            } 
        })
        }}
        })
  }
})
