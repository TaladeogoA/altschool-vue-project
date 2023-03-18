<template>
  <section class="shop-container">
    <div v-for="product in products" :key="product.id" class="product">
      <router-link :to="'products/' + product.id">
        <img :src="product.images[1]" alt="product image" />
      </router-link>

      <div class="details">
        <h3>{{ product.title }}</h3>

        <div class="price">
          <p class="discounted-price">$ {{ product.roundedPrice }}</p>
          <p class="original-price">$ {{ product.price }}.00</p>
        </div>
      </div>

      <button>Add to Cart</button>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getProducts"]),
    products() {
      return this.getProducts;
    },
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },
};
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
    max-height: 30rem;
    margin: 2rem;

    a {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;

      img {
        max-width: 100%;
        object-fit: cover;
      }
    }

    .details {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      width: 100%;

      h3 {
        font-family: "Canela-Light";
        margin: 0;
      }

      .price {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-end;
        max-height: max-content;
        margin-top: 1rem;

        p {
          margin: 0 0 0.5rem 0;
        }
        .original-price {
          text-decoration: line-through;
        }

        .discounted-price {
          font-size: 1.1rem;
          font-weight: bold;
        }
      }
    }

    button {
      margin: 1rem 0;
      width: 100%;
      border: 1px solid rgba(0, 0, 0, 0.7);
      transition: all 0.5s ease-in-out;
      outline: none;
      font-size: 1rem;
      line-height: 2.2rem;
      border-radius: 3rem;
      background: transparent;
      font-weight: 300;
      letter-spacing: 0;
    }
  }
}
</style>
