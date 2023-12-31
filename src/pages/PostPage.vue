<template>
  <div>
    <h1>Posts</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button @click="showModal">Create post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <my-modal v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal>
    <post-list
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <my-pagination
      @changePage="changePage"
      :page="page"
      :pages="totalPages"
    ></my-pagination> -->
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import MyButton from "../components/UI/MyButton.vue";
import axios from "axios";
import MyPagination from "../components/UI/MyPagination.vue";
export default {
  components: {
    PostList,
    PostForm,
    MyButton,
    MyPagination,
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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        alert(`Error: ${error}`);
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        alert(`Error: ${error}`);
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
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
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
  },
};
</script>

<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
</style>
