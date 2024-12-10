<template>
  <div>
    <table>

    <thead>
      <tr>
         <th>Mã tài khoản</th>
         <th>Tên tài khoản</th>
         <th>Mật khẩu</th>
         <th>Email</th>
         <th>Loại tài khoản</th>
         <th>Trạng thái</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="items in account " :key="items.id">
          <td>{{items.id  }}</td>
          <td>{{items.username }}</td>
          <td>{{items.password }}</td>
          <td>{{items.email}}</td>
          <td>{{items.type}}</td>
          <td><button @click=" del(items)">Xoá tài khoản</button></td>
      </tr>
    </tbody>
  </table>
  </div>
  

</template>

<script>
export default {
    data(){
        return{
            account: JSON.parse(localStorage.getItem('users'))
        }
    },
    methods:{
    del(item) {
      let items = JSON.parse(localStorage.getItem("users")) || [];
      items = items.filter(i => i.id !== item.id);
      localStorage.setItem("users", JSON.stringify(items));
      this.account = items; 

    },
    }

}
</script>

<style scoped>
table{
    width: 100%;
    border-collapse: collapse;
    
}
th, td {
  border: 1px solid #ddd; /* Đường kẻ bao quanh mỗi ô */
  padding: 8px; /* Khoảng cách bên trong ô */
  text-align: left; /* Căn chỉnh nội dung sang trái */
}

</style>