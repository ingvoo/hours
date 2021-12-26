<template>
  <header class="py-3">
    <nav class="container">
      <div class="flex items-center justify-between">
        <ul class="flex items-center mr-4">
          <li>
            <router-link class="font-bold text-lg" to="/">Time</router-link>
          </li>
          <li class="ml-6">
            <router-link class="font-bold text-lg" to="/projects">
              Projects
            </router-link>
          </li>
          <li class="ml-6">
            <router-link class="font-bold text-lg" to="/clients">
              Clients
            </router-link>
          </li>
        </ul>
        <button @click="toggleDarkMode" class="button text-black">
          Dark Mode
        </button>
      </div>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  methods: {
    toggleDarkMode() {
      document.body.classList.toggle('dark')
    },
  },

  created() {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      document.body.classList.add('dark')
    }
  },
})
</script>
