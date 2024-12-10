<template>
  <div>
    <footer>
      <div class="container-md-fluid bg-primary text-white " style="border-radius: 20px;">
        <div class="row">
        <div class="col">
          <ul>
          Các chi nhánh
          <li>123 Hoàng Văn Thụ</li>
          <li>13 Hoàng Hoa Thám</li>
          <li>03 Đinh Bộ Lĩnh</li>
        </ul>
        </div>
        <div class="col">
          <ul>
          Các chi nhánh
          <li>123 Hoàng Văn Thụ</li>
          <li>13 Hoàng Hoa Thám</li>
          <li>03 Đinh Bộ Lĩnh</li>
        </ul>
        </div>
        <div class="col">
          <ul>
          Các chi nhánh
          <li>123 Hoàng Văn Thụ</li>
          <li>13 Hoàng Hoa Thám</li>
          <li>03 Đinh Bộ Lĩnh</li>
        </ul>
        </div>
      </div>
      </div>
    </footer>
    <div class="btn-cart">
      <router-link to="/cart">
        <button >
          <img src="../assets/icon/ic_cart.png" alt="Giỏ hàng" />
        </button>
      </router-link>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

export default {};
</script>

<style scoped>
.container{
  display: flex;
  background-color: #ef6a3f;
  color: #f0ee65;
  font-family: 'Times New Roman', Times, serif;
  font-size: 20px;
  justify-content: space-around;
}
.btn-cart {
  position: fixed; 
  bottom: 20px;   
  right: 20px;     
  z-index: 1000;   
}

.btn-cart button {
  background-color: orange;
  border: none;
  border-radius: 20%;
  height: 60px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  animation: move 2s ;
  animation-delay: 3s;
  animation-iteration-count: infinite;
}

.btn-cart button img {
  height: 30px;
  width: 30px;
}

.btn-cart button:hover {
  background-color: #ffa500; /* Màu khi hover */
}
@keyframes move {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateY(-50px);
  }
  100% {
    transform: translateX(0);
  }}

</style>