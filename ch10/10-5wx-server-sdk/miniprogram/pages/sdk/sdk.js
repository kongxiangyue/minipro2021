const app = getApp()
Page({
  data: {
    a:1,b:1,sdk:''
  },

binda:function(e){
 this.setData({
   a: e.detail.value
 })
    console.log("a的值是"+e.detail.value)
  },

  bindb: function (e) {
    this.setData({
      b: e.detail.value
    })
    console.log("b的值是" +e.detail.value)
  },

  sdk:function(e){
    var that=this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'sdk',
      // 传给云函数的参数
      data: {
        a: that.data.a,
        b: that.data.b,
      },
      success: function (res) {
        console.log(res) 
        console.log("通过sdk云函数间接调用add云函数，结果："+res.result.result.add) 
        var c = res.result.result.add
        that.setData({
          sdk: "a+b=" + c
        })
      },
      fail: console.error
    })
  }
})
