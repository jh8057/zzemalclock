<template>
  <div class="clock__min" :style="clockMinStyle"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useDateStore } from "../stores/date";
const dateStore = useDateStore();
const { dateMin } = storeToRefs(dateStore);

const clockMinStyle = computed(() => {
  return {
    transform: `translate(-50%, 0) rotate(${dateMin.value * 6}deg)`,
  };
});
</script>

<style scoped>
.clock__min {
  width: 5px;
  height: calc(var(--radiusSize) / 2);
  position: absolute;
  left: 50%;
  background: blue;
  transform-origin: bottom;
  /* transform: translate(-50%, 0) rotate(0deg); */
  z-index: 2;
}
</style>
