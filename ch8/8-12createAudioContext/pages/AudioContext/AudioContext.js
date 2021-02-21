Page({
  onReady: function (e) {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  data: {
    time:0,
    poster: 'http://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000',
    name: '此时此刻',
    author: '许巍',
    src: 'http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001VfvsJ21xFqb.m4a?guid=7755942796&vkey=DCE16865FD7290841AD5C3E90461ADA3FA0ECA135E0005861E0A1D406642332094B84AC22FCDAF9A70C8A2EC729EECB010AE0E585F8CFB70&uin=0&fromtag=38',
  },
  audioPlay: function () {
    this.audioCtx.play()
  },
  audioPause: function () {
    this.audioCtx.pause()
  },
  audio14: function () {
    this.audioCtx.seek(0)
  },

  change: function (e) {
    console.log(e)
    this.audioCtx.seek(e.detail.value)
  }
})