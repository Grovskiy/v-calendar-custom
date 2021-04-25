<template>
  <div class="calendar-body">
    <template v-if="empty_days">
      <div
        v-for="key in empty_days"
        :key="key"
        class="calendar-body__cell calendar-body__cell_empty"
      ></div>
    </template>
    <div v-for="item in cells_days" :key="item.id" class="calendar-body__cell">
      {{ item.day }}
      <div v-if="item.events">
        <div
          v-for="(item, key) in item.events"
          :key="key"
          class="calendar-body__accent"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { daysWeek } from "@/data/days-week";
import { mapState } from "vuex";
export default {
  name: "CalendarBody",
  data: () => ({
    daysWeek,
  }),
  computed: {
    ...mapState("calendar", [
      "date",
      "month",
      "day",
      "year",
      "count_days",
      "empty_days",
      "cells_days",
    ]),
  },
};
</script>

<style scoped lang="scss">
.calendar-body {
  display: flex;
  flex-wrap: wrap;

  &__cell {
    width: 118px;
    height: 70px;
    margin: 4px;
    border: 1px solid #000;

    &_empty {
      background: gray;
    }
  }
  &__accent {
    color: red;
    font-weight: 500;
  }
}
</style>
