<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <!-- <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/login">About</RouterLink>
      </nav>
    </div>
  </header> -->
  <!-- 123 -->
  <RouterView />
</template>
<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
