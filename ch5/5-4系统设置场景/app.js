App({
  data: {
    configs: [{
      name: "立论阶段",
      time: 180,
      voice: 15
    }, {
      name: "驳立论阶段",
      time: 180,
      voice: 15
    }, {
      name: "质辩环节",
      time: 180,
      voice: 15
    }, {
      name: "自由辩论",
      time: 180,
      voice: 15
    }, {
      name: "总结陈词",
      time: 180,
      voice: 15
    }]
  },
  onLaunch: function() {
    wx.setStorageSync('configs', this.data.configs); //存入缓存
  }
})