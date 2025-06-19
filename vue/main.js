const exampleGoods = [
  {
    "id_product": 123,
    "product_name": "Ноутбук",
    "price": 45600
  },
  {
    "id_product": 456,
    "product_name": "Мышка",
    "price": 1000
  },
  {
    "id_product": 789,
    "product_name": "Клавиатура",
    "price": 2500
  }
];

const app = new Vue({
  el: '#app', 
  data: {
    goods: [], // Все товары
    filteredGoods: [], // Отфильтрованные товары для отображения
    searchLine: '', // Текст из поля поиска
    cart: [] // Товары в корзине
  },
  methods: {
    // Метод загрузки товаров (здесь используем локальный массив exampleGoods вместо запроса)
    fetchGoods: function () {
      this.goods = exampleGoods;
      this.filteredGoods = exampleGoods;
    },

    // Метод фильтрации товаров по значению из поля поиска
    filterGoods: function () {
      // Создаём регулярное выражение без учёта регистра
      let regexp = new RegExp(this.searchLine, 'i');

      // Фильтруем исходный массив товаров
      this.filteredGoods = this.goods.filter(function (good) {
        return regexp.test(good.product_name);
      });
    },

    // Добавление товара в корзину
    addToCart: function (good) {
      this.cart.push(good);
    },

    // Удаление товара из корзины по индексу
    removeFromCart: function (index) {
      this.cart.splice(index, 1);
    }
  },

  // Вычисляемое свойство для подсчёта общей суммы корзины
  computed: {
    totalPrice: function () {
      return this.cart.reduce(function (sum, item) {
        return sum + item.price;
      }, 0);
    }
  },

  mounted: function () {
    this.fetchGoods(); 
  }
});
