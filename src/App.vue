<template>
  <app-menu />
  <aside class="relative" id="notification-bar"></aside>
  <div class="mt-8">
    <router-view />
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
