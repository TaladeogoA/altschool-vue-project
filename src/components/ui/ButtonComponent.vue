<template>
  <button
    @click="handleClick"
    :class="{
      'button--black': color === 'black',
      'button--white': color === 'white',
      'button--hero': type === 'hero',
      'button--card': type === 'card',
    }"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    color: {
      type: String,
      default: "black",
    },
    type: {
      type: String,
      default: "hero",
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
button {
  margin: 1rem 0;
  width: 100%;
  border: 1px solid #000;
  transition: all 0.5s ease-in-out;
  outline: none;
  font-size: 1rem;
  line-height: 2.2rem;
  border-radius: 3rem;
  background: transparent;
  font-weight: 300;
  letter-spacing: 0;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
}

.button--white {
  border: 1px solid #fff;
  color: #fff;
  background: transparent;

  &:hover {
    background: #fff;
    color: rgba(0, 0, 0, 0.7);
  }
}

.button--hero {
  border: 2px solid #fff;
  color: #fff;
  font-size: 1.2rem;
  background: transparent;

  &:hover {
    background: #fff;
  }
}

.button--card {
  border: 1px solid #000;
  color: #000;
  background: transparent;

  &:hover {
    background: #fff;
    color: #fff;
  }
}

.button--black {
  border: 1px solid #000;
  color: #000;
  background: transparent;

  &:hover {
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
  }
}
</style>
