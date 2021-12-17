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
      <option
        v-for="option in options"
        :value="option"
        :key="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
  </label>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // methods: {
  //   handleOnChange(event) {
  //     return this.$emit('update:modelValue', event.target.value)
  //   },
  // },
  props: {
    label: {
      type: String,
      required: true,
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

<style scoped></style>
