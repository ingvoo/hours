<template>
  <div class="container mx-auto">
    <h2 class="text-xl font-bold">19. November 2021</h2>
    <div class="flex justify-between border-t mt-4 py-2">
      <div>
        <h3 class="text-xl font-bold">Ljomi</h3>
        <h4 class="text-lg font-bold">Learning Vue 3 with TS</h4>
      </div>
      <div class="flex items-center">
        <span>{{ counter }} Minutes </span>
        <button class="ml-2 border p-2" @click="timerStart">Start</button>
        <button class="ml-2 border p-2">Edit</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      counter: 120,
    }
  },
  methods: {
    timerStart() {
      this.counter++
    },
  },
}
</script>
