
Page({
  data: {
    update1:{},
    update2:{},
    set1:{},
    set2:{}
  },

  onLoad: function() {
   
    },

  update1:function(e){
    var that=this;
    const db = wx.cloud.database()
    db.collection('db1').doc('25c59b425d4040c206b43fa41f730d52').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          update1: res.data
        })
      }
    })
  },

  update2: function (e) {
    var that = this;
    const db = wx.cloud.database()
    db.collection('db1').doc('25c59b425d4040c206b43fa41f730d52')
    .update({
      data: {
       age:55
      },
      success: function (res) {
        console.log(res.data)
        db.collection('db1').doc('25c59b425d4040c206b43fa41f730d52').get({
          success: function (res) {
            console.log(res.data)
            that.setData({
              update2: res.data
            })
          }
        })
      }
    })
  },

  set1: function (e) {
    var that = this;
    const db = wx.cloud.database()
    db.collection('db1').doc('08560c9e5d0e2153061a3a3837585483').get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          set1: res.data
        })
      }
    })
  },

  set2: function (e) {
    var that = this;
    const db = wx.cloud.database()
    db.collection('db1').doc('08560c9e5d0e2153061a3a3837585483')
      .set({
        data: {
          age: 60,name:"李教授",password:"li",sex:"woman",tel:"18888881111"
        },
        success: function (res) {
          console.log(res.data)
          db.collection('db1').doc('08560c9e5d0e2153061a3a3837585483').get({
            success: function (res) {
              console.log(res.data)
              that.setData({
                set2: res.data
              })
            }
          })
        }
      })
  }

 

})
