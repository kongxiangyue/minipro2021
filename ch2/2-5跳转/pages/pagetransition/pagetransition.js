Page({
  topageone: function() {
    wx.navigateTo({
      url: '/pages/pageone/pageone',
    })
  },
  topagetwo: function() {
    wx.redirectTo({
      url: '/pages/pagetwo/pagetwo',
    })
  },
  totabpage: function() {
    wx.switchTab({
      url: '/pages/mytab/mytab',
    })
  }
})