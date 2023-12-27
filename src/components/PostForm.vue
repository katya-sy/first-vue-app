<template>
  <form @submit.prevent>
    <h4>Creating new post</h4>
    <input v-model="post.title" class="input" type="text" placeholder="Title" />
    <input v-model="post.body" class="input" type="text" placeholder="Desc" />
    <my-button
      style="align-self: flex-end; margin-top: 10px"
      class="btn"
      @click="createPost"
      >Create</my-button
    >
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid aqua;
}
</style>
