<template>
  <div class="flex justify-between border-t py-3">
    <div>
      <h3 class="text-lg font-bold">{{ item?.client }}</h3>
      <h4 class="font-bold">{{ item?.task }}</h4>
    </div>
    <div class="flex items-center">
      <span>{{ item?.duration }} minutes </span>
      <!-- <button class="button ml-2" @click="entryStart(item?.id)">Start</button> -->
      <router-link
        :to="{ name: 'EntryEdit', params: { id: item.id } }"
        class="button ml-2"
      >
        Edit
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
})
</script>
