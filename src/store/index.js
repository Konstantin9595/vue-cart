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
    getProduct: state => id => state.products.find(product => product.id === id)
  },
  mutations: {
    ADD_TO_CART: (state, product) => state.cart.push(product),
    REMOVE_FROM_CART: (state, index) => state.cart.splice(index, 1),
    ADD_PRODUCTS_TO_STORE: (state, products) => {
      state.products.splice(0, state.products.length, ...products);
      console.log("Store initialized");
    }
  },
  actions: {
    async getProductsAsync({ commit }) {
      const response = await fetch(`${apiUrl}/products`);
      const products = await response.json();
      commit("ADD_PRODUCTS_TO_STORE", products);
    }
  },
  modules: {}
});
