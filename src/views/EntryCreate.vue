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
import AppInput from '@/components/AppInput.vue'

import { v4 as uuidv4 } from 'uuid'

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
      this.entry.id = uuidv4()
      this.entry.user = this.$store.state.user
      console.log(this.entry)
    },
  },
})
</script>

<style scoped></style>
