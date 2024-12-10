<template>
  <div class="container-fluid bg-white">
    <div class="row">
      <div class="container-form">
        <div class="container-input">
          <form @submit.prevent style="margin-left: 50px">
            <div class="col-lg-4">
              <div class="lb-name">
                <label class="form-label" for="id"> Mã sản phẩm :</label>
                <input
                  class="form-control"
                  type="text"
                  id="id"
                  placeholder="Mã sản phẩm"
                  required
                  v-model="id"
                />
              </div>
              <div class="lb-name">
                <label for="name" class="form-label">Tên sản phẩm</label>
                <input
                  class="form-control"
                  type="text"
                  id="name"
                  placeholder="Tên sản phẩm"
                  required
                  v-model="name"
                />
              </div>
              <div class="lb-name">
                <label for="price" class="form-label">Giá sản phẩm</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Giá sản phẩm"
                  id="price"
                  required
                  v-model="price"
                  @input="formatPrice"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <div class="lb-name">
                <p>Số lượng sản phẩm :</p>
                <input
                  type="number"
                  placeholder="Số lượng sản phẩm"
                  required
                  v-model="quantity"
                />
              </div>
              <div class="lb-name">
                <p>Hình ảnh sản phẩm :</p>
                <input
                  class="form-control"
                  type="file"
                  placeholder="Thêm hình ảnh sản phảm"
                  required
                  accept="image/*"
                  @change="handleFileChange"
                />
              </div>
              <div class="lb-name">
                <p>Mô tả sản phẩm :</p>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Mô tả sản phẩm"
                  v-model="description"
                />
              </div>
            </div>
            <div class="col-lg-4">
              <p>Danh mục sản phẩm</p>
              <select
                class="form-select"
                v-model="category"
                aria-placeholder="Chọn danh mục sản phẩm"
              >
                <option>Coffee</option>
                <option>Tea</option>
                <option>Cooktail</option>
                <option>Milk</option>
                <option>SoftDrink</option>
              </select>
            </div>
          </form>
        </div>
      </div>
    </div>

    >
    <h3>Ảnh xem trước:</h3>
    <div v-if="previewImage" class="preview-container">
      <img :src="previewImage" alt="Preview" />
    </div>

    <div class="container-btn">
      <button class="btn btn-primary" style="margin: 20px;" @click.prevent="addProducts">
        Thêm sản phẩm
      </button>
      <button class="btn btn-warning"  style="margin: 20px;" @click.prevent="updateProducts">
        Cập nhật sản phẩm
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

export default {
  data() {
    return {
      id: "",
      name: "",
      price: "",
      quantity: 0,
      rawPrice: "",
      description: "",
      previewImage: null,
      imageFile: null,
      category: "",
      sold: 0,
    };
  },
  methods: {
    ...mapState(["products"]),
    ...mapActions(["addProduct"]),
    random(length = 6) {
      const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let result = "";
      const charactersLength = characters.length;
      for (let i = 0; i < length; i++) {
        result += characters.charAt(
          Math.floor(Math.random() * charactersLength)
        );
      }
      return result;
    },
    formatPrice() {
      // Loại bỏ tất cả các ký tự không phải số và dấu chấm (dùng cho số thập phân)
      this.rawPrice = this.price.replace(/[^0-9.]/g, "");

      // Kiểm tra nếu có dấu chấm (dùng cho số thập phân)
      const parts = this.rawPrice.split(".");

      // Nếu có nhiều hơn 1 dấu chấm (ví dụ: 1.000.000.50), chỉ lấy phần đầu tiên
      if (parts.length > 2) {
        this.rawPrice = parts[0] + "." + parts[1].slice(0, 2); // Chỉ lấy 2 chữ số sau dấu chấm
      }

      // Thêm dấu phân cách hàng nghìn cho phần nguyên (phần trước dấu chấm)
      this.price = this.rawPrice.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

      // Nếu số có phần thập phân và có ít hơn 2 chữ số sau dấu chấm, thêm số 0
      if (
        this.price.indexOf(".") !== -1 &&
        this.price.split(".")[1].length === 1
      ) {
        this.price += "0";
      }
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        this.imageFile = file;
        this.previewImage = URL.createObjectURL(file);
      }
    },
    updateProducts() {
      if (
        !this.name.trim() ||
        !this.price.trim() ||
        !this.description.trim() ||
        !this.imageFile ||
        !this.quantity ||
        !this.category.trim()
      ) {
        alert("Vui lòng điền đủ thông tin");
        return;
      } else {
        const newProduct = {
          id: this.id,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          des: this.description,
          image: this.imageFile ? URL.createObjectURL(this.imageFile) : null,
          category: this.category,
          sold: this.sold,
        };
        if (confirm("Bạn có muốn cập nhật sản phẩm này không ?")) {
          this.$store.dispatch("updateProduct", newProduct);
          alert("Cập nhật thành công ");
        } else {
          alert("Cập nhật đã bị hủy");
          return;
        }
      }
    },
    addProducts() {
      if (
        !this.name.trim() ||
        !this.price.trim() ||
        !this.description.trim() ||
        !this.imageFile ||
        !this.quantity ||
        !this.category.trim()
      ) {
        alert("Vui lòng điền đủ thông tin");
        return;
      } else {
        const newProduct = {
          id: this.id,
          name: this.name,
          price: this.price,
          quantity: this.quantity,
          des: this.description,
          image: this.imageFile ? URL.createObjectURL(this.imageFile) : null,
          category: this.category,
          sold: this.sold,
        };
        if (confirm("Bạn có muốn thếm sản phẩm này không ?")) {
          this.addProduct(newProduct);
          alert("Thêm sản phẩm thành công ");
        } else {
          alert("Thêm sản phẩm đã bị hủy");
          return;
        }
      }
    },
  },
  mounted() {
    const idProducts = this.random();
    this.id = idProducts;
  },
};
</script>

<style scoped>
/* .container-form {
  display: flex;
  flex-direction: column;
}
.container-input input {
  display: block;
  margin: 20px;
  margin-left: 50px;
}
select {
  width: 200px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px 10px;
  margin-left: 50px;
  font-size: 16px;
  background-color: #f9f9f9;
  color: #333;
}

select:focus {
  border-color: #007bff;
  outline: none;
  background-color: #e9f5ff;
}

.container-form {
  background-color: bisque;
}
input {
  height: 40px;
  width: 200px;
}
img {
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: 8px;
  object-fit: cover;
}
/* button{
  margin-top: 20px;
  height: 100px;
  width: 100px;
  background-color: orange;
  color: white;
  border-radius: 20px;
  margin-left: 40px;
} */
/* .container-input input,
.container-input select,
.container-input button {
  margin: 10px 0; /* Tạo khoảng cách giữa các phần tử */
/* }
.container-input {
  display: flex;
  flex-direction: column; /* Đảm bảo các phần tử con của container này cũng nằm dọc */
/* }
/* .container-btn {
  display: flex;
} */
</style>