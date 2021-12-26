<template>
  <div class="container">
    <h2 class="text-h1">Projects</h2>
    <section class="mt-4" v-if="clients.length >= 1">
      <article
        v-for="client in clients"
        :key="client.id"
        class="mt-2 border-t py-2"
      >
        <h2>{{ client.title }}</h2>
        <ul class="py-2">
          <li v-for="(project, key) in client.projectsId" :key="key">
            <span class="block font-bold text-lg">{{ project }}</span>
          </li>
        </ul>
      </article>
    </section>
    <section v-else>
      <h2>There are no projects available</h2>
    </section>

    <!-- <router-link class="inline-block button mt-4" to="/project-create">
      Create Project
    </router-link> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  computed: {
    clients() {
      const allClients = this.$store.state.clients
      return allClients.filter((item: any) => item.projectsId.length)
    },
  },
  created() {
    this.$store.dispatch('getClients')
  },
})
</script>
