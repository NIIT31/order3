const app = getApp();

Page({
  data: {
    cartList: [],
    totalPrice: 0
  },

  onShow() {
    this.refresh();
  },

  refresh() {
    let list = app.getCart();
    let total = 0;
    list.forEach(i => total += i.price * i.count);
    this.setData({ cartList: list, totalPrice: total });
  },

  addCount(e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.cartList;
    let idx = list.findIndex(i => i.id === id);
    list[idx].count++;
    this.setData({ cartList: list });
    this.refresh();
  },

  reduceCount(e) {
    let id = e.currentTarget.dataset.id;
    let list = this.data.cartList;
    let idx = list.findIndex(i => i.id === id);
    if (list[idx].count > 1) {
      list[idx].count--;
    } else {
      list.splice(idx, 1);
    }
    this.setData({ cartList: list });
    this.refresh();
  },

  clearCart() {
    app.clearCart();
    this.setData({ cartList: [], totalPrice: 0 });
  },

  // ✅ 结算（保存订单）
  checkout() {
    if (this.data.cartList.length === 0) {
      wx.showToast({ title: '购物车为空', icon: 'none' });
      return;
    }

    wx.navigateTo({
      url: '/pages/pay/pay?totalPrice=' + this.data.totalPrice
    })
  }
})