<template>
  <article class="flex justify-between border-t py-3">
    <div>
      <small>{{ item.date }}</small>
      <h3 class="text-lg">{{ client }}</h3>
      <h4>{{ item.task }}</h4>
      <p>{{ item.description }}</p>
    </div>
    <div class="flex items-center">
      <span>{{ item.duration }} minutes </span>
      <router-link
        :to="{ name: 'EntryEdit', params: { id: item.id } }"
        class="button button-neutral"
      >
        Edit
      </router-link>
      <button class="button button-danger" @click="deleteEntry(item.id)">
        Delete
      </button>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Client } from '../types'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: true,
    },
  },

  computed: {
    client() {
      const client = this.$store.state.clients.find(
        (client: Client) => client.id === this.item.clientId
      )

      if (client) {
        return client.title
      }

      return ''
    },
  },

  methods: {
    deleteEntry(id: string) {
      this.$store.dispatch('deleteEntry', id)
    },
  },

  created() {
    this.$store.dispatch('getClients')
  },
})
</script>
