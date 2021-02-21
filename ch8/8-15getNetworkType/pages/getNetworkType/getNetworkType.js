// pages/poem/detail/index.js
const backgroundAudioManager = wx.getBackgroundAudioManager()
backgroundAudioManager.title = '将进酒'
backgroundAudioManager.epname = '将进酒'
backgroundAudioManager.singer = '李白'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    src:'http://isure.stream.qqmusic.qq.com/C4000013xY8G2lIong.m4a?guid=7755942796&vkey=7606A71BA1B1FE25153B1739773F3508E140C9241416E3F491BF664BC4293AF618B0876E7B85B160A61B79E54187A0D5B5F288A386615D57&uin=0&fromtag=66'
  },

  onShow: function () {

  },
  play:function(){
    var that=this
    wx.getNetworkType({
      success(res) {
        const networkType = res.networkType
        console.log(networkType)
        if(networkType=="wifi")
        { 
          backgroundAudioManager.src =that.data.src
        }
        else{
          wx.showModal({
            title: '提示',
            content: '您处于非wifi环境，播放音乐将消耗您的流量，继续播放吗？',
            success(res) {
              if(res.confirm) {
                console.log('用户点击确定')
                backgroundAudioManager.src = that.data.src
              } else if (res.cancel) {
                console.log('用户点击取消')
              }
            }
          })
         
        }
      }
    })
    // 设置了 src 之后会自动播放
    
  },
  pause:function(){
    backgroundAudioManager.pause();
  },
  continue:function(){
    backgroundAudioManager.play();
  }
  
})