const App = getApp();
Page({
  //数据初始化
  data: {
    flag: 0,
    list: ["手机产品", "时尚耳机", "迷你相机", "电脑硬盘", "键盘鼠标", "移动硬板", "平板电脑", "外置声卡", "美妆护肤", "生活用品"],
    sort: 1
  },
  //获得数据
  onLoad: function(options) {
    this.setData({
      main_key: App.globalData.data
    })
  },
  //单击商品列表跳转商品详情页
  btntodetail: function(e) {
    var listid = e.currentTarget.dataset.id
    console.log("你点击了第" + (listid + 1) + "个商品")
    wx.navigateTo({
      url: '../../pages/goods-detail/goods-detail?listid=' + listid
    })
  },
  //Tab栏切换
  switchTab: function(e) {
    console.log(e)
    this.setData({
      sort: e.currentTarget.id
    })
  },
})