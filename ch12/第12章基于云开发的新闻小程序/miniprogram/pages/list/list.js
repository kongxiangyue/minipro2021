Page({
  /** * 页面的初始数据** */
  data: {
    shuzu: [],
    detail_id:"n001"
  },
  /** * 生命周期函数--监听页面加载*** */
  onLoad: function (options) {
    var that = this
    const db = wx.cloud.database()
    db.collection('ch12').where({
      newsid: "0"
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })

  },
  select:function (e) 
  { console.log(e)
    var that = this
    var id=e.target.id
    const db = wx.cloud.database()
    db.collection('ch12').where({
      newsid:id
    }).get({
      success: function (res) {
        console.log(res.data)
        that.setData({
          shuzu: res.data
        })
      }
    })
  },

  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {  
  }
})