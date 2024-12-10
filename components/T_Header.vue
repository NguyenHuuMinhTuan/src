<template>
  <div>
    <!-- Giao diện dành cho người dùng đã đăng nhập với loại tài khoản admin  -->
    <div v-if="user && user.type === 1">
      <nav class="top-header">
        <ul>
          <li class="option-menu"><h1>ENJOY LIFE</h1></li>
          <router-link to="/"><li class="option-menu">Trang chủ</li></router-link>
          <li class="option-menu">Sản phẩm
            <ul class="option-child">
              <router-link to="/Tea"> <li>Trà</li></router-link>
              <router-link to="/Coffee"> <li>Cà phê</li></router-link>
              <li>Cocktail</li>
              <li>Nước ngọt</li>
              <li>Siro</li>
              <li>Sữa</li>
            </ul>
          </li>
          <li class="option-menu">
            Quản lý tất cả
            <ul class="option-child">
              <router-link to="/products_manager"><li>Quản lý sản phẩm</li></router-link>
              <router-link to="/managerAccount"><li>Quản lý tài khoản</li></router-link>
              <li>Quản lý đơn hàng</li>
              <li>Quản lý Vourcher</li>
            </ul>
          </li>
          <div class="Username" v-if="user">
          <p>Xin chào, {{ user.username }}</p>
          <button @click="logOut">Đăng xuất</button>
        </div>
        </ul>
     
      </nav>
    </div>

    <!-- Giao diện dành cho người dùng đã đăng nhập với loại tài khoản khách hàng  -->
    <div v-else-if="user && user.type === 0">
      <nav class="top-header">
        <ul>
          <router-link to="/"><li class="option-menu">Trang chủ</li></router-link>
          <li class="option-menu">Sản phẩm
            <ul class="option-child">
              <router-link to="/Tea"> <li>Trà</li></router-link>
              <router-link to="/Coffee"> <li>Cà phê</li></router-link>
              <li>Cocktail</li>
              <li>Nước ngọt</li>
              <li>Siro</li>
              <li>Sữa</li>
            </ul>
          </li>
         
          <div class="Username" v-if="user">
          <p>Xin chào, {{ user.username }}</p>
          <button @click="logOut">Đăng xuất</button>
        </div>
        </ul>
     
      </nav>
  
    </div>

    <!-- Giao diện mặc định cho khách hàng chưa đăng nhập -->
    <div v-else>
      <nav class="top-header">
        <ul>
          <router-link to="/"><li class="option-menu">Trang chủ</li></router-link>
          <li class="option-menu">Sản phẩm
            <ul class="option-child">
              <li>Cà phê</li>
              <li>Trà</li>
              <li>Cocktail</li>
              <li>Nước ngọt</li>
              <li>Siro</li>
              <li>Sữa</li>
            </ul>
          </li>
          <li class="option-menu">Giới thiệu</li>
          <li class="option-menu">Liên hệ</li>
          <button @click="changeFormLogin">Đăng nhập</button>
        </ul>
     
      </nav>
    
    </div>
    
    <router-view />
  </div>
</template>

<script>
import eventBus from "@/router/eventBus";
import "bootstrap"

export default {
  data() {
    return {
      user: JSON.parse(localStorage.getItem("CurrentUser")) || null,
    };
  },
  methods: {
    changeFormLogin() {
      this.$router.push("/login");
    },
    logOut() {
      localStorage.removeItem("CurrentUser");
      this.user = null;
      this.$router.push("/login");
    },
  },

  created() {
    eventBus.on("loginSuccess", (checkUser) => {
      this.user = checkUser;
    });
  },
  beforeUnmount() {
    eventBus.off("loginSuccess");
  },
};
</script>

<style scoped>
header {
  height: 100px;
  width: 100%;
  background-color: #c3d6f2;
  border-bottom: 1px solid #768cce;
}

.header-form {
  color: olivedrab;
  display: block;
  font-family: "Times New Roman", Times, serif;
  font-size: larger;
}

.header-form router-link {
  padding-left: 10px;
  border-right: 2px solid #768cce;
  text-decoration: none; 
  color: inherit;
}

.header-form router-link:hover {
  color: #ff7f50;
  border-color: #ff7f50; 
}

button {
  border-radius: 15px;
  background-color: orange;
  color: aliceblue;
  width: 100px;
  height: 40px;
  margin-left: auto;
}
.top-header {
  background-color: #F0EE65;
  padding: 10px;
  justify-content: space-between;
}
.top-header > ul {
  display: flex;
}
.option-menu {
  font-size: 20px;
  position: relative;
  padding: 10px 20px;
  color: #fff;
  cursor: pointer;
}
.option-menu:hover {
  color: #fff;
}
.option-child {
  position: absolute;
  top: 100%; /* Hiển thị ngay dưới menu */
  left: 0;
  background-color: #444;
  display: none; /* Ẩn mặc định */
  min-width: 150px;
  border-radius: 4px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
.option-child li {
  padding: 10px;
  color: #fff;
}
.option-child li:hover {
  background-color: #768cce;
}
.option-menu:hover .option-child {
  display: block;
}
.Username{
  margin-left: auto;
  margin-top: 5px;
}

</style>
