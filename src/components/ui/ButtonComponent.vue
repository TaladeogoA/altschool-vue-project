<template>
  <button @click="handleClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ButtonComponent",
  props: {
    color: {
      type: String,
    },
    size: {
      type: String,
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
  border: 1px solid rgba(0, 0, 0, 0.7);
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
</style>
