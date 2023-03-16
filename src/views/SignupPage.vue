<template>
    <div class="sign-up">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Email</label>
                <input type="email" 
                v-model="email"
                placeholder="Enter email" />
            </div>

            <div class="form-group">
                <label>Password</label>
                <input type="password" 
                v-model="password"
                placeholder="Enter password" />
            </div>

            <button @click="handleSubmit">Sign Up</button>
            <button @click="signInWithGoogle">Sign In with Google
            </button>
        </form>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

    export default {
       data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        ...mapActions(['signUp']),

       async handleSubmit() {
            // const auth = getAuth();
            // createUserWithEmailAndPassword(auth, this.email, this.password)
            // .then((userCredential) => {
            //     const user = userCredential.user;
            //     console.log('signed up', user);
            //     this.$router.push({ name: 'Shop' });
            // })
            // .catch((error) => {
            //     const errorCode = error.code;
            //     const errorMessage = error.message;

            //     console.log('error', errorCode, errorMessage);
            // });
          
           try {
                await this.signUp({ email: this.email, password: this.password });
                this.$router.push({ name: 'Shop' });
           } 
              catch (error) {
                 console.log(error, 'error in component');
              }
        },
        signInWithGoogle() {
            console.log('Sign in with Google');
        }
    }
    }
</script>

<style lang="scss" scoped>
    .sign-up {
        margin-top: 5rem;
        height: 200vh;
    }
</style>