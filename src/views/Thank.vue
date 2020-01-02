<template>
  <div class="thanks">
    <div class="header">
      <Header />
    </div>
    Спасибо!
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
// import Products from "@/components/Products.vue";

export default {
  name: "thanks",
  components: {
    Header
  }
};
</script>
