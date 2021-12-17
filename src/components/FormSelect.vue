<template>
  <label>
    <span class="block">{{ label }}</span>
    <select
      class="mt-1"
      :value="modelValue"
      v-bind="{
        ...$attrs,
        onChange: ($event) => $emit('update:modelValue', $event.target.value),
      }"
    >
      <option value="" selected>{{ placeholder }}</option>
      <option v-for="option in options" :value="option.id" :key="option.id">
        {{ option.title }}
      </option>
    </select>
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
    placeholder: {
      type: String,
      default: 'Please select',
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },
})
</script>
