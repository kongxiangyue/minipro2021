//获取应用实例
var app = getApp()
Page({
  //
  orderpay: function (e) {
    var that = this;
    wx.login({
      success: function (res) {
           wx.request({
             url: 'https://skill.qiujikeji.com/mini/getOpenid',
             method: 'POST',
             data: { 'js_code': res.code },
                success: function (res) {
                  console.log(res.data)
                  that.xiadan(res.data);
                }
              })
            }
    });
  },
  

  //下单
  xiadan: function (openId) {
    var that = this;
    wx.request({
      url: 'https://skill.qiujikeji.com/mini/pay/teacher',
      method: 'POST',
      data: {'openId':openId},
      success: function (res) {
        var res=res.data
        console.log(res)
        wx.requestPayment({
          timeStamp: res.timeStamp,
          nonceStr: res.nonceStr,
          package: res.package,
          signType: 'MD5',
          paySign: res.paySign,
        })
      }
    })
  },
 
})