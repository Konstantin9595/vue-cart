<template>
  <div class="cart">
    <div class="text-center">
      <b-button v-b-modal.modal-1 variant="primary">
        <font-awesome-icon icon="shopping-cart" />
        <b-badge variant="light"
          >{{ getItemsFromCart | count }}(на
          {{ getItemsFromCart | total }}
          <font-awesome-icon icon="ruble-sign" />)</b-badge
        >
      </b-button>
    </div>
    <b-modal
      cancel-title="Продолжить покупки"
      ok-title="Заказать"
      id="modal-1"
      title="BootstrapVue"
      @ok="handleOk"
      :ok-disabled="getItemsFromCart.length ? false : true"
    >
      <b-list-group v-if="getItemsFromCart.length">
        <CartItems :cartItems="getItemsFromCart" />
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
import CartItems from "./CartItems.vue";

export default {
  name: "Cart",
  components: {
    CartItems
  },
  data() {
    return {
      userCartItems: [],
      checkout: true
    };
  },
  computed: {
    getItemsFromCart() {
      // возвращает текущий state корзины
      const items = this.$store.getters.getItemsFromCart;
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
    this.$store.dispatch("cartInit");
  },
  methods: {
    handleOk() {
      this.$router.push("/checkout");
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
