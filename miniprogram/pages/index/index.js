const app = getApp();

Page({
  data: {
    foods: [
      // 对应你的7个在线地址，按顺序绑定菜品
      { id: 1, name: "炸洋芋", price: 18, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8upp3JnQpH4qo_SNtEtxrRgI0k99PgACCicAAp3j6FYZJKP1eXXrGTsE.png" },
      { id: 2, name: "干锅虾", price: 68, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8sNp3JfeD19rl33kRWWFLvpwkNbxWwAC3iYAAp3j6FbFIqBbzSRvTTsE.png" },
      { id: 3, name: "回锅肉", price: 48, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8tpp3JkqTKzCSkeBHrCkfX6cZkIcAAP4JgACnePoVso7vXRo7V98OwQ.png" },
      { id: 4, name: "腊肉", price: 58, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8t9p3JmDQLHbQMf3VxudK-MNcYu4zgAC_iYAAp3j6FaXjzQ7fm5I5jsE.png" },
      { id: 5, name: "千张肉", price: 78, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8uBp3JmnJmz_1rmcXIFkVCP-xwyG6QAC_yYAAp3j6FZZaYQ3UfPsEzsE.png" },
      { id: 6, name: "鬼火绿", price: 25, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8tlp3Jj7UvdjQJVP9EngrkR2ZKvczQAC9iYAAp3j6FaVXzBsyKSB7DsE.png" },
      { id: 7, name: "鸡枞汤", price: 88, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8t1p3JlcqnKE0VP31Z3WEWrJAas7AAP7JgACnePoVsyd5Z8oCG1wOwQ.png" },
    ],
    swiperFoods: [] // 轮播专用数据
  },

  onLoad() {
    // 取前4个菜品做轮播
    this.setData({
      swiperFoods: this.data.foods.slice(0, 4)
    })
  },

  // 加入购物车（首页按钮）
addToCart(e) {
  let id = e.currentTarget.dataset.id;
  let food = this.data.foods.find(item => item.id == id);

  const app = getApp();
  app.addToCart(food);   // 👈 注意这里！必须是 addToCart

  wx.showToast({
    title: '加入成功',
    icon: 'success'
  });
},
  // 跳转到菜品详情页
goToDetail(e) {
  let id = e.currentTarget.dataset.id;
  wx.navigateTo({
    url: '/pages/foodDetail/foodDetail?id=' + id,
  });
}
})