import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import HomePage from "./views/HomePage.vue";
import ProductsPage from "./views/ProductsPage.vue";
import OurStoryPage from "./views/OurStoryPage.vue";
import LoginPage from "./views/LoginPage.vue";
import SignupPage from "./views/SignupPage.vue";
import NotFoundPage from "./views/NotFoundPage.vue";
import store from "./store/index";
import ProductDetailsPage from "./views/ProductDetailsPage.vue";
import "../src/assets/scss/fonts.scss";

const firebaseConfig = {
  apiKey: "AIzaSyCGmBW9JOymE7XUlBM2p9qnlAeE-pxWWGw",
  authDomain: "thrifty-db.firebaseapp.com",
  projectId: "thrifty-db",
  storageBucket: "thrifty-db.appspot.com",
  messagingSenderId: "462542294466",
  appId: "1:462542294466:web:efa0eb777bc53f9da61a5b",
};

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "Home",
      component: HomePage,
    },
    {
      path: "/products",
      name: "Products",
      component: ProductsPage,
      meta: {
        requiresAuth: true,
      },
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
      props: (route) => ({ nextUrl: route.query.nextUrl }),
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

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      getAuth(),
      (user) => {
        unsubscribe();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      console.log("You need to be logged in to view this page");
      next({
        name: "Login",
        query: { nextUrl: to.fullPath },
      });
    }
  } else {
    next();
  }
});

initializeApp(firebaseConfig);

const app = createApp(App);

app.use(store);
app.use(router);
app.mount("#app");

// createApp(App).use(router).mount("#app");
