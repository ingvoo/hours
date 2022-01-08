<template>
  <div class="container">
    <div class="flex items-center justify-between">
      <h2 class="text-h1">
        {{ currentDay }}
        <span v-if="isToday" class="text-small text-gray-400 ml-4">
          It's today
        </span>
      </h2>
      <div>
        <button class="button button-neutral" @click="prewDay">
          Previous day
        </button>
        <button class="button button-neutral ml-4" @click="nextDay">
          Next day
        </button>
      </div>
    </div>
    <section class="mt-4" v-if="entries.length >= 1">
      <entry-day v-for="entry in entries" :key="entry.id" :item="entry" />
    </section>
    <section v-else>
      <h2>There are no entries available yet</h2>
    </section>
    <router-link class="inline-block button mt-4" to="/entry-create">
      Create Entry
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { isToday, addDays, format, parseISO } from 'date-fns'
import EntryDay from '@/components/EntryDay.vue'

export default defineComponent({
  components: {
    EntryDay,
  },

  computed: {
    entries() {
      return this.$store.state.entries
    },
    isToday() {
      // TODO use a more modern way handling parameters
      // https://medium.com/vue-by-example/learn-quickly-passing-params-as-props-with-vue-router-f4905735b747
      const id: any = this.$route.params.id
      if (id !== undefined) {
        return isToday(new Date(parseISO(id)))
      } else {
        // we do this for now because without an id it is the current date
        return true
      }
    },
    currentDay() {
      const id: any = this.$route.params.id
      const stringPatternWeekday = 'EEEE dd MMMM yyyy'
      if (id === undefined) {
        return format(new Date(), stringPatternWeekday)
      } else {
        return format(new Date(parseISO(id)), stringPatternWeekday)
      }
    },
  },

  created() {
    this.$store.dispatch('getEntries')
  },

  methods: {
    nextDay() {
      const id: any = this.$route.params.id
      const stringPattern = 'yyyy-MM-dd'
      const current = id
        ? format(parseISO(id), stringPattern)
        : format(new Date(), stringPattern)
      const tomorrow = format(addDays(new Date(current), 1), stringPattern)
      this.$router.push(`/time/${tomorrow}`)
    },
    prewDay() {
      const id: any = this.$route.params.id
      const stringPattern = 'yyyy-MM-dd'
      const current = id
        ? format(parseISO(id), stringPattern)
        : format(new Date(), stringPattern)
      const yesterday = format(addDays(new Date(current), -1), stringPattern)
      this.$router.push(`/time/${yesterday}`)
    },
  },
})
</script>
