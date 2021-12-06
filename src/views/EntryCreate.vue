<template>
  <div class="container mx-auto">
    <form @submit.prevent="createEntry">
      <app-input label="client" v-model="entry.client" />
      <app-input label="task" v-model="entry.task" />
      <app-input label="Duration" v-model="entry.duration" type="number" />
      <app-input label="Description" v-model="entry.description" />
      <button type="submit">Create</button>
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
      this.$store.dispatch('createEntry', entry)
    },
  },
})
</script>

<style scoped></style>
