const app = getApp();

Page({
  data: {
    orderList: [] // 必须初始化空数组，不能用 orders
  },

  onShow() {
    // 从全局获取订单列表
    const list = app.getOrders();
    console.log("读取到的订单：", list);
    
    // 给 data 赋值，字段名必须是 orderList（和wxml对应）
    this.setData({
      orderList: list
    });
  }
})