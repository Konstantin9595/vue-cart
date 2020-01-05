<template>
  <div class="cart-items">
    <b-list-group-item v-for="(product, index) in cartItems" :key="index">
      <div class="product-item">
        <div class="product__item-title">
          {{ product.title }}
        </div>

        <ProductCounter :productId="product.id" :productCount="product.count" />

        <div class="product__item-price">
          {{ product.price }} <font-awesome-icon icon="ruble-sign" />
        </div>
      </div>
    </b-list-group-item>
  </div>
</template>

<script>
import ProductCounter from "./ProductCounter.vue";

export default {
  name: "CartItems",
  components: {
    ProductCounter
  },
  props: {
    cartItems: Array
  },
  data() {
    return {};
  },
  computed: {},
  filters: {},
  mounted() {}
  // methods: {
  //   removeItemFromCart(id) {
  //     this.$store.dispatch({
  //       type: "removeItemFromCart",
  //       id
  //     });
  //   },
  //   addItemToCart(id) {
  //     this.$store.dispatch({ type: "addToCartAsync", id });
  //   }
  // }
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
