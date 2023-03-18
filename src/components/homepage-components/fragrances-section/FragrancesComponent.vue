<template>
  <section>
    <h2>FRAGRANCES</h2>

    <div class="fragrances-container">
      <ProductCard
        v-for="fragrance in getFragrances"
        :key="fragrance.id"
        :product="fragrance"
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
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped></style>
