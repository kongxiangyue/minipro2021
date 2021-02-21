Page({
  data: {
    currentTab: 0, //初始化数据
    list1: ["手机数码", "家用电器", "运动户外", "优选水果", "食品生鲜", "运动户外", "电脑办公", "体育用品", "美妆护肤", "生活用品"],
    list2: ["切换到手机数码", "切换到家用电器", "切换到运动户外", "切换到优选水果", "切换到食品生鲜", "切换到运动户外", "切换到电脑办公", "切换到体育用品", "切换到美妆护肤", "切换到生活用品"],
  },
  switchTab: function (e) {
    var that = this;
    var id = e.target.id; //获取id
    if (this.data.currentTab == id) {
      return  //与currentTab值一致返回
    } else {
      that.setData({
        currentTab: id  //设置currentTab值为id
      });
    }
  }
})