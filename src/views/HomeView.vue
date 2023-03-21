<script setup lang="ts">
import MainClock from "../components/MainClock.vue";
</script>

<template>
  <main>
    <h1>Clock</h1>
    <main-clock />
    <a
      class="main__link"
      href="https://github.com/jh8057/zzemalclock"
      target="_blank"
      >소스 코드 보기(github)</a
    >
  </main>
</template>

<style scoped>
main {
  margin: auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
}

.main__link {
  width: 100px;
  color: white;
  text-decoration: none;
  text-align: center;
  justify-content: center;
  margin: auto;
  margin-top: 40px;
  border-radius: 7px;
  transition: transform 0.3s;
  padding: 0.75em 1.75em;
  background-image: linear-gradient(135deg, var(--darkBlue), var(--lightBlue));
}

.main__link:hover {
  transform: translateX(20px);
}
</style>
