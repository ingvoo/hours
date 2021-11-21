<template>
  <div class="flex justify-between border-t py-3">
    <div>
      <h3 class="text-lg font-bold">{{ item.client }}</h3>
      <h4 class="font-bold">{{ item.task }}</h4>
    </div>
    <div class="flex items-center">
      <span>{{ item.duration }} minutes </span>
      <button class="button ml-2" @click="entryStart(item.id)">Start</button>
      <button class="button ml-2" @click="entryEdit(item.id)">
        Edit item {{ item.id }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: false,
    },
  },
  methods: {
    // TODO: What to do if a user pauses the times?
    // entryStart(id: number) {
    // TODO: filter the collection by the id not just pass it in there.
    // const item: object = this.items[id]
    // item.timerStart = new Date.now();
    // },

    // TODO: Enable TS again and refactor to this
    // entryEdit(id: number) {
    //   this.$router.push(`/edit/${id}`)
    // },

    entryEdit() {
      this.$router.push(`/edit/${this.item?.id}`)
    },
  },
}
</script>
