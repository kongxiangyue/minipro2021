const innerAudioContext = wx.createInnerAudioContext();
innerAudioContext.loop=false
var app = getApp()
Page({
  data: {
 
    id: "",
    songName: "",
    play_pause_src: './img/play.png',
    animation_pause: 'animation-play-state:paused',
    timer: null,
    touches: {},
    mode: {
      mode_img: ['./img/shunxu.png', './img/singlemusic.png'],
      index: 0
    },
    mode1: {
      mode_img: ['./img/play.png','./img/pause.png'],
      index: 0
    },
    songList: [{ no: 1, name: "慢半拍", url: "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400002qpjAV2lYx81.m4a?guid=7755942796&vkey=761C71FAA22FB595EA9717ED744BAE5919879B74DF2579EB29F93BEBA1A02E5086663A948F19EA2EB11B25A9595137A777D355D87747C54D&uin=0&fromtag=38" }, {
      no: 2, name: "木偶人", url: "http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400003iHc0e2UIgMC.m4a?guid=7755942796&vkey=4AAA588B92E9BF4FC3B3AB0698543349152EC7871C7139ADD967B94BB076B4018C907D389E1337884B65C54B0D30D3D07D798C913A87B9CE&uin=0&fromtag=38"
    }, { no: 3, name: "我的朋友", url:"http://aqqmusic.tc.qq.com/amobile.music.tc.qq.com/C400001nGinl3Tsk4H.m4a?guid=7755942796&vkey=BC68A40B32AC814AAF389875DBD453782BDF1CEA44FA2F382E93F9A35CFAC2915C042CE485967353FD90958ED886E361C24587333F2E8224&uin=0&fromtag=38"}],
    playmusicname:"木偶人",
    songList_show: "none",
    duration:208,
    currentTime:0
  },

  onLoad: function () {
  

  },
  onReady: function () {
    console.log(this.data.songList[1].url)
    innerAudioContext.src = this.data.songList[1].url
    console.log("已经有了innerAudioContext" + innerAudioContext.duration)
  },
 
  modetap:function(){ //播放模式的设置
    if (innerAudioContext.loop=true) 
    { innerAudioContext.loop = false}
    else{
      innerAudioContext.loop = true}
      
    var mode=this.data.mode
    mode.index++
    if(mode.index>=2){
      mode.index=0
    }
    this.setData({
      mode:mode
    })
  },

  Preaudio: function () { //前一首歌
    innerAudioContext.src = this.data.songList[0].url
    innerAudioContext.play();
    this.setData({
      playmusicname: "慢半拍"
    })
  },

  Playaudio: function () { //播放当前歌曲
    var that=this
    var mode1 = this.data.mode1
    mode1.index++
    if (mode1.index >= 2) {
      mode1.index = 0
    }
    this.setData({
      mode1: mode1
    })
  
    if (innerAudioContext.paused) {
      innerAudioContext.play();
      innerAudioContext.onPlay(() => {
       
        console.log('audioContext.paused', innerAudioContext.paused)
      })
      innerAudioContext.onTimeUpdate(() =>{
        that.setData({
          duration:innerAudioContext.duration,
          currentTime: innerAudioContext.currentTime
        })
      })
    } else {
      innerAudioContext.pause();
      innerAudioContext.onPause(() => {
        console.log('audioContext.paused', innerAudioContext.paused)
      })
    }

  },

 

  Nextaudio: function () { //后一首歌
    innerAudioContext.src = this.data.songList[2].url
    innerAudioContext.play();
    this.setData({
      playmusicname:"我的朋友"
    })
  },
 
  showlist: function (e) { //显示播放列表
    this.setData({
      songList_show: "block"
    })
  },

  closeList: function () {//关闭播放列表
    this.setData({
      songList_show: "none"
    })
  }
})

