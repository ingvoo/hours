<template>
  <label>
    <span class="block">{{ label }}</span>
    <input
      v-bind="$attrs"
      class="block mt-1"
      :placeholder="label"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
  methods: {
    // TODO: move input listener here to emit
    // TODO: debounce the event
    // onInput() {
    // }
  },
})
</script>
