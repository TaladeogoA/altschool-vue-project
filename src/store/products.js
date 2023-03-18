export default {
  state: {
    products: [],
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      if (this.state.products.products.length === 0) {
        const response = await fetch(
          "https://dummyjson.com/products/?limit=50"
        );
        const products = await response.json();
        console.log("fetched products");
        commit("setProducts", products.products);
      }
    },
  },

  getters: {
    getProducts(state) {
      // filter out the images without pictures, and calculate the discount
      const withImages = state.products.filter((product) => product.images[1]);

      return withImages.map((product) => {
        const discountedPrice =
          product.price * (1 - product.discountPercentage / 100);

        const roundedPrice = discountedPrice.toFixed(2);
        return { ...product, roundedPrice };
      });
    },

    getLaptops(state) {
      return state.products.filter((product) => product.category === "laptops");
    },

    getFragrances(state) {
      return state.products.filter(
        (product) => product.category === "fragrances"
      );
    },

    getHomeDecor(state) {
      return state.products.filter(
        (product) => product.category === "home-decoration"
      );
    },
  },
};
