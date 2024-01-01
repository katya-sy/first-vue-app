<template>
  <div class="modal" v-if="show" @click="hideModal">
    <div @click.stop class="modal__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "../../mixins/toggleMixin";

export default {
  name: "my-modal",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.modal {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  position: fixed;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal__content {
  margin: auto;
  padding: 30px;
  background-color: #fff;
  min-width: 300px;
}
</style>
