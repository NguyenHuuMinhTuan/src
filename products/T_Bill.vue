<template>
  <div class="container-bill">
    <div class="form-container">
      <label for="username">Username : </label>
      <input
        type="text"
        class="form-control"
        readonly
        v-model="username"
        id="username"
      />
      <label for="email">Email : </label>
      <input
        type="text"
        class="form-control"
        readonly
        v-model="email"
        id="email"
      />
      <label for="phone">Số điện thoại :</label>
      <input type="number" class="form-control" id="phone" />
      <h2>Địa chỉ </h2>
      <label for="city">Thành phố / Tỉnh : </label>
      <input
        type="text"
        class="form-control"
        id="city"
        placeholder="Thành phố / Tỉnh"
      />
      <label for="district">Quận / Huyện : </label>
      <input
        type="text"
        class="form-control"
        id="district"
        placeholder="Quận / Huyện"
      />
  <label for="street">Tên đường / Thôn</label>
      <input
        type="text"
        class="form-control"
        id="street"
        placeholder="Tên đường / Thôn"
      />
      <label for="specific_address">Địa chỉ cụ thể</label>
      <input
        type="text"
        class="form-control"
        id="specific_address"
        placeholder="Địa chỉ cụ thể ( số nhà )"
      />
    </div>
    <div class="table-container">
      <table class="table table-warning table-striped table-bordered">
        <thead>
          <tr>
            <th>Mã sản phẩm</th>
            <th>Tên sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Thành tiền</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="items in allCarts" :key="items.id">
            <td>{{ items.id }}</td>
            <td>{{ items.name }}</td>
            <td>{{ items.price }} VNĐ</td>
            <td>{{ items.quantity }}</td>
            <td>{{ totalPrice(items) }},000 VNĐ</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
          
            <th>Phương thức thanh toán</th>
            <td>
              <select class="form-select">
                <option>Thanh toán khi nhận hàng (COD)</option>
                <option>Thanh toán ngân hàng</option>
                <option>Thanh toán Momo</option>
                <option>Thanh toán Zalo pay</option>
                <option>Khác</option>
              </select>
            </td>
            <th></th>
            <th>Thanh toán</th>
            <td>
              <button class="btn btn-warning" @click="confirmPayment">
                Thanh toán
              </button>
            </td>
          </tr>
        </tfoot>
        <tfoot>
          <tr>
            
            <th>Nhập mã giảm giá</th>
            <td>
              <input
                class="form-control"
                type="text"
                name="voucher"
                id="voucher"
                placeholder="Nhập mã giảm giá (nếu có )"
              />
            </td>
            <td>{{ message }}</td>
            <th>Tổng tiền</th>
            <td>{{ totalPriceAll }},000 VNĐ</td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script>
import "bootstrap";
import Swal from "sweetalert2";
import { mapGetters } from "vuex";
export default {
  data() {
    const user = JSON.parse(localStorage.getItem("CurrentUser"));
    return {
      username: user.username,
      email: user.email,
      message: "",
      cart: [],
    };
  },
  computed: {
    ...mapGetters(["allCarts"]),
    totalPriceAll() {
      return this.allCarts.reduce((total, x) => {
        const price = parseFloat(x.price) || 0;
        const quantity = parseInt(x.quantity, 10) || 0;
        return total + quantity * price;
      }, 0);
    },
  },
  methods: {
    totalPrice(items) {
      const quantity = parseInt(items.quantity, 10) || 0;
      const price = parseFloat(items.price) || 0;
      return quantity * price;
    },
    confirmPayment() {
      Swal.fire({
        icon: "warning",
        title: "Xác nhận thanh toán",
        text: "Bạn có muốn thanh toán hóa đơn này không ?",
        showCancelButton: true, // Hiển thị nút Cancel
        confirmButtonText: "Xác nhận",
        cancelButtonText: "Hủy bỏ",
      }).then((result) => {
        if (result.isConfirmed) {
         
          Swal.fire(
            "Đã xác nhận!",
            "Hành động của bạn đã được thực hiện.",
            "success",
            2000,
            
          );
          // Thực hiện hành động ở đây, ví dụ như thanh toán
        } else {
          // Nếu người dùng nhấn "Hủy bỏ"
          Swal.fire("Đã hủy!", "Hành động của bạn đã bị hủy.", "error");
        }
      });
    },
  },
};
</script>

<style>
.container-bill{
    display: flex;
}
.form-container {
  flex: 1;  /* Phần form sẽ chiếm 1/3 */
  margin-right: 20px; /* Thêm khoảng cách giữa form và bảng */
}

.table-container {
  flex: 2;  /* Phần bảng sẽ chiếm 2/3 */
  overflow-x: auto; /* Đảm bảo bảng có thể cuộn nếu quá rộng */
}
</style>