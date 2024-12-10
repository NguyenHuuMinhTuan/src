<template>
  <div>
    <div class="taskbar-search">
      <input
        type="search"
        placeholder="Thanh tìm kiếm "
        v-model="name"
        @keyup.enter="search"
        style="padding: 10px;"
      />
      <button @click="search">
        <img class="icon" src="../assets/icon/ic_search.png" />
      </button>
    </div>

    <div>
      <div class="container" v-if="this.filteredProducts.length > 0">
        <T_renderProducts
          v-for="items in filteredProducts"
          :key="items.id"
          :product="items"
        />
      </div>
      <div v-else class="error">
        <p>Sản phẩm này không có trong giỏ hàng Vui lòng thử lại 😊😊😊</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import T_renderProducts from "./T_renderProducts.vue";
export default {
  data() {
    return {
      name: "",
      filteredProducts: [],
    };
  },
  components: {
    T_renderProducts,
  },
  computed: {
    ...mapGetters(["allProducts"]),
    filterProducts() {
      return this.allProducts.filter((product) => product.category === "Tea");
    },
  },
  methods: {
    search() {
      if (this.name.trim() === "") {
        this.filteredProducts = this.filterProducts;
      } else {
        this.filteredProducts = this.filterProducts.filter((product) =>
          product.name.toLowerCase().includes(this.name.toLowerCase())
        );
      }
    },
  },
  mounted() {
    this.filteredProducts = this.filterProducts;
  },
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}
.taskbar-search {
  background-color: orange;
  display: flex;
}
input {
  margin-left: 400px;
  justify-content: center;
  height: 40px;
  width: 400px;
  border-radius: 20px;
}

img {
  height: 30px;
  width: 30px;
}
.error{
  height: 100vh;
  width: 100%;
  align-content: center;
  color: red;
  font-family: 'Times New Roman', Times, serif;
  font-size: 70px;
  margin: 20px;
  font-style: normal;
}
</style>