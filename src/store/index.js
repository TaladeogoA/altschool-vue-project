import { createStore } from "vuex";
import products from "./products";
import singleproduct from "./singleproduct";
import user from "./user";

export default createStore({
  modules: {
    products,
    singleproduct,
    user,
  },
});
