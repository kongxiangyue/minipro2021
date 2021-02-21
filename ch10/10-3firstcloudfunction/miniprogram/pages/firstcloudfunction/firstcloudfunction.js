const app = getApp()
Page({
  data: {
    a:1,
    b:1,
   add:'',
   sub:''
  },

  onLoad: function() {
    
  },

binda:function(e){
 this.setData({
   a: e.detail.value
 })
    console.log(e.detail.value)
  },

  bindb: function (e) {
    this.setData({
      b: e.detail.value
    })
    console.log(e.detail.value)
  },

  add:function(e){
    var that=this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: that.data.a,
        b: that.data.b,
      },
      success: function (res) {
        console.log(res.result.add) 
        var c = res.result.add
        that.setData({
          add: "a+b=" + c
        })
      },
      fail: console.error
    })
  },

  sub: function (e) {
    var c = Number(this.data.a) - Number(this.data.b)
    console.log(c)
    this.setData({
      sub: "a-b=" + c
    })
  }
})
