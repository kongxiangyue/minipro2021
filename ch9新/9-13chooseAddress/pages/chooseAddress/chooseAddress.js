Page({
  data: {
    addressInfo: null,
    chooseAddress:false
  },
  chooseAddress:function(e){
    var that=this;
    wx.chooseAddress({
      success: function (res){
        that.setData({
          addressInfo: res,
          chooseAddress: true
        })
      },
      fail: function (err) {
        console.log(err)
      }
    })
  },
  
   pay:function(e){
  
     wx.navigateTo({
       url: '../pay/pay'
     })
   }


})


