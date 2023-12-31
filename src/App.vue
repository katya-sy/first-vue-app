<template>
  <div class="app">
    <h1>Posts</h1>
    <div class="app__btns">
      <my-button @click="showModal">Create post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal>
    <post-list
      :posts="sortedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
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
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By description" },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
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
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
