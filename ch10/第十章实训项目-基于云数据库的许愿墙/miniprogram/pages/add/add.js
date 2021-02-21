//index.js

Page({
  data: {
    title:'',
    region: ['广东省', '广州市', '海珠区'],
    date: "2019-08-08",
    address:"广东省广州市海珠区"
  },

  title:function(e){
  this.setData({
    title: e.detail.value
  })
  },
  
  date: function (e) {
    console.log(e)
    this.setData({
      date:e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('携带值为', e.detail.value[0] + e.detail.value[1] + e.detail.value[2])
    this.setData({
      region: e.detail.value,
      address: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    })
  },
  add:function(e){
    var that=this;
    const db = wx.cloud.database()
    
    db.collection('wishwall').add({
      data: {
       title:that.data.title,
        date: that.data.date,
        address: that.data.address
      },
      success: function (res) {
        console.log(res)
      }
    })

    wx.navigateTo({
      url: '../wishwall/wishwall',
    })
  }
 
  
})
