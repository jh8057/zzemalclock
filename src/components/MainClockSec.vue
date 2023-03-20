<template>
  <div class="clock__sec" :style="clockSecStyle"></div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import { computed } from "vue";
import { useDateStore } from "../stores/date";
const dateStore = useDateStore();
const { dateSec } = storeToRefs(dateStore);

const clockSecStyle = computed(() => {
  return {
    transform: `translate(-50%, 0) rotate(${dateSec.value * 6}deg)`,
  };
});
</script>

<style scoped>
.clock__sec {
  width: 5px;
  height: calc(var(--radiusSize) / 2);
  position: absolute;
  left: 50%;
  background: red;
  transform-origin: bottom;
  /* transform: translate(-50%, 0) rotate(0deg); */
  z-index: 33;
}
</style>
