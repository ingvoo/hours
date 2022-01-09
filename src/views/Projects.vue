<template>
  <div class="container">
    <h2 class="text-h1">Projects</h2>
    <section class="mt-4" v-if="clients.length >= 1">
      <article
        v-for="client in clients"
        :key="client.id"
        class="mt-2 border-t border-slate-300 py-4"
      >
        <h2 class="dark:text-slate-300">
          {{ client.title }}
        </h2>
        <ul>
          <li
            v-for="(project, key) in client.projectsId"
            :key="key"
            class="flex justify-between items-baseline mt-2"
          >
            <h3 class="text-lg">{{ project }}</h3>
            <div>
              <button class="button button-neutral" disabled>Edit</button>
              <button class="button button-danger" disabled>Delete</button>
            </div>
          </li>
        </ul>
      </article>
    </section>
    <section v-else>
      <h2>There are no projects available</h2>
    </section>

    <router-link class="inline-block button mt-4" to="/project-create">
      Create Project
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Client } from '../types'

export default defineComponent({
  computed: {
    clients() {
      const allClients = this.$store.state.clients
      return allClients.filter((item: Client) => item.projectsId.length)
    },
  },
  created() {
    this.$store.dispatch('getClients')
  },
})
</script>
