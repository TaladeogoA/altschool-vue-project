<template>
  <div>
    <h2>LAPTOPS</h2>

    <div class="laptops-container">
      <ProductCard
        v-for="laptop in getLaptops"
        :key="laptop.id"
        :product="laptop"
      />
    </div>
  </div>
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
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped></style>
