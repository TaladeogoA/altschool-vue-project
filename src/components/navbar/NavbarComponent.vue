<template lang="">
  <div class="nav-wrapper" :class="{ 'nav-scrolled': isScrolled }">
    <div class="nav nav-left">
      <nav>
        <router-link to="/products">Products</router-link>
        <router-link to="/our-story">Our Story</router-link>
        <a href="#">Search</a>
      </nav>
    </div>

    <div class="nav-center">
      <router-link to="/">
        <img src="../../assets/logo-white.svg" alt="logo" />
      </router-link>
    </div>

    <div class="nav nav-right">
      <nav>
        <a href="#">Cart</a>

        <div v-if="!isLoggedIn" class="auth">
          <router-link class="login" to="/login">Log In</router-link>

          <router-link class="signup" to="/signup">Sign Up</router-link>

          <button class="signout" @click="handleSignOut" v-if="isLoggedIn">
            Sign Out
          </button>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

export default {
  data() {
    return {
      isScrolled: false,
      isLoggedIn: false,
    };
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);

    // auth logic
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.isLoggedIn = true;
      } else {
        this.isLoggedIn = false;
      }
    });
  },
  unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 30;
    },
    handleSignOut() {
      const auth = getAuth();

      signOut(auth)
        .then(() => {
          console.log("signed out");
          this.$router.push({ name: "Home" });
        })
        .catch((error) => {
          console.log("error", error);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 2rem;
  height: 5rem;
  z-index: 100;

  > {
    flex-grow: 1;
    flex-basis: 0;
  }

  .nav {
    font-family: Poppins, Arial, sans-serif;

    nav {
      display: flex;
      align-items: center;

      a {
        padding: 0 1rem;
        color: #000;
        text-decoration: none;
        transition: all 0.3s ease;
        border-radius: 2px;

        &:hover {
          background-color: rgba(255, 255, 255, 0.1);
        }

        &.router-link-active.router-link-exact-active {
          font-weight: bold;
          text-transform: uppercase;
        }
      }
    }
  }

  .auth {
    .signout {
    }
  }
}

.nav-scrolled {
  background-color: rgba(0, 0, 0, 0.7);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
