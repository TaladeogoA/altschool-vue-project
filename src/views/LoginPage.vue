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
                <input type="password" v-model="password" placeholder="Enter password" />
            </div>
    
            <button>Login</button>

        </form>

        <p v-if="errorMessage">
            {{ errorMessage }}
        </p>
    </div>
</template>

<script>
import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export default {
    data() {
        return {
            email: '',
            password: '',
            errorMessage: ''
        }
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
                    console.log('signed in', user);
                    this.$router.push({ name: 'Products' });
                })
                .catch((error) => {
                    this.errorMessage = error.message;
                    switch (error.code) {
                        case 'auth/invalid-email':
                            this.errorMessage = 'Invalid email';
                            console.log(error.code);
                            break;
                        case 'auth/user-disabled':
                            this.errorMessage = 'User disabled';
                            console.log(error.code);
                            break;
                        case 'auth/user-not-found':
                            this.errorMessage = 'User not found';
                            console.log(error.code);
                            break;
                        case 'auth/wrong-password':
                            this.errorMessage = 'Wrong password';
                            console.log(error.code);
                            break;
                        default:
                            this.errorMessage = 'Please recheck your email and password';
                            console.log(error.code);
                  }
                });
        }
    },

    watch: {
        errorMessage(newValue) {
            this.errorMessage = newValue;
        }
    }
}
</script>

<style lang="scss" scoped>
    .login {
        margin-top: 5rem;
        height: 200vh;
    }
</style>