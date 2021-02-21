var DataCrypt = require('../../utils/DataCrypt.js');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    stepInfoList:[]
  },


  onLoad: function (options) { 
    var that = this;
     wx.login({ 
       success: function (res) { 
         var appid = "wx800eb4451b223c35"; 
         var secret = "8a854735c1dea5dab2b0c09b6c4ab6b0"; 
         if (res.code) { 
           wx.request({ 
             url: 'https://api.weixin.qq.com/sns/jscode2session?appid=' + appid + '&secret=' + secret + '&js_code=' + res.code + '&grant_type=authorization_code', 
             header: { 'content-type': 'json' }, 
             success: function (res) {
                  var session_key = res.data.session_key; 
                  console.log(session_key); 
               that.getWeRunData(appid, session_key); } 
                   }) 
                  }
             } 
             }) 
   }, 
                   //获取encryptedData（没有解密的步数）和iv（加密算法的初始向量） 
  getWeRunData: function (appid,session_key) {
      var that=this
      wx.getSetting({ success: function (res) {
         console.log(res); 
         if (!res.authSetting['scope.werun']) 
         {wx.showModal
          ({ 
             title: '权限提示', 
             content: '获取微信运动步数需要开启计步权限', 
             success: function (res) 
              { 
               if (res.confirm) { 
                 //跳转去设置 
                 wx.openSetting({ 
                   success: function (res) 
                   {}
               })
               } 
              }
          })
        } else {
               wx.getWeRunData({ 
                 success: function (res) {
                    console.log(res); 
                    var encryptedData = res.encryptedData; 
                    var iv = res.iv;
                    var pc = new DataCrypt(appid, session_key); 
                    console.log(pc); 
                    var data = pc.decryptData(encryptedData, iv) 
                   console.log("------" + data.stepInfoList[30].step)
                 that.setData({
                   stepInfoList: data.stepInfoList})
                 },
          fail: function (res) { console.log("获取数据失败") }
        })
      }
    }
    })
  },





  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})