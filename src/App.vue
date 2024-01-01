<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "./components/UI/Navbar.vue";

export default { components: { Navbar } };
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
