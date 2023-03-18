<template>
  <div class="product-card">
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
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.product-card {
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>
