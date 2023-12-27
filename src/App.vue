<template>
  <div class="app">
    <form @submit.prevent>
      <h4>Creating new post</h4>
      <input
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Title"
      />
      <input
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Desc"
      />
      <button class="btn" @click="createPost">Create</button>
    </form>
    <div class="post" v-for="post in posts">
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Desc:</strong> {{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "Jsjsjs", body: "Js js js js js js" },
        { id: 2, title: "Ararar", body: "Js js js js js js" },
        { id: 3, title: "Upupu", body: "Js js js js js js" },
      ],
      title: "",
      body: "",
    };
  },

  methods: {
    createPost() {
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
      this.title = "";
      this.body = "";
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
form {
  display: flex;
  flex-direction: column;
}
.post {
  margin-top: 10px;
  padding: 15px;
  border: 2px solid aqua;
}
.input {
  width: 100%;
  margin-top: 10px;
  padding: 10px 15px;
  border: 1px solid aqua;
}
.btn {
  margin-top: 10px;
  padding: 10px 15px;
  background: none;
  border: 1px solid aqua;
  color: #000;
  align-self: flex-end;
}
</style>
