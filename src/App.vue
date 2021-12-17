<template>
  <div class="dark:bg-gray-800 dark:text-white transition min-h-screen">
    <app-menu />
    <aside class="relative" id="notification-bar"></aside>
    <div class="py-16">
      <router-view />
    </div>
  </div>
  <app-footer class="mt-8" />
</template>

<script lang="ts">
import AppMenu from './components/AppMenu.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  components: {
    AppMenu,
    AppFooter,
  },
}
</script>
