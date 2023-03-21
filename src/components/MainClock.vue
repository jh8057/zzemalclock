<template>
  <div
    class="clock__wrapper"
    @mousemove="(e) => moveToolTip(e)"
    @mouseout="(e) => hideToolTip(e)"
  >
    <main-clock-hour />
    <main-clock-min />
    <main-clock-sec />
  </div>
  <div v-if="mouseOnClock" class="main__tooltip" :style="tooltipStyle">
    {{ date.toLocaleString() }}
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from "pinia";
import MainClockHour from "./MainClockHour.vue";
import MainClockMin from "./MainClockMin.vue";
import MainClockSec from "./MainClockSec.vue";
import { useDateStore } from "../stores/date";
import { onMounted, reactive, computed, ref } from "vue";

const dateStore = useDateStore();
const { date } = storeToRefs(dateStore);
const { updateDate } = dateStore;
onMounted(() => {
  updateDate;
});

const mousePosition = reactive({
  x: 0,
  y: 0,
});

const tooltipStyle = computed(() => {
  return {
    top: mousePosition.y - 32 + "px",
    left: mousePosition.x + 3 + "px",
  };
});

const mouseOnClock = ref(false);

const moveToolTip = (e: MouseEvent) => {
  mouseOnClock.value = true;
  mousePosition.x = e.clientX;
  mousePosition.y = e.clientY;
};

const hideToolTip = (e: MouseEvent) => {
  mouseOnClock.value = false;
};
</script>

<style scoped>
.clock__wrapper {
  width: var(--radiusSize);
  height: var(--radiusSize);
  padding: 30px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  background: var(--lightBlue);
  border-radius: 50%;
  border: solid 6px black;
}

.main__tooltip {
  position: fixed;
  background: gainsboro;
  padding: 7px;
  border-radius: 7px;
}
</style>
