<template>
  <div class="clock__min"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.clock__min {
  width: 5px;
  height: 250px;
  position: absolute;
  left: 50%;
  background: blue;
  transform-origin: bottom;
  transform: translate(-50%, 0) rotate(270deg);
  z-index: 2;
}
</style>
