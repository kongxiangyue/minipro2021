Page({
  data: {
    UserImage: '',
    Username: '',
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this
    wx.getUserInfo({
      success:function(res){
        that.setData({
          UserImage: res.userInfo.avatarUrl,
          Username: res.userInfo.nickName
        })
      }
    })
  }
})