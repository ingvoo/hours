<template>
  <div>
    <div class="container">
      <h1 class="text-h1">Entry: {{ id }}</h1>
      <form-input label="Client" v-model="entry.client" />
      <form-input label="Task" v-model="entry.task" />
      <form-input label="Duration" v-model="entry.duration" />
      <form-input label="Description" v-model="entry.description" />

      <div class="mt-4">
        <button class="button button-neutral" @click="$router.go(-1)">
          Cancel
        </button>
        <button class="button ml-2" @click="updateEntry">Save</button>
        <!-- Temporary handler to go back -->
      </div>

      <code class="block text-xs p-4 my-2 bg-gray-100">
        <pre>{{ $store.state.entry }}</pre>
      </code>
    </div>
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
    entry() {
      return this.$store.state.entry
    },
  },

  created() {
    this.$store.dispatch('getEntry', this.id)
  },

  methods: {
    updateEntry() {
      this.$store.dispatch('updateEntry', this.id).then(() => {
        this.$router.push('/')
      })
    },
  },
})
</script>
