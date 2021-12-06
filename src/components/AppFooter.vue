<template>
  <footer class="bg-gray-100 py-8">
    <div class="container mx-auto">
      <h2 class="font-bold">Vuex store</h2>
      <code class="text-xs mt-4 block">
        <pre>{{ $store.state }}</pre>
      </code>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped></style>
