<template>
  <div class="container-products">
    <T_renderProducts
      v-for="items in filterProduct"
      :key="items.id"
      :product="items"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import T_renderProducts from "./T_renderProducts.vue";
export default {
  components: {
    T_renderProducts,
  },
  computed: {
    ...mapGetters(["allProducts"]),
    filterProduct() {
      return this.allProducts.filter(
        (products) => products.category === "Coffee"
      );
    },
  },
};
</script>

<style scoped>
.container-products{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
</style>