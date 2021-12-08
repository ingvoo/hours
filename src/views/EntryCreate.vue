<template>
  <teleport to="#notification-bar">
    <div
      v-if="success"
      class="absolute container mx-auto max-w-4xl -inset-x-full top-2"
    >
      <p class="px-4 py-3 bg-green-600 text-white font-bold rounded shadow-2xl">
        New entry created 👍
      </p>
    </div>
  </teleport>

  <div class="container">
    <h1 class="text-xl font-bold">Create entry</h1>

    <form @submit.prevent="createEntry">
      <app-input label="client" v-model="entry.client" />
      <app-input label="task" v-model="entry.task" />
      <app-input label="Duration" v-model="entry.duration" type="number" />
      <app-input label="Description" v-model="entry.description" />
      <button class="button inline-block mt-3" type="submit">Save entry</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { v4 as uuidv4 } from 'uuid'

import AppInput from '@/components/AppInput.vue'

export default defineComponent({
  components: {
    AppInput,
  },
  data() {
    return {
      success: false,
      // clients: ['arkio', 'fastforward', 'ljomi'],
      entry: {
        id: '',
        client: '',
        task: '',
        duration: '',
        description: '',
        user: '',
      },
    }
  },

  methods: {
    createEntry() {
      const entry = {
        ...this.entry,
        id: uuidv4(),
        user: this.$store.state.user,
      }
      this.$store.dispatch('createEntry', entry).then(() => {
        this.success = true
        this.$router.push('/')
      })
    },
  },
})
</script>

<style scoped></style>
