//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    type:'',
    height:null,
    width:null,

  },
  
  onLoad: function () {
  },

  choose: function(e) {
    var that = this;
    wx.chooseImage({
      success(res) {
     
        wx.getImageInfo({
          src: res.tempFilePaths[0],
          success(res) {
            that.data.type = res.type,
            that.data.height=res.height,
            that.data.width= res.width
            console.log(res)
            that.setData({
             type:res.type,
             height:res.height,
            width:res.width
           })
          }
        })
      }
    })
    
  }
})
