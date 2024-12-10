<template>
  <div>
    <div class="container" v-if="this.cart.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Hình ảnh sản phẩm</th>
            <th>Giá sản phảm</th>
            <th>Số lượng</th>
            <th>Tổng tiền</th>
            <th>Trạng thái</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in allCarts" :key="items.id">
            <td>{{ items.id }}</td>
            <td>{{ items.name }}</td>
            <td><img :src="items.image" alt="Hình ảnh minh họa" /></td>
            <td>{{ items.price }}</td>
            <td>
              <button class="btn btn-danger" @click="decrement(items)">
                -
              </button>
              {{ items.quantity }}
              <button class="btn btn-success" @click="inrement(items)">
                +
              </button>
            </td>
            <td>{{ totalPrice(items) }},000 VNĐ</td>
            <td>
              <button class="btn btn-danger" @click="Del_cart(items)">
                Xóa sản phẩm
              </button>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>Tổng tiền</th>
            <td>{{ SumPrice }},000 VNĐ</td>

            <th></th>
            <th></th>
            <th></th>
            <th>Đặt hàng :</th>
            <td><button class="btn btn-warning" @click="changeBill">Đặt hàng ngay</button></td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class="container-error" v-else>
      <h1>Giỏ hàng rỗng ! Vui lòng thêm sản phẩm 💢</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import "bootstrap";

export default {
  data() {
    return {
      cart: [],
      products: [],
    };
  },

  computed: {
    ...mapGetters(["allCarts"]),
    ...mapGetters(["allProducts"]),
    SumPrice() {
      return this.allCarts.reduce((total, x) => {
        const quantity = parseInt(x.quantity, 10) || 0;
        const price = parseFloat(x.price) || 0;
        return total + quantity * price;
      }, 0);
    },
  },
  methods: {
    changeBill(){
      this.$router.push('/Bills')
    },
    async Del_cart(items) {
      try {
        if (confirm(" Bạn có muốn xóa sản phẩm này ra khỏi giỏ hàng không")) {
          this.$store.dispatch("delCartByID", items.id);
        } else {
          alert("Đã hủy");
        }
      } catch (error) {
        console.error(error);
      }
    },
    totalPrice(items) {
      const price = parseFloat(items.price) || 0;
      const quantity = parseInt(items.quantity, 10) || 0;
      return price * quantity;
    },
    inrement(items) {
      const findItems = this.products.find((x) => x.name === items.name);
      if (findItems) {
        if (findItems.quantity > items.quantity) {
          items.quantity++;
        } else {
          alert("Số lượng trong kho không đủ");
        }
      } else {
        alert("Sản phảm này ko tồn tại");
      }
    },
    decrement(items) {
      if (items.quantity > 0) {
        items.quantity--;
      } else {
        return;
      }
    },
  },

  mounted() {
    this.$store.dispatch("fetchCarts");
    this.cart = this.allCarts;
    this.products = this.allProducts;
  },
};
</script>

<style scoped>
.container-error {
  height: 100vh;
  width: 100%;
  text-align: center;
}
img {
  max-height: 100px;
  width: auto;
}
td {
  align-content: center;
  justify-content: center;
}
</style>