<template>
    <div class="home">
        <HeroComponent/>
    </div>
</template>

<script>
import HeroComponent from '../components/homepage-components/hero-section/HeroComponent.vue';

export default {
    name: 'HomePage',
    components: {
       
        HeroComponent
    }
}
</script>

<style lang="scss" scoped>
.home {
    position: relative; 
}
</style>