
Page({
  data: {
    lte:{},
    in:[]
  },

  onLoad: function() {
   
    },

  lte:function(e){
      var that=this
      const db = wx.cloud.database()
    const _ = db.command
    db.collection('db1').where({
      age: _.lte(30)
    }).get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            lte: res.data
          })
        }
      })
    },

  in:function(e){
    var that=this
    const db = wx.cloud.database()
    const _ = db.command
    db.collection('db1').where({
      age: _.in([25, 30])
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          in: res.data
        })
      }
    }) 
  }

})
