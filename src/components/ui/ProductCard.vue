<template>
  <div class="product-card">
    <img :src="product.images[0]" :alt="product.name" />
    <div class="product-card__details">
      <h2 class="product-card__name">{{ product.name }}</h2>
      <p class="product-card__description">{{ truncatedDesc }}</p>
      <p class="product-card__price">{{ product.price }}</p>
      <button class="product-card__button">Add to cart</button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      text: this.product.description,
      maxLength: 80,
    };
  },

  computed: {
    ...mapGetters(["getCart"]),
    products() {
      return this.getCart;
    },
    truncatedDesc() {
      if (this.text.length <= this.maxLength) {
        return this.text;
      } else {
        return this.text.substring(0, this.maxLength) + "...";
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 15rem;
  height: 22rem;
  margin: 1rem;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  }

  img {
    width: 100%;
    height: 40%;
    object-fit: cover;
  }

  &__details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 1rem;
    height: 60%;
  }

  &__name {
    font-size: 1.2rem;
    margin: 0;
  }

  &__description {
    margin: 0;
    color: #666;
  }

  &__price {
    margin: 0;
  }

  &__button {
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

    &:hover {
      background: rgba(0, 0, 0, 0.7);
      color: #fff;
    }
  }
}
</style>
