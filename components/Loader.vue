<template>
  <div>
    <component
      :is="`${options.type || 'pulse'}-loader`"
      :size="options.size || '4px'"
      :color="options.color"
    />
  </div>
</template>

<script>
import DotLoader from "vue-spinner/src/DotLoader.vue";
import PulseLoader from "vue-spinner/src/PulseLoader.vue";
import ClipLoader from "vue-spinner/src/ClipLoader.vue";

export default {
  components: {
    DotLoader,
    PulseLoader,
    ClipLoader,
  },
  props: {
    options: {
      type: Object,
      default: () => ({
        type: "pulse",
        size: "4px",
        color: "var(--green-1)",
      }),
    },
  },
};
</script>
