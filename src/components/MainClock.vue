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
</script>

<style scoped>
.clock__wrapper {
  background: skyblue;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  text-align: center;
  margin: auto;
  border-radius: 50%;
}
</style>
