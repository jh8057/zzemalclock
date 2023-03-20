<template>
  <div class="clock__wrapper">
    <main-clock-hour />
    <main-clock-min />
    <main-clock-sec />
  </div>
</template>

<script setup lang="ts">
import MainClockHour from "./MainClockHour.vue";
import MainClockMin from "./MainClockMin.vue";
import MainClockSec from "./MainClockSec.vue";
import { useDateStore } from "../stores/date";
import { onMounted } from "vue";

const dateStore = useDateStore();
const { updateDate } = dateStore;
onMounted(() => {
  updateDate;
});
</script>

<style scoped>
.clock__wrapper {
  background: skyblue;
  width: var(--radiusSize);
  height: var(--radiusSize);
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  border-radius: 50%;
}
</style>
