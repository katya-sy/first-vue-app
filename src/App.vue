<template>
  <div class="app">
    <h1>Posts</h1>
    <my-button @click="showModal" style="margin: 15px 0">Create post</my-button>
    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal>
    <post-list :posts="posts" @remove="removePost" />
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import MyButton from "./components/UI/MyButton.vue";
export default {
  components: {
    PostList,
    PostForm,
    MyButton,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "Jsjsjs", body: "Js js js js js js" },
        { id: 2, title: "Ararar", body: "Js js js js js js" },
        { id: 3, title: "Upupu", body: "Js js js js js js" },
      ],
      modalVisible: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
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
