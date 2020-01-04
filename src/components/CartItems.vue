<template>
  <div class="cart-items">
    <b-list-group-item
      v-for="(product, index) in changeStateStructure"
      :key="index"
    >
      <div class="product-item">
        <div class="product__item-title">
          {{ product.title }}
        </div>
        <div class="product-counter">
          <b-button
            variant="outline-primary"
            @click="removeItemFromCart(product.id)"
            >-</b-button
          >
          <b-badge variant="light">{{ product.count }}</b-badge>
          <b-button variant="outline-primary" @click="addItemToCart(product.id)"
            >+</b-button
          >
        </div>
        <div class="product__item-price">
          {{ product.price }} <font-awesome-icon icon="ruble-sign" />
        </div>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
// import SwitchProductMode from "./SwitchProductMode.vue";

export default {
  name: "CartItems",
  props: {
    cartItems: Array
  },
  data() {
    return {};
  },
  computed: {
    changeStateStructure() {
      const data = this.cartItems;
      const ids = [];
      let output = [];

      for (let index in data) {
        // Текущий продукт
        const obj = data[index];
        // Если такого продукта еще не существует, то добавляем его в результируюший массив
        if (!ids.includes(obj.id)) {
          output.push({
            id: obj.id,
            title: obj.title,
            price: obj.price,
            count: 1
          });
          // Добавляем инфо о том что подукт с таким id уже есть в карзине
          ids.push(obj.id);
        } else {
          const curNdx = output.findIndex(item => item.id === obj.id);
          const curPrice = output.find(item => item.id === obj.id).price;
          const curCount = output.find(item => item.id === obj.id).count;
          const filtered = output.filter(item => item.id !== obj.id);

          output = [...filtered];

          output.splice(curNdx, 0, {
            id: obj.id,
            title: obj.title,
            price: obj.price + curPrice,
            count: curCount + 1
          });
        }
      }
      return output;
    }
  },
  filters: {},
  mounted() {},
  methods: {
    removeItemFromCart(id) {
      this.$store.dispatch({
        type: "removeItemFromCart",
        id
      });
    },
    addItemToCart(id) {
      this.$store.dispatch({ type: "addToCartAsync", id });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* .cart-item {
} */

.product-item {
  display: flex;
  justify-content: space-between;
}
</style>
