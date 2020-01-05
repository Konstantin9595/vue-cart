<template>
  <div class="cart-items">
    <div class="product-item">
      <div class="product-counter">
        <b-button
          variant="outline-primary"
          @click="removeItemFromCart(productId)"
          >-</b-button
        >
        <b-badge variant="light">{{ productCount }}</b-badge>
        <b-button variant="outline-primary" @click="addItemToCart(productId)"
          >+</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
// import SwitchProductMode from "./SwitchProductMode.vue";

export default {
  name: "ProductCounter",
  props: {
    productCount: Number,
    productId: Number
  },
  data() {
    return {};
  },
  computed: {},
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
