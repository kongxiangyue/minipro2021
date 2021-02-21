//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    tapIndex: 0,
    src: ["https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1559469676437&di=2ec38f7708431273d174cd783bc1bc58&imgtype=0&src=http%3A%2F%2Fwx1.sinaimg.cn%2Flarge%2F007aKGvQgy1fv0x6gx8rzj30l40bv44c.jpg"]
  },
  
share: function (e) {
  var that=this
  console.log(e.currentTarget.id)
    wx.showActionSheet({
      itemList: ['保存图片', '预览图片', '复制图片地址'],
      success(res) {
        console.log(res.tapIndex)
        console.log(res)
        if (res.tapIndex == 0) {
          wx.downloadFile({
            url: that.data.src[0], 
            success(res) {
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath
              })
              wx.showToast({
                title: '保存成功',
                icon: 'success',
                duration: 1500
              });
            }
          })
          
        }
        if (res.tapIndex == 1) {
          wx.previewImage({
            current: that.data.src[0],
            urls: that.data.src
         
          })
        }
       
      },
      fail(res) {
        console.log(res.errMsg)
      }
      });
  }
})
