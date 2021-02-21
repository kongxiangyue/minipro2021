
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
      var that = this;
     wx.request({
      url: 'http://localhost:8080/wxtamplate/getAccessToken', //改成自己的服务器地址
      data: {
      },
      header: {
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log("getAccessToken的----" + res.data.access_token)
        that.setData({
          AccessToken: res.data.access_token
        })
      }
    })
      wx.login({
        success: function (res) {
          console.log('code:' + res.code)
          //发送请求
          wx.request({
            url: 'http://localhost:8080/wxtamplate/loginservlet', //改成自己的服务器地址
            data: {
              code: res.code,//上面wx.login()成功获取到的code
              operFlag: 'getOpenid',
            },
            header: {
              'content-type': 'application/json' //默认值
            },
            success: function (res) {
              console.log("getopenid----" + res.data.openid)
              that.setData({
                openid: res.data.openid
              })
            }
          })
        }
      })
   
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
   
    wx.request({
      url: 'http://localhost:8080/wxtamplate/sendmessage', //改成自己的服务器地址
     // method: "POST",
      data: {
        ACCESS_TOKEN:this.data.AccessToken,	 
        openid:this.data.openid,	
        formId: "ebd6414f89f54cfe879c7fa9e2b0e78f",	
        keyword11: this.data.hotelname,	
        keyword21: this.data.address,	
        keyword31: this.data.startDay,	
        keyword41: this.data.endDay,	
        keyword51: this.data.name,	
        keyword61: this.data.tel
      },
      header: {
       
        'content-type': 'application/json' //默认值
      },
      success: function (res) {
        console.log("模板消息成功----" + res.data)
      }
    })
  }
})