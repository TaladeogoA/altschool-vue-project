<template>
  <div class="home">
    <HeroComponent />
    <FragrancesComponent />
    <LaptopsComponent />
    <HomeDecorComponent />
  </div>
</template>

<script>
import HomeDecorComponent from "@/components/homepage-components/homedecor-section/HomeDecorComponent.vue";
import LaptopsComponent from "@/components/homepage-components/laptops/LaptopsComponent.vue";
import FragrancesComponent from "@/components/homepage-components/fragrances-section/FragrancesComponent.vue";
import HeroComponent from "../components/homepage-components/hero-section/HeroComponent.vue";

export default {
  name: "HomePage",
  components: {
    HeroComponent,
    FragrancesComponent,
    LaptopsComponent,
    HomeDecorComponent,
  },
};
</script>

<style lang="scss" scoped>
.home {
  position: relative;
}
</style>
