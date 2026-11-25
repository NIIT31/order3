const app = getApp();

Page({
  data: {
    orders: []
  },

  onShow() {
    // 每次进入页面，重新获取最新订单列表
    this.setData({
      orders: app.globalData.orders
    });
  }
})