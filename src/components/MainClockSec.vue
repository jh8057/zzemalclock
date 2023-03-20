<template>
  <div class="clock__sec"></div>
</template>

<script setup lang="ts"></script>

<style scoped>
.clock__sec {
  width: 5px;
  height: 250px;
  position: absolute;
  left: 50%;
  background: red;
  transform-origin: bottom;
  transform: translate(-50%, 0) rotate(120deg);
  z-index: 3;
}
</style>
