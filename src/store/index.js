import { createStore } from "vuex";
import products from "./products";
import user from "./user";

export default createStore({
  modules: {
    products,
    user,
  },
});
