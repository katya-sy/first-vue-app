<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Jsjsjs", body: "Js js js js js js" },
        { id: 2, title: "Ararar", body: "Js js js js js js" },
        { id: 3, title: "Upupu", body: "Js js js js js js" },
      ],
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  margin: 0 auto;
  max-width: 1000px;
  padding: 20px;
}
</style>
