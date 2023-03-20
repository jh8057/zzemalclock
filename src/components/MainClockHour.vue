<template>
  <div class="clock__hour"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.clock__hour {
  width: 5px;
  height: 250px;
  position: absolute;
  left: 50%;
  background: black;
  transform-origin: bottom;
  transform: translate(-50%, 0) rotate(90deg);
  z-index: 1;
}
</style>
