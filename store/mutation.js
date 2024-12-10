const mutation = {
  DELETE_CART(state, cartId) {
    if (state.allCarts && state.allCarts.length > 0) {
      const index = state.allCarts.findIndex((x) => x.id === cartId)
      if (index !== -1) {
        state.allCarts.splice(index, 1)
      } else {
        alert('Không tìm tháy sản phẩm !')
      }
    } else {
      console.error("San pham khong ton tai")
    }
  },

  SET_CARTS(state, data) {
    state.carts = data
  },
  setProducts(state, products) {
    state.products = products;
  },
  addProduct(state, newProduct) {
    state.products.push(newProduct);
  },
  addUser(state, newUser) {
    state.users.push(newUser);
  },
  addCart(state, newCart) {
    state.carts.push(newCart);
  },
  SET_USERS(state, users) {
    state.users = users;
  },
  deleteProductById(state, productId) {
    if (state.allProducts && state.allProducts.lenght > 0) {
      const index = state.allProducts.findIndex(product => product.id === productId);
      if (index !== -1) {
        state.allProducts.splice(index, 1);
      } else {
        alert("Không tìm thấy sản phẩm !");
      }
    } else {
      console.error("Không có sản phẩm nào trong danh sách.")
    }
  },
  updateProduct(state, updatedProduct) {
    const index = state.products.findIndex(product => product.id === updatedProduct.id);
    if (index !== -1) {
      // Cập nhật sản phẩm tại vị trí tìm thấy
      state.products[index] = updatedProduct;
    }
  },



}
export default mutation;