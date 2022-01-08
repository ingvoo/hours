<template>
  <section class="container">
    <h1 class="text-h1">Clients</h1>
    <article
      v-for="(client, index) in clients"
      :key="index"
      class="border-t mt-2 py-2"
    >
      <div class="flex justify-between">
        <div>
          <h2>{{ client.title }}</h2>
          <p>{{ client.description }}</p>
        </div>
        <div>
          <router-link
            :to="{ name: 'ClientEdit', params: { id: client.id } }"
            class="button button-neutral"
            >Edit</router-link
          >
          <button
            class="button button-danger ml-2"
            disabled
            title="not implemented"
          >
            Delete
          </button>
        </div>
      </div>
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
