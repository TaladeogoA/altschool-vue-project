<template>
    <NavbarComponent/>
 <router-view></router-view>
</template>

<script>
// import HomePage from './views/HomePage.vue';
import NavbarComponent from './components/navbar/NavbarComponent.vue';

export default {
  name: 'App',
  components: {
    NavbarComponent
  }
}
</script>

<style>
@font-face {
  font-family: 'Canela-Regular';
  src: local(
    'Canela-Regular'
  ), url(./assets/fonts/Canela-Regular-Trial.otf) format('opentype');
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
      font-family: 'Spectral';
       scroll-behavior: smooth;
}
</style>
