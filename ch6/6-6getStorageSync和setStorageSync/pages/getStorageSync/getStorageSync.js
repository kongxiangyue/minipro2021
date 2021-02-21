Page({
  data: {
    name: "",
    password:''
  },
  onLoad: function (option) {
    this.setData({
     name:wx.getStorageSync("name"),
    password:wx.getStorageSync("password")
    })
    console.log("setStorageSync传过来的name="+this.data.name)
    console.log("setStorageSync传过来的password=" + this.data.password)
  }
})