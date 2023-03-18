<template>
  <section>
    <h2>HOME DECOR</h2>

    <div class="homedecor-container">
      <ProductCard
        v-for="homedecor in filteredHomeDecor"
        :key="homedecor.id"
        :product="homedecor"
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
    ...mapGetters(["getHomeDecor"]),

    filteredHomeDecor() {
      return this.getHomeDecor.slice(0, 3);
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

  .homedecor-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    .product-card {
      width: 15rem;
      max-height: 25rem;
      margin: 1rem;
    }
  }
}
</style>
