<template>

  <div class="container-products">
        <img :src="product.image"/>
        <p> Tên sản phẩm : {{ product.name }}</p>
        <p> Giá sản phẩm : {{ product.price }} VNĐ</p>
        <p> Đã bán : {{ product.sold }}</p>
        <router-link :to="{ name:'detail', params:{id: product.id} }">
          <button class="btn-order">Nhấn để xem chi tiết</button>
         
        </router-link>
       
  </div>
</template>

<script>
import { mapGetters } from 'vuex';



export default {
  props:["product"],
  data(){
    return{
        id:this.product.id
    }

  },
  computed:{
    ...mapGetters(["allProducts"])
  }
};
</script>

<style scoped>
.container-products{
  display: flex ;
  flex-direction: column;
  height: 400px;
  width: 300px;
  margin : 20px;
  margin-left: -10px;
  border-radius: 15px;
  box-shadow: 15px 10px 5px 2px ;
  background-color: aliceblue;

}
.container-products p{
  margin-left: 20px;
}
.container-products button{
  margin-left: 20px;
}
.btn-order{
  width: 150px;
  height: 50px;
  background-color:#ed9e59;
  border-radius: 20px;
  color: aliceblue;
  margin-top: auto;
  margin-bottom: 10px;
  transition: width 0.5s ease, height 0.5s ease;
  
}
.container-products img{
  margin-left: 50px;
  mix-blend-mode: darken;
  height: 200px;
  width: fit-content;
  overflow: hidden;
}
.btn-order:hover{
  color :aqua;
  width: 200px;
  justify-content: center;
  transition:  1s;
}


</style>