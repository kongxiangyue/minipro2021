Page({
  data: {
    latitude: 23.020670,
    longitude: 113.751790,
    markers: [{
      latitude: 23.020670,
      longitude: 113.751790,
      iconPath: "/images/location.png",
      label: {
        content: "东莞市"
      }
    }],
  },
  onReady: function(e) {
    this.mapCtx = wx.createMapContext("myMap")
  },
  getCenterLocation: function() { //获取位置
    this.mapCtx.getCenterLocation({
      success: function(res) {
        console.log(res.longitude)
        console.log(res.latitude)
      }
    })
  },
  moveToLocation: function() { //移动位置
    this.mapCtx.moveToLocation()
  },
  includePoints: function() { //缩放视野
    this.mapCtx.includePoints({
      padding: [10],
      points: [{
        latitude: 23.10229,
        longitude: 113.3345211,
      }, {
        latitude: 23.00229,
        longitude: 113.3345211,
      }]
    })
  }
})