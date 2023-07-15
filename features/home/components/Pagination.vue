<template>
  <div class="border border-gray-300 rounded overflow-hidden inline-flex">
    <button
      v-for="p in Math.ceil(props.totalItems / props.itemsPerPage)"
      :key="p"
      type="button"
      class="border-gray-300"
      :class="{ active: props.modelValue === p }"
      @click="emit('update:modelValue', p)"
    >
      {{ p }}
    </button>
  </div>
</template>

<script lang="ts" setup>
type Props = {
  modelValue: number;
  totalItems: number;
  itemsPerPage: number;
};

const props = withDefaults(defineProps<Props>(), { totalItems: 0 });
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped>
button {
  color: var(--green-1);
  padding: 0.5rem 0.75rem;

  & + & {
    border-left-width: 1px;
  }

  &:hover {
    background-color: var(--gray-4);
    text-decoration: underline;
  }

  &.active {
    background-color: var(--green-1);
    color: white;
  }
}
</style>
