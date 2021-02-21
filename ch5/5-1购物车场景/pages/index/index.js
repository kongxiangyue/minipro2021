Page({
  data: {
    goods: {
      image: '/image/goods.jpg',
    },
    num: 1,                   //数量初始化为1
    totalNum: 0,             //加入购物车的商品数量初始化为0
    hasCarts: false,        //初始化默认不加入购物车
  },
  //增加数量
  addCount() {
    let num = this.data.num;
    num++;
    this.setData({
      num: num
    })
  },
  //加入购物车
  addToCart() {
    const self = this;
    const num = this.data.num;
    let total = this.data.totalNum;
    setTimeout(function () {
      self.setData({
        hasCarts: true,
        totalNum: num + total
      })
    }, 200)
  },
})
