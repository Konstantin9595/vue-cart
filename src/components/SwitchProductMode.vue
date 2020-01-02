<template>
  <b-container class="products">
    <div class="products__switch-mode">
      <b-row class="d-flex justify-content-end">
        <b-button
          class="btn btn-default"
          v-on:click="$emit('switchMode', false)"
        >
          <font-awesome-icon icon="list" />
        </b-button>
        <b-button class="btn btn-default">
          <font-awesome-icon icon="th" v-on:click="$emit('switchMode', true)" />
        </b-button>
      </b-row>
    </div>
  </b-container>
</template>

<script>
export default {
  name: "SwitchProductMode"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
