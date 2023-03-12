<template>
    <button class="btn" :class="[color, size]" @click="handleClick">
        <slot></slot>
      </button>
</template>

<script>
export default {
    name: "ButtonComponent",
    props: {
        color: {
            type: String,
            default: "primary",
        },
        size: {
            type: String,
            default: "md",
        },
    },
    methods: {
        handleClick() {
            this.$emit("click");
        },
    },
};
</script>

<style lang="scss" scoped>
.btn {
   background-color: transparent;
    padding: 1rem 3rem;
    border-radius: 3rem;
    font-weight: 400;
    cursor: pointer;
    transition: all 0.5s ease-in-out;

    
}

.white {
    color: #fff;
     border: 1px solid #fff;

     &:hover {
        background-color: rgba(255, 255, 255, 0.4);
        color: #fff;
    }
}

.black {
    color: #000;
    border: 1px solid #000;

     &:hover {
                    background-color: #000000a8;
                    color: #fff;
                }
}

.md {
    font-size: 1rem;
}

.lg {
    font-size: 1.2rem;
}
</style>