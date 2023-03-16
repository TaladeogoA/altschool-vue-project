<template>
    <section class="shop-container">     
        <div v-for="product in products" :key="product.id" class="product">
            <a href="">
                <img :src="product.images[0]" alt="product image">
            </a>

            <div>
                <h3>{{ product.title }}</h3>
                <p>{{ product.price }}</p>
            </div>

            <button>Add to Cart</button>



             <!-- <router-link :to="{ name: 'ProductDetailsPage', params: { id: product.id } }">
              Go to {{ product.name }}
            </router-link> -->
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
     computed: {
        ...mapGetters(['getProducts', 'getProductById']),
        products() {
            return this.getProducts;
        },

        product() {
            return this.getProductById;
        }
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
    .shop-container {
        margin-top: 5rem;
        height: 200vh;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        


        .product {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 20rem;
            height: 30rem;
            margin: 2rem;

            img {
                max-width: 100%;
                max-height: 100%;
                object-fit: cover;
            }

            h3 {
                font-family: 'Canela-Light';
                margin: 1rem 0;
            }

            p {
                margin: 1rem 0;
            }

            button {
                margin: 1rem 0;
                width: 100%;
                border: 1px solid rgba(0, 0, 0, 0.7);
                transition: all 0.5s ease-in-out;
                outline: none;
                font-size: 1rem;
    line-height: 3.6rem;
    border-radius: 3rem;
    background: transparent;
    font-weight: 300;
    letter-spacing: 0;
            }
        }
    }
</style>