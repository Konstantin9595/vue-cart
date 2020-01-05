<template>
  <b-container class="products">
    <div class="products__switch-mode">
      <b-row class="d-flex justify-content-end">
        <b-button
          class="btn btn-default mr-1"
          @click="$emit('switchMode', false)"
          size="sm"
          variant="outline-primary"
        >
          <font-awesome-icon icon="list" />
        </b-button>
        <b-button class="btn btn-default" size="sm" variant="outline-primary">
          <font-awesome-icon icon="th" @click="$emit('switchMode', true)" />
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
<style scoped>
.products__switch-mode {
  margin-top: 10px;
}
</style>
