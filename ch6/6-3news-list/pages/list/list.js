Page({
  /** * 页面的初始数据** */
  data: {
   id1:1,
    shuzu: []
  },
  /** * 生命周期函数--监听页面加载*** */
  onLoad: function (options) {
    var that=this
    wx.request({
      url: 'http://127.0.0.1:8080/mini/list', //仅为示例，并非真实的接口地址
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        that.setData({
          shuzu:res.data
        })
      }
    })

  },

  dian:function(e)
  {
    var a= e.target.id
    console.log(a)
    wx.navigateTo({
      url:"/pages/detail/detail?id="+a,
    }) 
  },

  /*** 用户点击右上角分享*/
  onShareAppMessage: function () {  
  }
})