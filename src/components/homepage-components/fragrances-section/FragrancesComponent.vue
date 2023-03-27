<template>
  <section>
    <h2>FRAGRANCES</h2>

    <div class="fragrances-container">
      <ProductCard
        v-for="fragrance in filteredFragrances"
        :key="fragrance.id"
        :product="fragrance"
        class="product-card"
      />
    </div>
  </section>
</template>

<script>
import ProductCard from "../../ui/ProductCard.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    ProductCard,
  },

  computed: {
    ...mapGetters(["getFragrances"]),

    filteredFragrances() {
      return this.getFragrances.slice(0, 3);
    },
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped>
section {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h2 {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .fragrances-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}

// responsive styling

@media screen and (max-width: 768px) {
  .fragrances-container {
    .product-card {
      width: 10rem;
      max-height: 18rem;
    }
  }
}
</style>
