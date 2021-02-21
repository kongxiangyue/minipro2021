Page({
  data: {

    title: "",
    content:"",
    newsid: "",
    img: "",
    cTime: "",
    items: [
      { name: '0', value: '推荐' },{ name: '1', value: '科技', checked: 'true' },
      { name: '2', value: '财经' },{ name: '3', value: '汽车' },
      { name: '4', value: '时尚' },{ name: '5', value: '图片' },
      { name: '6', value: '游戏' }, { name: '7', value: '房产' },
      { name: '8', value: '教育' }, { name: '9', value: '体育' },
    ]

  },

  title:function(e){
  console.log(e.detail.value)
  this.setData({
    title: e.detail.value //待插入的文章title字段
  })
  },

  content: function (e) {
    console.log(e.detail.value)
    this.setData({
      content: e.detail.value //待插入的文章title字段
    })
  },

  radioChange: function (e) {
    console.log(e.detail.value)
    this.setData({
      newsid: e.detail.value  //待插入的文章newsid字段
    })
  },

  picfunction:function() {
    var that=this
    // 选择图片
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        wx.showLoading({
          title: '上传中',
        })
        const filePath = res.tempFilePaths[0]
        var timestamp = (new Date()).valueOf();
        wx.cloud.uploadFile({
          cloudPath: "img/" + timestamp + ".jpg", // 上传至云端的路径
          filePath: filePath, // 小程序临时文件路径
          success: res => {
            console.log('[上传文件] 成功：', res)
            that.setData({
              img:res.fileID  //待插入的文章img字段
            })
          },
          fail: e => {
            console.error('[上传文件] 失败：', e)
            wx.showToast({
              icon: 'none',
              title: '上传失败',
            })
          },
          complete: () => {
            wx.hideLoading()
          }
        })
      },
      fail: e => {
        console.error(e)
      }
    })
  },
  submit:function(e){
    var that = this
    var newDate = new Date();
    that.setData({
      cTime: newDate.getFullYear() + "-" + newDate.getMonth() + "-" + newDate.getDay()
    })

    
    const db = wx.cloud.database()
    db.collection('ch12').add({   //插入新闻信息
      data: {
        title: that.data.title,
        content: that.data.content,
        newsid: that.data.newsid,
        img: that.data.img,
        cTime: that.data.cTime
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log("插入成功"+res)
      },
      fail: console.error
    })
  }

 
 
})
