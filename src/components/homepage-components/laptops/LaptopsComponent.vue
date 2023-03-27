<template>
  <section>
    <h2>LAPTOPS</h2>

    <div class="laptops-container">
      <ProductCard
        v-for="laptop in filteredLaptops"
        :key="laptop.id"
        :product="laptop"
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
    ...mapGetters(["getLaptops"]),

    filteredLaptops() {
      return this.getLaptops.slice(0, 3);
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

  .laptops-container {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
}
</style>
