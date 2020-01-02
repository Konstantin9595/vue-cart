<template>
  <b-container class="products">
    <div class="products__switch-mode">
      <SwitchProductMode @switchMode="switchMode" />
    </div>
    <div class="products-content">
      <b-row v-if="firstMode" class="first-mode">
        <b-col lg="4" v-for="product in products" :key="product.id">
          <b-card
            :title="product.title"
            img-src="https://picsum.photos/600/300/?image=25"
            :img-alt="product.title"
            body-class="product-card"
          >
            <b-card-text>
              {{ product.text }}
            </b-card-text>

            <b-button href="#" variant="primary">Подробнее</b-button>
          </b-card>
        </b-col>
      </b-row>
      <b-row v-else class="second-mode">
        <b-col lg="12" v-for="product in products" :key="product.id">
          <b-card
            :title="product.title"
            img-src="https://picsum.photos/600/300/?image=25"
            :img-alt="product.title"
            body-class="product-card"
            img-height="200px"
          >
            <b-card-text>
              {{ product.text }}
            </b-card-text>

            <b-button href="#" variant="primary">Подробнее</b-button>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </b-container>
</template>

<script>
import SwitchProductMode from "./SwitchProductMode.vue";

export default {
  name: "Products",
  components: {
    SwitchProductMode
  },
  data() {
    return {
      firstMode: true,
      products: null
    };
  },
  mounted() {
    this.$store.dispatch("getProductsAsync");
    this.products = this.$store.getters.getProducts;
    console.log("MOUNTED", this.products);
  },
  methods: {
    switchMode(switched) {
      this.firstMode = switched;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
