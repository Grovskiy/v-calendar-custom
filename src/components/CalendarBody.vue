<template>
  <div class="calendar-body">
    {{ date }}
    <br />
    month: {{ month }}
    <br />
    empty_days: {{ empty_days }}
    <br />
    count_days: {{ count_days }}
    <br />
    year: {{ year }}
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
      "year",
      "count_days",
      "empty_days",
    ]),
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      console.log("init");
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
