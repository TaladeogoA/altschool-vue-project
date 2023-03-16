export default {
  state: {
    products: [],
    product: null,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },

    setProduct(state, product) {
      state.product = product;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      if (this.state.products.products.length === 0) {
        const response = await fetch("https://dummyjson.com/products");
        const products = await response.json();
        console.log("fetched products");
        commit("setProducts", products.products);
      }
    },

    async fetchProductById({ commit }, id) {
      const response = await fetch(`https://api.example.com/products/${id}`);
      const product = await response.json();
      console.log("fetched product", product);
      commit("setProduct", product);
    },
  },
  getters: {
    getProducts(state) {
      return state.products;
    },

    getProductById(state) {
      return state.product;
    },
  },
};
