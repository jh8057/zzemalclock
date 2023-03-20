<template>
  <div class="clock__hour" :style="clockHourStyle"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useDateStore } from "../stores/date";
const dateStore = useDateStore();
const { dateHour, dateMin } = storeToRefs(dateStore);

const clockHourStyle = computed(() => {
  return {
    transform: `translate(-50%, 0) rotate(${
      dateHour.value * 30 + dateMin.value * 0.5
    }deg)`,
  };
});
</script>

<style scoped>
.clock__hour {
  width: 5px;
  height: calc(var(--radiusSize) / 2);
  position: absolute;
  left: 50%;
  background: black;
  transform-origin: bottom;
  /* transform: translate(-50%, 0) rotate(0deg); */
  z-index: 1;
}
</style>
