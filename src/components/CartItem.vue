<template>
  <div class="cart-item">
    <b-list-group-item v-for="(product, id) in changedItemsStructure" :key="id">
      <div class="product-item">
        <div class="romeove-item">
          <b-button variant="danger" @click="removeItemFromCart(id)"
            ><font-awesome-icon icon="trash-alt"
          /></b-button>
        </div>
        <div class="product__item-title">
          {{ product.title }}
        </div>
        <div class="product-counter">
          <b-button variant="outline-primary">-</b-button>
          <b-badge variant="light">0</b-badge>
          <b-button variant="outline-primary">+</b-button>
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
  name: "CartItem",
  props: {
    cartItems: Array
  },
  data() {
    return {};
  },
  computed: {
    changedItemsStructure() {
      const items = this.cartItems;
      //const countItems = items;
      //console.log(this.lodash.uniq(items));

      //const uniueItems = this.lodash.uniq(items);

      return items;

      // Найти все повторяющиеся сущности(определить можно по id)
      // Сложить их по полю price и вернуть одну {id: "id", name: "name", price: "300"}
      // Добавить в результирующий уникальный массив
      // {title: "123", count: 2, price: 2200}
    }
  },
  filters: {
    // total(items) {
    //   const total = items.reduce(
    //     (acc, item) => {
    //       return { price: parseInt(acc.price) + parseInt(item.price) };
    //     },
    //     { price: 0 }
    //   );
    //   return total.price;
    // },
    // count(items) {
    //   return items.length;
    // }
  },
  mounted() {
    //console.log("Cart", this.$store.state.cart);
    // console.log("this.lodash", this.lodash);
  },
  methods: {
    removeItemFromCart(id) {
      this.$store.dispatch({
        type: "removeItemFromCart",
        id
      });
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
