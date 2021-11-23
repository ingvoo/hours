<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-lg font-bold">Edit id: {{ id }}</h1>
      <label class="block mt-4" for="duration">Duration</label>
      <input id="duration" type="text" value="2" placeholder="00:00" />

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

export default defineComponent({
  // TODO: query the details from the ID
  computed: {
    id() {
      return this.$route.params.id
    },
  },
})
</script>
