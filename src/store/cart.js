export default {
  state: {
    cart: [],
  },

  mutations: {
    addToCart(state, product) {
      state.cart.push(product);
    },
  },

  actions: {
    addToCart({ commit }, product) {
      commit("addToCart", product);
    },
  },

  getters: {
    getCart(state) {
      return state.cart;
    },
  },
};
