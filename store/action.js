import api from '../data/api.js'
const action = {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('http://localhost:3000/products');
      const data = await response.json();
      commit('setProducts', data);
    } catch (error) {
      console.error('Có lỗi xảy ra:', error);
    }
  },
  async fetchCarts({ commit }) {
    try {
      const response = await fetch(api + '/carts')
      if(!response.ok){
        throw new Error('Khong the lay du Carts'+ response.status)
    
      }
      const data = await response.json();
      commit('SET_CARTS', data);

    } catch (error) {
      console.log('co loi xay ra ' + error)
    }

  },
  // Thêm sản phẩm mới vào API
  async addProduct({ commit }, newProduct) {
    try {
      const response = await fetch('http://localhost:3000/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newProduct), // Gửi sản phẩm dưới dạng JSON
      });

      const data = await response.json();

      // Nếu thêm thành công, cập nhật state
      commit('addProduct', data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  },
  async addUser({ commit }, newUser) {
    try {
      const response = await fetch(api + '/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      const data = await response.json();

      // Nếu thêm thành công, cập nhật state
      commit('addUser', data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  },
  async addCart({ commit }, newCart) {
    try {
      const response = await fetch(api + '/carts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCart),
      });

      const data = await response.json();

      // Nếu thêm thành công, cập nhật state
      commit('addCarts', data);
    } catch (error) {
      console.error('Lỗi khi thêm sản phẩm:', error);
    }
  },
  async fetchUsers({ commit }) {
    try {
      const response = await fetch(api + "/users", {
        method: "GET"
      });

      commit('SET_USERS', response.data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  },
  async delCartByID({commit, dispatch}, cartId){
    try{
      const response = await fetch( api +`/carts/${cartId}`,{
        method:"DELETE"

      });
      if(response.ok){
        commit('DELETE_CART', cartId)
        await dispatch('fetchCarts');
      }else{
        alert('Xoa that bai')
      }

    }catch(error){
      console.error(error)
    }

  },
  async deleteProductById({ commit, dispatch }, productId) {
    try {

      const reponse = await fetch(api + `/products/${productId}`, {
        method: "DELETE"
      });
      if (reponse.ok) {
        commit('deleteProductById', reponse.data);

        await dispatch('fetchProducts');
      } else {
        console.error("Xóa sản phẩm thất bại", reponse);
      }


    } catch (error) {
      console.error("Xóa sản phẩm thất bại:", error);
    }

  },
  async updateProduct({ commit }, updatedProduct) {
    try {
      const response = await fetch(`http://localhost:3000/products/${updatedProduct.id}`, {
        method: 'PUT',  // hoặc 'PATCH' nếu chỉ cập nhật một số trường
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProduct), // Gửi sản phẩm dưới dạng JSON
      });

      const data = await response.json();

      if (response.ok) {
        // Nếu cập nhật thành công, cập nhật state với dữ liệu mới
        commit('updateProduct', data);
      } else {
        console.error('Cập nhật sản phẩm thất bại:', data);
      }
    } catch (error) {
      console.error('Lỗi khi cập nhật sản phẩm:', error);
    }
  }

}
export default action;