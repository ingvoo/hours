<template>
  <div class="container mx-auto">
    <h2 class="text-xl font-bold">19. November 2021</h2>
    <section class="mt-4">
      <entry-day v-for="item in items" :key="item.id" :item="item" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EntryDay from '@/components/EntryDay.vue'

export default defineComponent({
  data() {
    return {
      items: [
        {
          id: 0,
          client: 'Ljomi',
          task: 'Develop',
          // Maybe best to use either durtation or start/end timer and not both
          duration: 180,
          timerStart: null,
          timerEnd: null,
        },
        {
          id: 1,
          client: 'Fast Forward',
          task: 'Meeting',
          duration: 30,
          timerStart: null,
          timerEnd: null,
        },
      ],
    }
  },
  components: {
    EntryDay,
  },
})
</script>
