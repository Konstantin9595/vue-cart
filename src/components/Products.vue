<template>
  <b-container class="products">
    <div class="products__switch-mode">
      <SwitchProductMode v-on:switchMode="switchMode" />
    </div>
    <div class="products-content">
      <b-row v-if="firstMode" class="first-mode">
        <b-col lg="4" v-for="product in products" :key="product.id">
          <h2>{{ product.title }}</h2>
        </b-col>
      </b-row>
      <b-row v-else class="second-mode">
        <b-col lg="12" v-for="product in products" :key="product.id">
          <h2>{{ product.title }}</h2>
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
      products: [
        {
          id: 1,
          title: "product1 TEST",
          img: "img1.png",
          text: "lorem ipsum 1 TEST"
        },
        {
          id: 2,
          title: "product2 TEST",
          img: "img1.png",
          text: "lorem ipsum 2 TEST"
        },
        {
          id: 3,
          title: "product3 TEST",
          img: "img1.png",
          text: "lorem ipsum 3 TEST"
        }
      ]
    };
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
