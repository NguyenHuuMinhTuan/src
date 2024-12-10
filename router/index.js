import { createRouter, createWebHistory } from "vue-router";
import T_Home from "@/process/T_Home.vue";
import T_Product from "@/process/T_Product.vue";
import T_Register from "@/process/T_Register.vue";
import T_Login from "@/process/T_Login.vue";
import T_ManagerAccount from "@/process/T_ManagerAccount.vue";
import T_ManagerProducts from "@/T_MN_products/T_addProduct.vue";
import products_manager from "@/T_MN_products/T_showProducts.vue";
import T_Tea from "@/products/T_Tea.vue";
import T_detailProducts from "@/products/T_detailProducts.vue";
import T_Coffee from "@/products/T_Coffee.vue";
import T_Cart from "@/products/T_Cart.vue";
import T_Bill from "@/products/T_Bill.vue";

const routes = [
    {
        path:'/',
        name:'T_Home', 
        component :T_Home
    },
    {
        path:'/products',
        name:"T_Products",
        component : T_Product
    },
    {
        path:'/login',
        name:"T_Login",
        component : T_Login
    },
    {
        path:'/register',
        name:"T_Register",
        component : T_Register
    },
    {
        path:'/managerAccount',
        name:"T_ManagerAccount",
        component : T_ManagerAccount
    },
    {
        path:'/managerProducts',
        name:'T_managerProducts',
        component: T_ManagerProducts
    },
    {
        path:'/products_manager',
        name:'manager_products',
        component: products_manager,
    },
    {
        path:'/Tea',
        name:'tea',
        component: T_Tea,
    },
    {
        path:'/Coffee',
        name:'coffee',
        component: T_Coffee,
    },
    {
        path:'/detail/:id',
        name:'detail',
        component: T_detailProducts,
        prop:true
    },
    {
        path:'/Cart',
        name:'cart',
        component: T_Cart
    },
    {
        path:'/Bills',
        name:'bill',
        component: T_Bill
    }
]
const router = createRouter({
    history : createWebHistory(),
    routes
})
export default router