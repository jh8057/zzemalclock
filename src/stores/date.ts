import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useDateStore = defineStore("date", () => {
  const date = ref(new Date());
  const dateHour = computed(() => date.value.getHours());
  const dateMin = computed(() => date.value.getMinutes());
  const dateSec = computed(() => date.value.getSeconds());

  const updateDate = setInterval(() => {
    date.value = new Date();
  }, 1000);

  return { date, dateHour, dateMin, dateSec, updateDate };
});
