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
