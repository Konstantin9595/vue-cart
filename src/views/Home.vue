<template>
  <div class="home">
    <Header />
    <Products />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Products from "@/components/Products.vue";

export default {
  name: "home",
  components: {
    Header,
    Products
  }
};
</script>
