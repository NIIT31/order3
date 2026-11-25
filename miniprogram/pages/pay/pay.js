const app = getApp();

Page({
  data: {
    totalPrice: 0,
    cartList: []
  },

  onLoad(options) {
    this.setData({
      totalPrice: options.totalPrice,
      cartList: app.getCart()
    })
  },

  toPay() {
    let that = this;
    wx.showLoading({ title: '支付中...' })

    setTimeout(() => {
      // 生成订单
      let order = {
        orderId: Date.now(),
        foods: this.data.cartList,
        totalPrice: this.data.totalPrice,
        time: new Date().toLocaleString()
      }

      // 保存订单
      app.submitOrder(order);
      app.clearCart();

      wx.hideLoading();
      wx.showToast({ title: '支付成功' });

      // ✅ 这里修复：强制跳转到历史订单页面
      setTimeout(() => {
        wx.switchTab({
          url: "/pages/order/order"
        })
      }, 1500);

    }, 1500);
  }
});