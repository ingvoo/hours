<template>
  <div>
    <div class="container mx-auto">
      <p class="text-center">Edit id: {{ id }}</p>
      <label class="block" for="duration">Duration</label>
      <input type="text" value="2" placeholder="00:00" />
      <div class="flex justify-center mt-4">
        <button class="button">Save</button>
        <!-- Temporary handler to go back -->
        <!-- Nice would be to add smooth transition when routing -->
        <button class="button ml-2" @click="$router.go(-1)">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script>
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
