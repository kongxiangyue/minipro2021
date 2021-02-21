
Page({
  data: {
    hotelname: '',
    address: '点击选择地点',
    startDay: '2019-11-00',
    endDay: '2019-11-01',
    name:null,
    tel:null,
    formid:null,
    openid: '',
    AccessToken:null,
  },
  // 设置地点
  chooseLocation: function () {
    var that = this;

    wx.chooseLocation({
      success: function(res){
        console.log(res)
        that.setData({
          address: res.address,
        })
      },
      fail: function() {
        // fail
      },
      complete: function() {
        // complete
      }
    })
  },
  // 设置开始日期
  startDateChange: function (e) {
    this.setData({
      startDay: e.detail.value
    })
  },

  // 设置结束日期
  endDateChange: function (e) {
    this.setData({
      endDay: e.detail.value
    })
  },
  onLoad:function()
  {
    
  },
  // 发送模板
  formSubmit: function (e) {
    console.log(e)
    this.setData({
      name:e.detail.value.name,
      hotelname: e.detail.value.hotelname,
      tel: e.detail.value.tel,
      formid: e.detail.formId
    })
   
   
  }
})