<template>
  <section class="hero-container">
    <div class="hero-content">
      <h1>
        Get a radiant glow for less with our exclusive discount on The Ordinary
        products!
      </h1>

      <ButtonComponent color="black" type="hero" @click="handleClick"
        >Shop Now!</ButtonComponent
      >
    </div>
  </section>
</template>

<script>
import ButtonComponent from "../../ui/ButtonComponent.vue";

export default {
  name: "HeroComponent",
  components: {
    ButtonComponent,
  },

  methods: {
    handleClick() {
      console.log("clicked");
    },
  },
};
</script>

<style lang="scss" scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("../../../assets/skincare-hero.jpg");
  filter: brightness(80%) saturate(80%);
  background-size: cover;
  background-position: 20% 80%;
  background-repeat: no-repeat;

  .hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    color: #000;

    h1 {
      font-family: "Canela-Light";
      font-size: 3rem;
      font-weight: 300;
      margin-bottom: 5rem;
      color: #000;
    }
  }
}
// responsive styles

@media screen and (max-width: 768px) {
  .hero-container {
    background-position: 50% 50%;

    .hero-content {
      h1 {
        font-size: 2rem;
      }

      .button {
        width: 100%;
      }
    }
  }
}
</style>
