<template>
  <div class="container">
    <h1 class="text-h1">Edit Client</h1>
    <form @submit.prevent="editClient">
      <form-input label="title" v-model="client.title" />
      <form-input label="Description" v-model="client.description" />
      <div class="mt-4">
        <button class="button button-neutral" @click="$router.push('/clients')">
          Cancel
        </button>
        <button class="button inline-block ml-4" type="submit" disabled>
          Save client
        </button>
      </div>
    </form>
    <code class="code">
      <pre>{{ client }}</pre>
    </code>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import FormInput from '@/components/FormInput.vue'

export default defineComponent({
  components: {
    FormInput,
  },

  props: ['id'],

  computed: {
    client(): any {
      return this.$store.state.client
    },
  },

  created() {
    this.$store.dispatch('getClient', this.id)
  },

  // methods: {
  //   editClient() {
  //     this.$store.dispatch('editClient', this.client).then(() => {
  //       this.$router.push('/clients')
  //     })
  //   },
  // },
})
</script>
