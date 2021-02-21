Page({

data: {
mar:[{
inconPath:"location.png",
id:0,
latitude:23.088994,
longitude:113.324520,
width:50,
heigth:50

    }
    ]
  },

con:[{
id:1,
    iconPath:'location.png',
positon:{left:0,
top:50,
width:50,
height:50},
clickable:true
  }],

  mar:function(e)
  {console.log("你点了标记点")},

  con: function (e) { console.log("你点了游标") }
})