<template>
  <div class="home">
    <marquee direction="right"> Dây là thẻ home </marquee>
  </div>
  
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "T_Home",
  computed: {
    ...mapGetters(["allProducts"]), // Lấy getter để sử dụng trong template
  },
  methods: {
    fetchData() {
      this.$store.dispatch("fetchProducts"); // Gọi hành động để fetch data
    },
  },
  mounted() {
    this.fetchData(); // Fetch data khi component được mount
  },
};
</script>

<style>
.home {
  padding: 100px;
}
</style>