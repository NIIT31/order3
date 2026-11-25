const app = getApp();

Page({
  data: {
    food: {},
    // 你的真实菜品 + 真实图片链接
    recommendList: [
      { id: 1, name: "炸洋芋", price: 18, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8upp3JnQpH4qo_SNtEtxrRgI0k99PgACCicAAp3j6FYZJKP1eXXrGTsE.png" },
      { id: 2, name: "干锅虾", price: 68, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8sNp3JfeD19rl33kRWWFLvpwkNbxWwAC3iYAAp3j6FbFIqBbzSRvTTsE.png" },
      { id: 3, name: "回锅肉", price: 48, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8tpp3JkqTKzCSkeBHrCkfX6cZkIcAAP4JgACnePoVso7vXRo7V98OwQ.png" },
      { id: 4, name: "腊肉", price: 58, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8t9p3JmDQLHbQMf3VxudK-MNcYu4zgAC_iYAAp3j6FaXjzQ7fm5I5jsE.png" },
      { id: 5, name: "千张肉", price: 78, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8uBp3JmnJmz_1rmcXIFkVCP-xwyG6QAC_yYAAp3j6FZZaYQ3UfPsEzsE.png" },
      { id: 6, name: "鬼火绿", price: 25, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8tlp3Jj7UvdjQJVP9EngrkR2ZKvczQAC9iYAAp3j6FaVXzBsyKSB7DsE.png" },
      { id: 7, name: "鸡枞汤", price: 88, img: "https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAES8t1p3JlcqnKE0VP31Z3WEWrJAas7AAP7JgACnePoVsyd5Z8oCG1wOwQ.png" }
    ]
  },

  onLoad(options) {
    let id = options.id;
    let foods = this.data.recommendList;
    let currentFood = foods.find(item => item.id == id);
    this.setData({ food: currentFood });
  },

  addCart() {
    let food = this.data.food;
    app.addToCart(food);
    wx.showToast({ title: '加入成功', icon: 'success' });
  },

  goToDetail(e) {
    let id = e.currentTarget.dataset.id;
    wx.navigateTo({
      url: '/pages/foodDetail/foodDetail?id=' + id
    });
  }
});