
const AUTH_MODE = 'fingerPrint'
Page({
  startAuth() {
    wx.checkIsSupportSoterAuthentication({
      success: (res) => {
        console.log(res)
        checkIsEnrolled()
      },
      fail: (err) => {
        console.error(err)
        wx.showModal({
          title: '错误',
          content: '您的设备不支持指纹识别',
          showCancel: false
        })
      }
    })

    const checkIsEnrolled = () => {
      wx.checkIsSoterEnrolledInDevice({
        checkAuthMode: AUTH_MODE,
        success: (res) => {
          console.log(res)
          if (parseInt(res.isEnrolled) <= 0) {
            wx.showModal({
              title: '错误',
              content: '您暂未录入指纹信息，请录入后重试',
              showCancel: false
            })
            return
          }
          startSoterAuthentication();
        },
        fail: (err) => {
          console.error(err)
        }
      })
    }

    const startSoterAuthentication = () => {
      wx.startSoterAuthentication({
        requestAuthModes: [AUTH_MODE],
        challenge: 'test',
        authContent: '指纹认证示例',
        success: (res) => {
          console.log(res)
          wx.showToast({
            title: '认证成功',
            duration: 10000
          })
        },
        fail: (err) => {
          console.error(err)
          wx.showModal({
            title: '失败',
            content: '认证失败',
            showCancel: false
          })
        }
      })
    }
  }
})


