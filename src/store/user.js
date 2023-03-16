import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default {
  state: {
    user: null,
    errorMessage: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setErrorMessage(state, errorMessage) {
      state.errorMessage = errorMessage;
    },
    clearErrorMessage(state) {
      state.errorMessage = null;
    },
  },
  actions: {
    async signUpWithEmail({ commit }, { email, password }) {
      const auth = getAuth();

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        commit("setUser", user);
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("error", errorCode, errorMessage);

        commit("setErrorMessage", errorMessage);
      }
    },

    async loginWithEmail({ commit }, email, password) {
      const auth = getAuth();

      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        const user = userCredential.user;
        commit("setUser", user);
      } catch (error) {
        console.log("error", error.code, error.message);

        switch (error.code) {
          case "auth/invalid-email":
            commit("setErrorMessage", "Invalid email address");
            break;
          case "auth/user-disabled":
            commit("setErrorMessage", "User disabled");
            break;
          case "auth/user-not-found":
            commit("setErrorMessage", "User not found");
            break;
          case "auth/wrong-password":
            commit("setErrorMessage", "Wrong password");
            break;
          default:
            commit("setErrorMessage", error.message);
        }
      }
    },
  },
};
