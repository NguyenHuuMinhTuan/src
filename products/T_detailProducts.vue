<template>
  <div
    class="container-fluid lg"
    style="
      height: 600px;
      width: 400px;
      justify-items: left;
      border: 2px solid black;
      border-radius: 20px;
      box-shadow: 10px 10px 5px 5px;
      margin: 30px;
    "
  >
    <div v-if="product">
      <img
        :src="product.image"
        alt="Hình ảnh minh họa"
        style="height: 200px; width: fit-content; justify-items: center"
      />
      <p>Tên sản phẩm : {{ product.name }}</p>
      <p>Giá sản phẩm : {{ product.price }}</p>
      <p>Mô tả sản phẩm : {{ product.des }}</p>
      <p>Số lượng : {{ product.quantity }}</p>
      <div class="container-fluid" style="display: flex">
        <button @click="incre" class="btn btn-success" style="margin: 10px">
          +
        </button>
        <p style="margin-top: 15px">{{ count }}</p>
        <button @click="decre" class="btn btn-danger" style="margin: 10px">
          -
        </button>
      </div>
      <button class="btn btn-primary" @click="addToCart">
        Thêm vào giỏ hàng
      </button>
    </div>
    <div v-else>
      <p>Không tìm thấy sản phẩm!</p>
    </div>

    <!-- Popup Animation -->
    <div v-if="showPopup" class="popup-animation">
      <img :src="product.image" alt="Hình ảnh sản phẩm" />
    </div>
  </div>
</template>
  

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      product: null,
      count: 0,
      showPopup: false,
      totalPrice: 0,
    };
  },
  computed: {
    ...mapGetters(["allProducts"]),
  },
  methods: {
    ...mapActions(["addCart"]),
    ...mapGetters(['allCarts']),
    incre() {
      if (this.product.quantity > this.count) {
        this.count++;
      } else {
        return;
      }
    },
    decre() {
      if (this.count > 1) {
        this.count--;
      }
    },
    addToCart() {
      if (this.count <= 0) {
        alert("Số lượng sản phẩm vui lòng lớn hơn 1");
        return;
      } else {
        const newCart = {
          id: this.product.id,
          name: this.product.name,
          price: this.product.price,
          image: this.product.image,
          quantity: this.count,
        };
        this.addCart(newCart);
        alert('Thêm vào giỏ hàng thành công ')
      }

      this.showPopup = true; // Hiển thị popup
      setTimeout(() => {
        this.showPopup = false; // Ẩn popup sau 1.5 giây
      }, 1500);
    },
  },

  mounted() {
    let id = this.$route.params.id;
    this.product = this.allProducts.find((product) => product.id == id);
  },
};
</script>

<style scoped>
img {
  mix-blend-mode: darken;
}
.popup-animation {
  position: fixed;
  top: 200px; /* Vị trí bắt đầu (giả sử vị trí sản phẩm) */
  left: 300px; /* Vị trí bắt đầu */
  width: 50px;
  height: 50px;
  z-index: 1000;
  animation: moveToCart 1.5s ease-in-out forwards;
}

.popup-animation img {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
}

@keyframes moveToCart {
  0% {
    transform: translate(0, 0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translate(150px, 300px) scale(0.8); /* Di chuyển gần đến giỏ */
    opacity: 1;
  }

  100% {
    transform: translate(900px, 350px) scale(0.8);
    opacity: 1;
  }
}
</style>