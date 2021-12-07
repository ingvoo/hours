<template>
  <div>
    <div class="container">
      {{ $store.state.entry }}
      <h1 class="text-lg font-bold">Edit id: {{ id }}</h1>

      <app-input label="Client" v-model="entry.client" />
      <app-input label="Task" v-model="entry.task" />
      <app-input label="Duration" v-model="entry.duration" />
      <app-input label="Description" v-model="entry.description" />

      <label class="block mt-4" for="description">Description</label>
      <textarea
        name="description"
        id="description"
        cols="30"
        rows="10"
      ></textarea>
      <div class="mt-4">
        <button class="button">Save</button>
        <!-- Temporary handler to go back -->
        <!-- Nice would be to add smooth transition when routing -->
        <button class="button ml-2" @click="$router.go(-1)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import AppInput from '@/components/AppInput.vue'

export default defineComponent({
  components: {
    AppInput,
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
