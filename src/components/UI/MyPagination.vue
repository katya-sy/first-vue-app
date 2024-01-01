<template>
  <div class="page__wrapper">
    <div
      class="page"
      :class="{ 'current-page': page === pageNumber }"
      v-for="pageNumber in pages"
      :key="pageNumber"
      @click="$emit('changePage', pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    pages: {
      type: Number,
    },
    page: {
      type: Number,
      default: 1,
    },
  },
  methods: {
    // changePage(pageNumber) {
    //   console.log(pageNumber);
    //   this.$emit("click", pageNumber);
    // },
  },
};
</script>

<style scoped>
.page__wrapper {
  margin-top: 30px;
  display: flex;
  gap: 5px;
}
.page {
  padding: 10px 15px;
  border: 1px solid aqua;
  cursor: pointer;
}
.current-page {
  background-color: aqua;
}
</style>
