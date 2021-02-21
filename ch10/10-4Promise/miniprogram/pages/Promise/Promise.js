const app = getApp()
Page({
  data: {
    a:1,
    b:1,
    Callback1:'',
    Callback2:'',
    Promise1:'',
    Promise2:''
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

  Callback1:function(e){
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
        console.log("云函数常规返回，小程序Callback调用，结果："+res.result.add) 
        var c = res.result.add
        that.setData({
          Callback1: "a+b=" + c
        })
      },
      fail: console.error
    })
  },
  
  Callback2: function (e) {
    var that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'Promise2',
      // 传给云函数的参数
      data: {
        a: that.data.a,
        b: that.data.b,
      },
      success: function (res) {
        console.log("云函数Promise对象返回，小程序Callback调用，结果：" + res.result)
        var c = res.result
        that.setData({
          Callback2: "a+b=" + c
        })
      },
      fail: console.error
    })
  },

  Promise1: function (e) {
    var that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'add',
      // 传给云函数的参数
      data: {
        a: that.data.a,
        b: that.data.b,
      }
    }).then(res => {
      console.log("云函数常规返回，小程序Promise调用，结果：" + res.result.add) 
        var c = res.result.add
        that.setData({

          
          Promise1: "a+b=" + c
        })
    }).catch(error => {
      console.log("Promise1出错")
    })
  },

  Promise2: function (e) {
    var that = this;
    wx.cloud.callFunction({
      // 云函数名称
      name: 'Promise2',
      // 传给云函数的参数
      data: {
        a: that.data.a,
        b: that.data.b,
      }
    }).then(res => {
      console.log("云函数Promise对象返回，小程序Promise调用，结果：" + res.result) 
      var c = res.result
      that.setData({
        Promise2: "a+b=" + c
      })
    }).catch(error => {
      console.log("Promise2出错")
    })
  }
})
