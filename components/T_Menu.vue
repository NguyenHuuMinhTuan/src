<template>
    <div id="app">
      <!-- Nút toggle menu -->
      <button class="toggle-button" @click="toggleMenu">
        <span v-if="!menuVisible">Hiển thị menu</span>
        <span v-else>Ẩn menu</span>
      </button>
  
      <!-- Sidebar menu -->
      <div v-if="menuVisible" class="sidebar">
        <div class="menu-group">
          <div class="menu-item">
            <span class="icon">🏠</span>
            <span class="text">Trang chủ</span>
          </div>
          <div class="menu-item">
            <span class="icon">⚡</span>
            <span class="text">Shorts</span>
          </div>
          <div class="menu-item">
            <span class="icon">📺</span>
            <span class="text">Kênh đăng ký</span>
          </div>
        </div>
      </div>
  
      <!-- Phần nội dung -->
      <div class="content">
        <h1>Nội dung chính</h1>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        menuVisible: false, // Trạng thái hiển thị của menu (mặc định là ẩn)
      };
    },
    methods: {
      toggleMenu() {
        this.menuVisible = !this.menuVisible; // Thay đổi trạng thái hiển thị
      },
    },
  };
  </script>
  
  ---
  
  ### 2. **CSS cho giao diện**
  
  ```vue
  <style scoped>
  /* Nút toggle menu */
  .toggle-button {
    position: fixed;
    top: 20px;
    left: 20px;
    z-index: 1000;
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
  }
  
  .toggle-button:hover {
    background-color: #0056b3;
  }
  
  /* Sidebar menu */
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    width: 240px;
    height: 100vh;
    background-color: #212121;
    color: white;
    overflow-y: auto;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.5);
    padding-top: 50px; /* Để nút toggle không che menu */
  }
  
  .menu-group {
    margin-bottom: 10px;
    border-bottom: 1px solid #383838;
    padding: 10px 0;
  }
  
  .menu-item {
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .menu-item:hover {
    background-color: #383838;
  }
  
  .icon {
    font-size: 20px;
    margin-right: 15px;
  }
  
  .text {
    font-size: 14px;
    font-weight: 500;
  }
  
  /* Phần nội dung */
  .content {
    padding: 20px;
    margin-left: 240px; /* Cùng chiều rộng với menu */
    transition: margin-left 0.3s; /* Hiệu ứng khi menu bật/tắt */
  }
  
  .content.menu-hidden {
    margin-left: 0; /* Nếu menu ẩn thì nội dung full width */
  }
  </style>
  