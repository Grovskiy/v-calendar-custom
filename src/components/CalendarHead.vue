<template>
  <ul class="calendar-head">
    <li v-for="(item, key) in daysWeek" :key="key" class="calendar-head__item">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import { daysWeek } from "@/data/days-week";
export default {
  name: "CalendarHead",
  data: () => ({
    daysWeek,
  }),
};
</script>

<style scoped lang="scss">
.calendar-head {
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  background: #49617b;
  list-style-type: none;

  &__item {
    color: #fff;
    font-size: 1.2em;
    width: 110px;
    text-align: left;
    border: 1px solid #000;
    border-radius: 4px;
  }
}
</style>
