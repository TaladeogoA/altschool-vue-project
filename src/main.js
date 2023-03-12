import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import "../src/assets/scss/fonts.scss";
import HomePage from "./views/HomePage.vue";
import ShopPage from "./views/ShopPage.vue";
import OurStoryPage from "./views/OurStoryPage.vue";
import LoginPage from "./views/LoginPage.vue";
import SignupPage from "./views/SignupPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";
import store from "./store/index";
import ProductDetailsPage from "./views/ProductDetailsPage.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/shop",
      name: "Shop",
      component: ShopPage,
    },
    {
      path: "/shop/:id",
      name: "product-details",
      component: ProductDetailsPage,
    },
    {
      path: "/our-story",
      name: "OurStory",
      component: OurStoryPage,
    },
    {
      path: "/login",
      name: "Login",
      component: LoginPage,
    },
    {
      path: "/signup",
      name: "Signup",
      component: SignupPage,
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFoundPage,
    },
  ],
});

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount("#app");
