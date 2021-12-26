<template>
  <div class="container">
    <h2 class="text-h1">19. November 2021</h2>
    <section class="mt-4" v-if="entries.length >= 1">
      <entry-day v-for="entry in entries" :key="entry.id" :item="entry" />
    </section>
    <section v-else>
      <h2>There are no entries available yet</h2>
    </section>

    <router-link class="inline-block button mt-4" to="/entry-create"
      >Create Entry</router-link
    >
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EntryDay from '@/components/EntryDay.vue'

export default defineComponent({
  components: {
    EntryDay,
  },

  computed: {
    entries() {
      return this.$store.state.entries
    },
  },

  created() {
    this.$store.dispatch('getEntries')
  },
})
</script>
