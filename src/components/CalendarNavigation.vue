<template>
  <div class="calendar-navigation">
    <button @click="prev">prev</button>
    {{ this.currentMonth }}
    <button @click="next">next</button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  name: "CalendarNavigation",
  data: () => ({
    currentMonth: 1,
  }),
  computed: {
    ...mapState("calendar", ["events", "month", "year"]),
  },
  watch: {
    month() {
      this.currentMonth = this.month;
    },
  },
  mounted() {
    this.currentMonth = this.month;
  },
  methods: {
    ...mapActions("calendar", ["loadCalendar"]),
    prev() {
      if (this.currentMonth > 1) {
        this.currentMonth -= 1;
        this.loadCalendar(this.currentMonth);
      }
    },
    next() {
      if (this.currentMonth < 12) {
        this.currentMonth += 1;
        this.loadCalendar(this.currentMonth);
      }
    },
  },
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
