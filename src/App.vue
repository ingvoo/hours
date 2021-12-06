<template>
  <app-menu />
  <router-view class="mt-8" />
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
