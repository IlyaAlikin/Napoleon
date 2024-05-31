<template>
  <div class="wrapper">
    <Header />
    <main>
      <RouterView />
      <!-- <Main /> -->
    </main>
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";

import Header from "./components/Header.vue";
import Main from "./pages/Main.vue";
</script>
<style scoped>
.wrapper {
  position: relative;
}
</style>
