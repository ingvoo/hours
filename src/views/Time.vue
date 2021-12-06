<template>
  <div class="container mx-auto">
    <h2 class="text-xl font-bold">19. November 2021</h2>
    <section class="mt-4">
      <entry-day v-for="entry in entries" :key="entry.id" :item="entry" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EntryDay from '@/components/EntryDay.vue'

import HoursService from '@/services/HoursService'

// interface Timers {
//   id: string
//   client: string
//   task: string
//   duration?: number
//   timerStart?: number
//   timerEnd?: number
// }

export default defineComponent({
  data() {
    return {
      entries: [
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

  // TODO: Show/hide loader after call is finished
  // TODO: Handle error better with a visual feedback
  created() {
    HoursService.getEntries()
      .then((response) => {
        this.entries = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  },
})
</script>
