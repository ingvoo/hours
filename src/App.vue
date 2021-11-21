<template>
  <app-menu />
  <router-view class="mt-8" />
</template>

<script lang="ts">
import AppMenu from './components/AppMenu.vue'

export default {
  components: {
    AppMenu,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
