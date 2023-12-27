<template>
  <div>
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
    };
  },

  methods: {},
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.post {
  margin-top: 10px;
  padding: 15px;
  border: 3px solid aqua;
}
</style>
