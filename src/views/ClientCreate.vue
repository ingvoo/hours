<template>
  <div class="container">
    <h1 class="text-h1">New Client</h1>
    <form @submit.prevent="createClient">
      <form-input label="title" v-model="client.title" />
      <form-input label="Description" v-model="client.description" />
      <button class="button inline-block mt-3" type="submit">
        Save client
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { v4 as uuidv4 } from 'uuid'
import FormInput from '@/components/FormInput.vue'

export default defineComponent({
  components: {
    FormInput,
  },
  data() {
    return {
      success: false,
      client: {
        id: '',
        title: '',
        description: '',
      },
    }
  },

  methods: {
    createClient() {
      const client = {
        ...this.client,
        id: uuidv4(),
      }
      this.$store.dispatch('createClient', client).then(() => {
        this.success = true
        this.$router.push('/clients')
      })
    },
  },
})
</script>
