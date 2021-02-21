//index.js
const app = getApp()

Page({
  data: {
    where: [],
    orderby:[]
  },

  onLoad: function() {
   
    },

    where:function(e){
      var that=this
      const db = wx.cloud.database()
      db.collection('db1').where({
        sex:"man" }).get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            where: res.data
          })
        }
      })
    },

  orderby:function(e){
    var that=this
    const db = wx.cloud.database()
    db.collection('db1').orderBy('age', 'asc') .get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          orderby: res.data
        })
      }
    })
  }

  




})
