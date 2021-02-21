
Page({
  data: {
    level:100,
    isCharging:true
  },

  onReady(res) {
    var that=this
    wx.getBatteryInfo({
      success(res) {
        console.log('电量：', res.level)
        console.log('是否正在充电：', res.isCharging)
        that.setData({
          level:res.level,
          isCharging: res.isCharging
        })
      }
    })
  },
 onShow(e){
 }
})