<template>
  <div>
    <h1>Posts</h1>
    <my-input v-focus v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <!-- <my-button @click="showModal">Create post</my-button> -->
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
    <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>

<script>
import PostList from "../components/PostList.vue";
import PostForm from "../components/PostForm.vue";
import MyButton from "../components/UI/MyButton.vue";
import axios from "axios";
import MyPagination from "../components/UI/MyPagination.vue";
import { usePosts } from "../hooks/usePosts";
import useSortedPosts from "../hooks/useSortedPosts";
import useSortedAndSearchedPosts from "../hooks/useSortedAndSearchedPosts";
export default {
  components: {
    PostList,
    PostForm,
    MyButton,
    MyPagination,
  },
  data() {
    return {
      modalVisible: false,
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By description" },
      ],
    };
  },
  setup(props) {
    const { posts, totalPages, isPostLoading } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { searchQuery, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);

    return {
      posts,
      totalPages,
      isPostLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    };
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
