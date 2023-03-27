<template>
  <div class="modal" v-if="showModal">
    <div class="modal-content">
      <p>{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    errorMessage: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      showModal: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.showModal = false;
    }, 5000);
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: white;
  border-radius: 5px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
}
</style>
