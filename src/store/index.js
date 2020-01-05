import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const apiUrl =
  "http://my-json-server.typicode.com/Konstantin9595/fake-json-data";

export default new Vuex.Store({
  state: {
    products: [],
    cart: [],
    auth: [],
    user: []
  },
  getters: {
    getProducts: state => state.products,
    getProduct: state => id =>
      state.products.find(product => product.id === id),
    getItemsFromCart: state => state.cart
  },
  mutations: {
    ADD_TO_CART: (state, product) => {
      const issetIndex = state.cart.findIndex(el => el.id === product.id);
      let newProduct = null;
      if (issetIndex !== -1) {
        const foundProduct = state.cart.find(el => el.id === product.id);
        const count = foundProduct.count ? foundProduct.count + 1 : 2;
        newProduct = {
          id: foundProduct.id,
          title: foundProduct.title,
          price: foundProduct.price + product.price,
          count,
          singlePrice: product.price
        };
      } else {
        newProduct = product;
      }
      issetIndex !== -1
        ? state.cart.splice(issetIndex, 1, newProduct)
        : state.cart.push(newProduct);

      localStorage.setItem("userCartItemsStorage", JSON.stringify(state.cart));
    },
    ADD_PRODUCTS_TO_STORE: (state, products) => {
      const modifiedProducts = products.map(
        ({ id, title, img, text, price }) => {
          return { id, title, img, text, price, count: 1 };
        }
      );
      state.products.splice(0, state.products.length, ...modifiedProducts);
      console.log("Store initialized");
    },
    REMOVE_ITEM_FROM_CART: (state, id) => {
      const issetIndex = state.cart.findIndex(el => el.id === id);
      let newProduct = null;
      if (issetIndex !== -1) {
        const foundProduct = state.cart.find(el => el.id === id);
        const price = foundProduct.price - foundProduct.singlePrice;
        const count = foundProduct.count - 1;
        newProduct = {
          id: foundProduct.id,
          title: foundProduct.title,
          price,
          count
        };

        count > 0
          ? state.cart.splice(issetIndex, 1, newProduct)
          : state.cart.splice(issetIndex, 1);

        localStorage.setItem(
          "userCartItemsStorage",
          JSON.stringify(state.cart)
        );
      }
    },
    CART_FROM_STORAGE_INIT: (state, storageState) => {
      state.cart.push(...storageState);
    },
    CART_DEFAULT_INIT: () => {
      localStorage.removeItem("userCartItemsStorage");
    }
  },
  actions: {
    async getProductsAsync({ commit }) {
      const response = await fetch(`${apiUrl}/products`);
      const products = await response.json();
      commit("ADD_PRODUCTS_TO_STORE", products);
    },
    async addToCartAsync({ state, commit }, { id }) {
      const product = state.products.find(el => el.id === id);
      commit("ADD_TO_CART", product);
    },
    async removeItemFromCart({ commit }, { id }) {
      commit("REMOVE_ITEM_FROM_CART", id);
    },
    async cartInit({ commit }) {
      if (localStorage.getItem("userCartItemsStorage")) {
        commit(
          "CART_FROM_STORAGE_INIT",
          JSON.parse(localStorage.getItem("userCartItemsStorage"))
        );
      } else {
        commit("CART_DEFAULT_INIT");
      }
    }
  },
  modules: {}
});
