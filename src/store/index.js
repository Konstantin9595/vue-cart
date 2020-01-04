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
      state.cart.push(product);
      localStorage.setItem("userCartItemsStorage", JSON.stringify(state.cart));
    },
    ADD_PRODUCTS_TO_STORE: (state, products) => {
      state.products.splice(0, state.products.length, ...products);
      console.log("Store initialized");
    },
    REMOVE_ITEM_FROM_CART: (state, id) => {
      const currIndex = state.cart.findIndex(item => item.id === id);
      state.cart.splice(currIndex, 1);
      localStorage.setItem("userCartItemsStorage", JSON.stringify(state.cart));
    },
    CART_FROM_STORAGE_INIT: (state, storageState) => {
      state.cart.push(...storageState);
    },
    CART_DEFAULT_INIT: () => {}
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
