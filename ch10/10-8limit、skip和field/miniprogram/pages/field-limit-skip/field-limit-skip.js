
Page({
  data: {
    limit:{},
    skip:[],
    field:[]
  },

  onLoad: function() {
   
    },

  limit:function(e){
      var that=this
      const db = wx.cloud.database()
    db.collection('db1').limit(3).get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            limit: res.data
          })
        }
      })
    },

  skip:function(e){
    var that=this
    const db = wx.cloud.database()
    db.collection('db1').skip(4).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          skip: res.data
        })
      }
    }) 
  },

  field: function (e) {
    var that = this
    const db = wx.cloud.database()
    db.collection('db1').field({
      name: true, age: true, tel: true
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          field: res.data
        })
      }
    })
  }

  




})
