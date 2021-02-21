
Page({
  data: {
  },

  onLoad: function() {
   
    },

  remove1:function(e){
    var that=this
    const db = wx.cloud.database()
    db.collection('db1').doc("15ec67d2-4b57-4828-b8b4-2f01ba97d2fc").remove({
      success: function (res) {
        console.log(res)
        console.log("成功删除"+res.stats.removed+"条记录")
      }
    })
    
  },

  remove2: function (e) {
    wx.cloud.callFunction({
      name: 'remove',  // 云函数名称
      data: {// 传给云函数的参数
        name: "赵老师"
      },
      success: function (res) {
        console.log(res)
        console.log("成功删除" + res.result.stats.removed + "条记录")
      },
      fail: console.error
    })
  }

 
 

})
