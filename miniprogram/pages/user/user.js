Page({
  data: {
    userInfo: {},   // 存放用户信息
    isLogin: false  // 登录状态
  },

  onShow() {
    this.getUserInfo()
  },

  // ======================================
  // 【1】从本地缓存读取用户信息（刷新页面用）
  // ======================================
  getUserInfo() {
    let user = wx.getStorageSync('userInfo') || {}
    let isLogin = !!user.nickName

    this.setData({
      userInfo: user,
      isLogin: isLogin
    })

    // 在这里可以看到获取到的信息
    console.log("当前用户信息：", user)
  },

  // ======================================
  // 【2】点击头像 → 微信授权登录 → 获取信息
  // ======================================
  toLogin() {
    wx.getUserProfile({
      desc: "登录",
      success: (res) => {
        console.log("微信返回的用户信息：", res.userInfo)

        // ======================================
        // ✅ 这里就是你要的【用户信息】！
        // ======================================
        let userInfo = res.userInfo

        // 保存到本地
        wx.setStorageSync('userInfo', userInfo)

        // 更新页面显示
        this.setData({
          userInfo: userInfo,
          isLogin: true
        })

        wx.showToast({ title: '登录成功' })
      }
    })
  },

  // 退出登录
  logout() {
    wx.clearStorageSync()
    this.setData({
      userInfo: {},
      isLogin: false
    })
    wx.showToast({ title: '已退出' })
  },

  goToOrders() {
    wx.switchTab({ url: '/pages/order/order' })
  }
})