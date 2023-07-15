<template>
  <div>
    <button
      v-for="p in Math.ceil(props.itemsPerPage / props.totalPages)"
      type="button"
      :class="{ active: props.modelValue === p }"
      @click="emit('update:modelValue', p)"
    >
      {{ p }}
    </button>
  </div>
</template>

<script setup lang="ts">
type Props = {
  modelValue: number;
  totalPages: number;
  itemsPerPage: number;
};

const props = withDefaults(defineProps<Props>(), { totalPages: 0 });
const emit = defineEmits(["update:modelValue"]);
</script>

<style scoped></style>
