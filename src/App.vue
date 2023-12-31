<template>
  <div class="app">
    <h1>Posts</h1>
    <my-button @click="showModal" style="margin: 15px 0">Create post</my-button>
    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal>
    <post-list :posts="posts" @remove="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import PostList from "./components/PostList.vue";
import PostForm from "./components/PostForm.vue";
import MyButton from "./components/UI/MyButton.vue";
import axios from "axios";
export default {
  components: {
    PostList,
    PostForm,
    MyButton,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: false,
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
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (error) {
        alert(`Error: ${error}`);
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
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
