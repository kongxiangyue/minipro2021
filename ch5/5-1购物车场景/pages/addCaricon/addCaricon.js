Page({
  data: {
    num: 1, //数量初始化为1
    totalNum: 0, //加入购物车的商品数量初始化为0
    hasCart: false, //初始化默认不加入购物车
  },
  //增加数量
  addCount: function() {
    var num = this.data.num;
    num++; //数量增加1
    this.setData({
      num: num //更新数量
    })
  },
  //加入购物车
  addCart: function() {
    const num = this.data.num; //获取数量
    var total = this.data.totalNum; //获取总数
    this.setData({
      hasCart: true, //用于控制加入购物车时显示图标
      totalNum: num + total //累计数量
    })
    wx.showToast({
      title: "加入购物车成功", //弹出消息提示框
      duration: 3000,
    })
  },
})