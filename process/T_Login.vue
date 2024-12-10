<template>
  <div class="container-login" style="display: flex">
    <div
      class="container-fluid"
      style="
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 20px 0px 0px 20px;
        max-width: 500px;
        height: 400px;
        justify-content: center;
      "
    >
      <label for="Username" class="form-label" style="font-size: 20px"
        >Username :</label
      >
      <input
        class="form-control text-primary"
        id="Username"
        type="text"
        placeholder="Username"
        required
        v-model="username"
      />

      <label for="password" class="form-label" style="font-size: 20px">
        Password :
      </label>
      <input
        class="form-control text-primary"
        id="password"
        type="password"
        placeholder="Password"
        required
        v-model="password"
      />

      <div class="container-btn">
        <button
          class="btn btn-success"
          style="height: 50px; width: 100px"
          @click="checkLogin"
        >
          Sign up
        </button>
        <button
          class="btn btn-warning"
          style="height: 50px; width: 100px"
          @click="register"
        >
          Register
        </button>
      </div>
      <div class="container-other">
        <div class="other">
          <img
            src="../assets/image_communication/facebook.png"
            alt="Đăng nhập bằng Facebook"
          />
          <button class="btn" @click="checkLogin">Facebook</button>
        </div>
        <div class="other">
          <img
            src="../assets/image_communication/google.png"
            alt="Đăng nhập bằng Google"
          />
          <button class="btn">Google</button>
        </div>
      </div>
    </div>
    <div v-if="isRegister" class="container-register">

    </div>
    <div v-else
      class="container-fluid"
      style="
        background-color: blueviolet;
        color: aliceblue;
        border-radius: 0px 20px 20px 0px;
        max-width: 500px;
        height: 400px;
        justify-content: center;
      "
    >
      <p>Chào mừng bạn dến với League Shop</p>
    </div>
  </div>
</template>

<script>
import eventBus from "@/router/eventBus";
import { mapActions, mapGetters } from "vuex";
import "bootstrap";
export default {
  data() {
    return {
      username: "",
      password: "",
      isRegister:false
    };
  },
  computed: {
    ...mapGetters(["allUsers"]),
  },

  methods: {
    login() {
      this.$router.push("/");
    },
    register() {
      this.$router.push("/register");
    },
    checkLogin() {
      if (!this.username || !this.password) {
        alert("Vui lòng điền đầy đủ thông tin !");
        return;
      }
      const ConverUser = JSON.parse(localStorage.getItem("users" || "[]"));

      const checkUser = ConverUser.find(
        (x) => x.username === this.username && x.password === this.password
      );
      if (checkUser) {
        localStorage.setItem("CurrentUser", JSON.stringify(checkUser));
        eventBus.emit("loginSuccess", checkUser);
        this.$router.push("/");
      } else {
        alert("Tài khoản hoặc mật khẩu không đúng ! Vui lòng thử lại !");
      }
    },
    mounted: {
      ...mapActions(["fetchUsers"]),
    },
  },
};
</script>  

<style scoped>
.container-login {
  display: flex;
  justify-content: center; /* Căn giữa theo chiều ngang */
  align-items: center; /* Căn giữa theo chiều dọc */
  height: 100vh; /* Chiều cao toàn bộ màn hình */
  background-image: url("../assets/image_adv/img_1.jpg");
  background-repeat: no-repeat;
  background-size: cover; /* Đảm bảo ảnh nền phủ đầy */
}
.container-btn {
  margin: 20px;
  border-bottom: 1px solid #000;
}
.container-fluid {
  margin: 0; /* Loại bỏ margin mặc định */
  border-bottom: 1px solid #000;
}
.other {
  height: 70px;
  display: flex;
  background-color: rgba(255, 255, 255, 0.5);
  margin: 20px;
  border-radius: 20px;
}
.container-other {
  display: flex;
}
button {
  margin: 20px;
}

input {
  background-color: rgba(0, 0, 0, 0.5); /* Nền trong suốt */
  width: 400px;
  color: white; /* Text rõ ràng */
  border: 1px solid white; /* Viền cho input */
  padding: 10px;
  border-radius: 5px;
  font-size: 16px;
}
input::placeholder {
  color: rgba(255, 255, 255, 0.7); /* Placeholder mờ */
}
</style>