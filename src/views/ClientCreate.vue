<template>
  <div class="container">
    <h1 class="text-xl font-bold">New Client</h1>

    <form @submit.prevent="createClient">
      <app-input label="title" v-model="client.title" />
      <app-input label="Description" v-model="client.description" />
      <button class="button inline-block mt-3" type="submit">
        Save client
      </button>
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
      client: {
        id: '',
        title: '',
        description: '',
        user: '',
      },
    }
  },

  methods: {
    createClient() {
      const client = {
        ...this.client,
        id: uuidv4(),
        user: this.$store.state.user,
      }
      this.$store.dispatch('createClient', client).then(() => {
        this.success = true
        this.$router.push('/')
      })
    },
  },
})
</script>
