<template>
    <div>
        <p>
            I am the Product Details Page
        </p>
        <p>{{ product.title }}</p>
        <p>{{ product.price }}</p>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'ProductDetailsPage',
     computed: {
        ...mapGetters(['getProductById']),
        product() {
            return this.getProductById;
        },
    },
    methods: {
        ...mapActions(['fetchProductById']),
    },
    created() {
        this.fetchProductById(this.$route.params.id);
    },
}
</script>

<style lang="scss" scoped>
div {
        margin-top: 5rem;
        height: 200vh;
    }
</style>