<template>
  <T_Header />
  <T_Footer />
</template>

<script>
import T_Header from "./components/T_Header.vue";
import T_Footer from "./components/T_Footer.vue";
export default {
  name: "App",
  components: {
    T_Header,
    T_Footer,
  },
};
</script>

<style scoped>
</style>
