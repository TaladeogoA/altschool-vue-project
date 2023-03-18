export default {
  state: {
    product: {},
  },

  mutations: {
    setProduct(state, product) {
      state.product = product;
    },
  },

  actions: {
    async fetchProductById({ commit }, id) {
      if (this.state.product && this.state.product.id === id) {
        return;
      }

      try {
        const response = await fetch(`https://dummyjson.com/products/${id}`);
        const product = await response.json();
        console.log("fetched product", product);
        commit("setProduct", product);
      } catch (error) {
        console.log(error);
      }
    },
  },

  getters: {
    getProduct(state) {
      // calculate the dicounted price

      const discountedPrice =
        state.product.price * (1 - state.product.discountPercentage / 100);

      const roundedPrice = discountedPrice.toFixed(2);

      return { ...state.product, roundedPrice };
    },
  },
};
