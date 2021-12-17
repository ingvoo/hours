<template>
  <div>
    <div class="container">
      {{ $store.state.entry }}
      <h1 class="text-lg font-bold">Edit id: {{ id }}</h1>

      <form-input label="Client" v-model="entry.client" />
      <form-input label="Task" v-model="entry.task" />
      <form-input label="Duration" v-model="entry.duration" />
      <form-input label="Description" v-model="entry.description" />

      <div class="mt-4">
        <button class="button">Save</button>
        <!-- Temporary handler to go back -->
        <button class="button ml-2" @click="$router.go(-1)">Cancel</button>
      </div>
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
})
</script>
