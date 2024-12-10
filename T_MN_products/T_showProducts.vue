<template>
  <div>
    <label for="cate">Danh mục sản phẩm : </label>
    <select  class="select" name="category" id="cate">
      <option>Tea</option>
      <option >Coffee</option>
      <option >Sort Drink</option>
      <option>Cooktail</option>
      <option>Milk</option>
    </select>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Mã sản phẩm</th>
          <th>Danh mục sản phẩm</th>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh sản phẩm</th>
          <th>Giá sản phẩm</th>
          <th>Số lượng</th>
          <th>Đã bán</th>
          <th>Trạng thái</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="items in allProducts" :key="items.id">
          <td>{{ items.id }}</td>
          <td>{{ items.category }}</td>
          <td>{{ items.name }}</td>
          <td><img :src="items.image" /></td>
          <td>{{ items.price }}</td>
          <td>{{ items.quantity }}</td>
          <td>{{ items.sold }}</td>
          <td>
            <button class="btn btn-danger" @click="delProducts(items.id)">
              Xóa sản phẩm
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="container-option" style="margin: 20px">
      <button class="btn btn-primary" @click="addProducts">
        Thêm sản phẩm
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    async delProducts(productId) {
      try {
        if(confirm("Bạn  có muốn xóa sản phẩm này")){
          await this.$store.dispatch("deleteProductById", productId);
          alert("Sản phẩm đã được xóa thành công")
        }else{
          alert("Xóa sản phẩm không thành công")
        }
   
        
      } catch (error) {
        console.error("Xóa sản phẩm thất bại:", error);
      }
    },
    addProducts() {
      this.$router.push("/managerProducts");
    },
  },
};
</script>

<style scoped>
/* table {
  height: fit-content;
  border-collapse: collapse;
  border: 1px solid black;
  width: 100%;
}
table tr td {
  text-align: center;
  border: 1px solid black;
  justify-content: center;
} */
img {
  overflow: hidden;
  height: 100px;
  width: auto;
}
</style>