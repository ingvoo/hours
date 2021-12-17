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
    <form class="mt-4 flow" @submit.prevent="createEntry">
      <form-select
        :options="clients"
        label="Clients"
        v-model="entry.clientId"
      />
      <form-input label="Task" v-model="entry.task" />
      <form-input label="Duration" v-model="entry.duration" type="number" />
      <form-input label="Description" v-model="entry.description" />
      <div>
        <button class="button button-neutral" @click="$router.go(-1)">
          Cancel
        </button>
        <button class="button inline-block ml-2" type="submit">
          Save entry
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { v4 as uuidv4 } from 'uuid'

import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'

export default defineComponent({
  components: {
    FormInput,
    FormSelect,
  },
  data() {
    return {
      success: false,
      entry: {
        id: '',
        clientId: '',
        task: '',
        duration: '',
        description: '',
        user: '',
      },
    }
  },

  created() {
    this.$store.dispatch('getClients')
  },

  computed: {
    clients() {
      return this.$store.state.clients
    },
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
        // TODO: we should route back to overview but before we need to implement a nicer feedback solution
        // this.$router.push('/')
      })
    },
  },
})
</script>
