Page({
  data: {
    name: "",
    password:''
  },
  onLoad: function (option) {
    var that=this
    wx.getStorage({
      key: 'name',
      success(res) {
        console.log("wx.setStorage传过来的name=" + res.data)
        that.setData({
          name: res.data
        })
      }
    })
    wx.getStorage({
      key: 'password',
      success(res) {
        console.log("wx.setStorage传过来的password=" + res.data)
        that.setData({
          password: res.data
        })
      }
    })
  }
})