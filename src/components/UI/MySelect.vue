<template>
  <select :value="modelValue" @change="changeOption">
    <option disabled value="">Select:</option>
    <option v-for="option in options" :key="option.value" :value="option.value">
      {{ option.name }}
    </option>
  </select>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
.input {
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid aqua;
}
</style>
