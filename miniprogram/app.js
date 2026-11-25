App({
  globalData: {
    cartList: [],
    orderList: []
  },

  addToCart(food) {
    let list = this.globalData.cartList;
    let idx = list.findIndex(i => i.id === food.id);
    if (idx > -1) {
      list[idx].count++;
    } else {
      list.push({ ...food, count: 1 });
    }
    this.globalData.cartList = list;
  },

  getCart() {
    return this.globalData.cartList;
  },

  clearCart() {
    this.globalData.cartList = [];
  },

  submitOrder(order) {
    this.globalData.orderList.unshift(order);
    console.log("订单已保存：", order);
  },

  getOrders() {
    return this.globalData.orderList;
  }
})