Page({
  data: {
    animationData: {}
  },

  onLoad() {
    // 3 秒后开始动画 + 跳转
    setTimeout(() => {
      // 做淡出动画
      const animation = wx.createAnimation({
        duration: 400,
        timingFunction: 'ease-out'
      })
      animation.opacity(0).scale(0.9).step()

      this.setData({
        animationData: animation.export()
      })

      // 动画结束后跳首页
      setTimeout(() => {
        wx.switchTab({
          url: '/pages/index/index'
        })
      }, 400)

    }, 3000) // 3秒展示启动页
  }
})