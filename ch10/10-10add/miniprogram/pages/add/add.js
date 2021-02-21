
Page({
  data: {
    lte:{},
    add:[]
  },

  onLoad: function() {
   
    },

  lte:function(e){
      var that=this
      const db = wx.cloud.database()
    const _ = db.command
    db.collection('db1').where({
      age: _.gte(30)
    }).get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            lte: res.data
          })
        }
      })
    },

  add:function(e){
    var that=this
    const db = wx.cloud.database()
    const _ = db.command
    db.collection('db1').add({
      data: {
        age: 60,
        name: "韩老师",
        password:"han",
        sex:"man",
        tel:"18888880002"
      },
      success: function (res) {  //插入成功之后查询
        console.log(res)
        db.collection('db1').where({
          age: _.gte(30)
        }).get({
          success: function (res) {
            console.log(res.data)
            that.setData({
              add: res.data
            })
          }
        })
      }
    })


    
  }

})
