<template>
    <div class="sign-up">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>First Name</label>
                <input type="text" 
                v-model="firstName"
                placeholder="Enter first name" />
            </div>

            <div class="form-group">
                <label>Last Name</label>
                <input type="text" 
                v-model="lastName"
                placeholder="Enter last name" />
            </div>

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

            <button>Sign Up</button>
        </form>
    </div>
</template>

<script>
    export default {
       data() {
        return {
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
    },
    methods: {
        handleSubmit() {
            console.log(this.email, this.password);
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