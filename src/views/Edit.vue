<template>
  <div>
    <div class="container mx-auto">
      <p class="text-center">Router id: {{ id }}</p>
      <div class="flex justify-center mt-4">
        <button>Save</button>
        <!-- Temporary handler to go back -->
        <!-- Nice would be to add smooth transition when routing -->
        <button class="ml-2" @click="$router.go(-1)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
// TODO: create that form

export default {
  computed: {
    // TODO: query the details from the ID
    id() {
      return this.$route.params.id
    },
  },
}
</script>
