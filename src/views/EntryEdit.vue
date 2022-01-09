<template>
  <div>
    <div class="container">
      <h1 class="text-h1">Entry: {{ id }}</h1>
      <form-select label="Client" v-model="entry.clientId" :options="clients" />
      <form-input label="Task" v-model="entry.task" />
      <form-input label="Date" v-model="entry.date" type="date" />
      <form-input label="Duration" v-model="entry.duration" />
      <form-input label="Description" v-model="entry.description" />

      <div class="mt-4">
        <button class="button button-neutral" @click="$router.push('/')">
          Cancel
        </button>
        <button class="button" @click="updateEntry">Save</button>
      </div>

      <code class="code">
        <pre>{{ entry }}</pre>
      </code>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { Entry } from '../types'

import FormInput from '@/components/FormInput.vue'
import FormSelect from '@/components/FormSelect.vue'

export default defineComponent({
  components: {
    FormInput,
    FormSelect,
  },

  props: ['id'],

  computed: {
    entry(): Entry {
      return this.$store.state.entry
    },
    clients() {
      return this.$store.state.clients
    },
  },

  created() {
    this.$store.dispatch('getEntry', this.id)
    this.$store.dispatch('getClients')
  },

  methods: {
    updateEntry() {
      const payload = {
        id: this.id,
        entry: { ...this.entry },
      }
      this.$store.dispatch('updateEntry', payload).then(() => {
        this.$router.push('/')
      })
    },
  },
})
</script>
