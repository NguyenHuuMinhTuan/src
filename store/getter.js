const getter={
    allProducts: state => state.products || [],
    allCarts: state => state.carts|| [],
    allBills: state =>state.bills || [],
    allUsers:state => state.users || [],
}
export default getter;