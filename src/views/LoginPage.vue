<template>
  <div class="login">
    <form @submit.prevent="handleSubmit">
      <h3>Login</h3>

      <div class="form-group">
        <label>Email</label>
        <input type="email" v-model="email" placeholder="Enter email" />
      </div>

      <div class="form-group">
        <label>Password</label>
        <input
          type="password"
          v-model="password"
          placeholder="Enter password"
        />
      </div>

      <!-- <button>Login</button> -->
      <button-component type="submit" @click="handleSubmit">
        Login
      </button-component>

      <router-link to="/signup">Don't have an account? Sign Up</router-link>
    </form>

    <p v-if="errorMessage">
      {{ errorMessage }}
    </p>
  </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from "@firebase/auth";
import ButtonComponent from "../components/ui/ButtonComponent.vue";

export default {
  name: "LoginPage",
  components: {
    ButtonComponent,
  },
  data() {
    return {
      email: "",
      password: "",
      errorMessage: "",
    };
  },

  methods: {
    //   ...mapActions(["loginWithEmail"]),

    // async handleSubmit() {
    //     try {
    //         await this.loginWithEmail(this.email, this.password);
    //         this.$router.push({ name: "Shop" });
    //     } catch (error) {
    //         console.log(error);
    //     }
    //    }

    handleSubmit() {
      const auth = getAuth();

      signInWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          console.log(userCredential);
          const user = userCredential.user;
          console.log("signed in", user);
          this.$router.push({ name: "Products" });
        })
        .catch((error) => {
          this.errorMessage = error.message;
          switch (error.code) {
            case "auth/invalid-email":
              this.errorMessage = "Invalid email";
              console.log(error.code);
              break;
            case "auth/user-disabled":
              this.errorMessage = "User disabled";
              console.log(error.code);
              break;
            case "auth/user-not-found":
              this.errorMessage = "User not found";
              console.log(error.code);
              break;
            case "auth/wrong-password":
              this.errorMessage = "Wrong password";
              console.log(error.code);
              break;
            default:
              this.errorMessage =
                "Oops! Something went wrong on our end. Please try again later or contact support if the problem persists.";
              console.log(error.code);
          }
        });
    },
  },

  watch: {
    errorMessage(newValue) {
      this.errorMessage = newValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.login {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: (100vh - 15vh);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 30rem;
    height: 30rem;
    border-radius: 5px;
    padding: 2rem;

    h3 {
      font-size: 3rem;
      font-weight: 400;
      margin-bottom: 2rem;
    }

    .form-group {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      width: 100%;
      margin-bottom: 1rem;

      label {
        margin-bottom: 0.5rem;
      }

      input {
        width: 100%;
        height: 2rem;
        border: none;
        outline: none;
        border-bottom: 1px solid black;

        &:focus {
          border-bottom: 2px solid black;
        }

        &::placeholder {
          color: #ccc;
        }
      }
    }

    button {
      width: 100%;
      height: 2rem;
      border: 1px solid #ccc;
      border-radius: 5px;
      background-color: #ccc;
      margin-top: 1rem;
      cursor: pointer;
    }

    a {
      margin-top: 1rem;
      text-decoration: none;
      color: #000;
    }
  }
}
</style>
