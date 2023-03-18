<template>
  <section>
    <h2>HOME DECOR</h2>

    <div class="homedecor-container">
      <ProductCard
        v-for="homedecor in getHomeDecor"
        :key="homedecor.id"
        :product="homedecor"
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
  },

  created() {
    this.$store.dispatch("fetchProducts");
  },
};
</script>

<style lang="scss" scoped></style>
