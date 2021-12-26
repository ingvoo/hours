<template>
  <section class="container">
    <h1 class="text-h1">Clients</h1>
    <article
      v-for="(client, index) in clients"
      :key="index"
      class="border-t mt-2 py-2"
    >
      <h2>{{ client.title }}</h2>
      <p>{{ client.description }}</p>
    </article>
    <router-link class="inline-block button mt-4" to="/client-create">
      Create client
    </router-link>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    clients() {
      return this.$store.state.clients
    },
  },

  created() {
    this.$store.dispatch('getClients')
  },
})
</script>
