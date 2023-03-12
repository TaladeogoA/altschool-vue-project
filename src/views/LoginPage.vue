<template>
    <div class="login">
        <form>
            <h3>Login</h3>
    
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" placeholder="Enter email" />
            </div>
    
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" placeholder="Enter password" />
            </div>
    
            <button>Login</button>
        </form>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="scss" scoped>
    .login {
        margin-top: 5rem;
        height: 200vh;
    }
</style>