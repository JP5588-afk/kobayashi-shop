// products.js
const products = [
  {
    id: 1,
    name: "玫瑰花茶",
    price: 50,
    category: "daily",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "北海道牛奶糖",
    price: 110,
    category: "snacks",
    image: "https://images.unsplash.com/photo-1572569511254-d8f62f7d6b25?auto=format&fit=crop&w=300&q=80"
  }
];

// 寫入 localStorage，讓你的頁面能抓資料
localStorage.setItem("products", JSON.stringify(products));
