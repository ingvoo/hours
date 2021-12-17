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
    <form class="mt-4" @submit.prevent="createEntry">
      <label>
        <span class="block">Client</span>
        <select class="mt-1" name="client" v-model="entry.clientId">
          <option value="">Pick a client</option>
          <option v-for="client in clients" :value="client.id" :key="client.id">
            {{ client.title }}
          </option>
        </select>
      </label>

      <!-- TODO: Make use of form select with object syntax and bind the id
        <form-select options="clients" label="Clients" v-model="entry.client /> 
      -->

      <div class="mt-3">
        <app-input label="Task" v-model="entry.task" />
      </div>

      <div class="mt-3">
        <app-input label="Duration" v-model="entry.duration" type="number" />
      </div>

      <div class="mt-3">
        <app-input label="Description" v-model="entry.description" />
      </div>
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
