<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/about')">About</my-button>
      <my-button @click="$router.push('/posts')">Posts</my-button>
      <my-button @click="$router.push('/store')">Store</my-button>
      <my-button @click="$router.push('/composition')">Composition</my-button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 40px;
  background-color: lightgrey;
  box-shadow: 2px 2px 4px grey;
}
.navbar > * {
  cursor: pointer;
}
.navbar__btns {
  display: flex;
  gap: 20px;
}
</style>
