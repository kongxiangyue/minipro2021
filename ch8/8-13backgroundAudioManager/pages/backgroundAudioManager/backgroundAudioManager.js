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
   
  },

  onShow: function () {

  },
  play:function(){
    // 设置了 src 之后会自动播放
    backgroundAudioManager.src = "http://isure.stream.qqmusic.qq.com/C4000013xY8G2lIong.m4a?guid=7755942796&vkey=7606A71BA1B1FE25153B1739773F3508E140C9241416E3F491BF664BC4293AF618B0876E7B85B160A61B79E54187A0D5B5F288A386615D57&uin=0&fromtag=66"
  },
  pause:function(){
    backgroundAudioManager.pause();
  },
  continue:function(){
    backgroundAudioManager.play();
  }
  
})