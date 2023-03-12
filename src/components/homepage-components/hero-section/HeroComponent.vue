<template>
    <section class="hero-container">
        <div class="hero-content">
            <h1>Get a radiant glow for less with our exclusive discount on The Ordinary products!</h1>
            
            <ButtonComponent color="white" size="lg" @click="handleClick">Shop Now!</ButtonComponent>
        </div>
    </section>

    <section class="split-hero">
        <div class="split-hero-left">
           
        </div>

        <div class="split-hero-right">
           <p>Welcome to our online store, your go-to destination for everything you need.</p>
           <p>
           We have a wide range of high-quality products that cater to your every need and preference.
    Shop now and enjoy free shipping on orders over $50.</p>

              <ButtonComponent color="black" size="md" @click="handleClick">Go to Gadgets</ButtonComponent>
        </div>
    </section>
</template>

<script>
import ButtonComponent from '../../ui/ButtonComponent.vue';
    
    export default {
    components: {
            ButtonComponent,
    },
    methods: {
        handleClick() {
            console.log('clicked');
            }
        }
    }
</script>

<style lang="scss" scoped>
    .hero-container {
        position: relative;
        width: 100%;
        height: 100vh;
        background-image: url('../../../assets/skincare-hero.jpg');
        filter: brightness(90%) saturate(90%);
        background-size: cover;
        background-position: 20% 80%;
        background-repeat: no-repeat;

        .hero-content {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align: center;
            color: #fff;

            h1 {
                font-family: 'Canela-Light';
                font-size: 3rem;
                font-weight: 300;
                margin-bottom: 5rem;
            }
        }
    }

    .split-hero {
        width: 100%;
        height: 70vh;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background-color: #000000a8;
        color: #fff;

        
        .split-hero-left {
            width: 50%;
            height: 100%;
            background-image: url('../../../assets/fragrances-hero.jpg');
            filter: brightness(90%) saturate(90%);
            background-size: cover;
            background-position: 100% 80%;
            background-repeat: no-repeat;

            h2 {
            font-family: 'Canela-Regular';
            font-size: 3rem;
            font-weight: 400;
            margin-bottom: 5rem;
            }

        }

        .split-hero-right {
            width: 40%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            padding: 0 5rem;
            background-color: rgba(233, 233, 233, 0.815);
            color: #000;
            

             p {
                font-family: 'Canela-Regular';
                font-size: 2rem;
                font-weight: 300;
                margin-bottom: 1rem;
            }

            button {
                margin-top: 2rem;
            }

        }
    }
</style>