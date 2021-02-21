
var app = getApp();
Page({
  data: {
    username: null,
    password: null,
    jieguo: null
  },
  dian: function (e) {
    var that = this;
    that.username = e.detail.value.name;
    that.password = e.detail.value.password;
    console.log(that.username);
    wx.request({

      url: 'http://localhost:8080/mini/login',
      data: {
        name: that.username,
        password: that.password
      },

      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data[0]);
        console.log(res.data[0].jieguo);
        that.jieguo = res.data[0].jieguo;
        if (that.jieguo == 1) { 
          wx.setStorageSync("username", that.username)
          wx.redirectTo({ url: "../user/user" }) }
      },
      fail: function (res) {
        console.log(".....fail.....");
      }
    })

  },

  usernameInput: function (event) {

    console.log(event.detail.value);
    this.setData({ username: event.detail.value })
  },

  passwordInput: function (event) {
    this.setData({ password: event.detail.value })
  }

})