<template>
  <div class="cart">
    <div class="text-center">
      <b-button v-b-modal.modal-1 variant="primary">
        <font-awesome-icon icon="shopping-cart" />
        <b-badge variant="light"
          >{{ getItemsFromCart | count }}(на {{ getItemsFromCart | total }}
          <font-awesome-icon icon="ruble-sign" />)</b-badge
        >
      </b-button>
    </div>
    <b-modal
      cancel-title="Продолжить покупки"
      ok-title="Заказать"
      id="modal-1"
      title="BootstrapVue"
    >
      <b-list-group v-if="getItemsFromCart.length">
        <CartItem :cartItems="getItemsFromCart" />
        <div>
          Итого: {{ getItemsFromCart | total }}
          <font-awesome-icon icon="ruble-sign" />
        </div>
      </b-list-group>
      <b-list-group v-else>
        <b-list-group-item>В корзине пусто!</b-list-group-item>
      </b-list-group>
    </b-modal>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";

// если два и более продукта в карзине с одим и тем же id
// то

export default {
  name: "Cart",
  components: {
    CartItem
  },
  data() {
    return {};
  },
  computed: {
    getItemsFromCart() {
      const items = this.$store.getters.getItemsFromCart;
      //const countItems = items;
      return items;
    }
  },
  filters: {
    total(items) {
      return items
        .map(el => el.price)
        .reduce((prev, current) => prev + current, 0);
    },
    count(items) {
      return items.length;
    }
  },
  mounted() {
    console.log("Cart", this.$store.state.cart);
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
.cart .badge {
  margin: 0 10px;
}
</style>
