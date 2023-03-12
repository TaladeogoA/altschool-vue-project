<template>
    <div class="shop">
        <p>I am the Shop Page</p>
       
        <div v-for="product in products" :key="product.id">
            <p>{{ product.title }}</p>
            <p>{{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
     computed: {
        ...mapGetters(['getProducts']),
        products() {
            return this.getProducts;
        },
    },

    created() {
        this.$store.dispatch('fetchProducts');
    },

    updated() {
        console.log(this.products);
    },


}
</script>

<style lang="scss" scoped>
    .shop {
        height: 200vh;
    }
</style>