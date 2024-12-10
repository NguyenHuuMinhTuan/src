<template>

  <div class="container-register">
    <div class="form-register">
      <input type="text" v-model="username" placeholder="username" required />
      <input
        type="password"
        v-model="password"
        placeholder="password"
        required
      />
      <input
        type="password"
        v-model="confirmPass"
        placeholder="confirm password"
        required
      />
      <input type="email" v-model="email" placeholder="email" required />
      <input
        type="number"
        v-model="type"
        placeholder="type account "
        required
      />
      <div class="container-btn">
        <button @click="register">Register</button>
        <button @click="cancel">Cancel</button>
      </div>
    </div>
    <div class="img-register">
      <p>Wellcome to GENSHIN SHOP</p>
      
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';


export default {
data(){
    return{
        account:[],
        username:'',
        password:'',
        confirmPass:'',
        email:'',
        type:''
    }

},
methods:{
  ...mapActions(['addUser']),
  register(){
    if(this.username === ''){
      alert("Vui lòng điền đủ thông tin cần !");
      return;
    }else{
    const user = JSON.parse(localStorage.getItem('users')|| '[]');
    const newAccount = {id: user.length + 1,username: this.username, password: this.password, email: this.email, type: this.type};
    
    user.push(newAccount);
    this.addUser(newAccount);
    localStorage.setItem('users',JSON.stringify(user));
    alert("Đăng ký thành công");
    
    this.$router.push('/login')
    }

  },
  cancel(){
    this.$router.push('/')
  }
}
}
</script>


<style scoped>
.container-btn {
  display: flex;
  margin-left: 15px;
}
.container-btn button {
  margin-left: 10px;
}
button {
  background-color: orange;
  color: aliceblue;
  border-radius: 20px;

  height: 30px;
  width: 100px;
}
.img-register {
  margin-top: 90px;
}
.container-register {
  display: flex;
  background-color: aqua;
  width: 100%;
  height: fit-content;
}
.form-register {
  height: fit-content;
  width: fit-content;
  margin-left: 300px;
}
.form-register input {
  height: 30px;
  width: 200px;
  display: flex;
  margin: 30px;
  justify-items: center;
  align-items: center;
}
.form-register input:hover {
  transform: scale(1.1);
  transition: transform 1s ease;
}
</style>