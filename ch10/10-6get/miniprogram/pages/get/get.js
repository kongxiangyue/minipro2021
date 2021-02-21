//index.js
const app = getApp()

Page({
  data: {
    docget:{},
    Collectionget:[]
  },

  onLoad: function() {
   
    },

    docget:function(e){
      var that=this
      const db = wx.cloud.database()
      db.collection('db1').doc('b9eb782f-9818-45df-ab22-8f0f56fa05fc').get({
        success: function (res) {
          console.log(res.data)
          that.setData({
            docget: res.data
          })
        }
      })
    },

  Collectionget:function(e){
    var that=this
    const db = wx.cloud.database()
    db.collection('db1').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          Collectionget: res.data
        })
      }
    })
  }

  




})
