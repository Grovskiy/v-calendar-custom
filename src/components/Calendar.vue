<template>
  <div class="calendar">
    <div class="calendar__title">My Calendar</div>
    <CalendarHead />
    <CalendarNavigation />
    <CalendarBody />
  </div>
</template>

<script>
import CalendarHead from "@/components/CalendarHead";
import CalendarNavigation from "@/components/CalendarNavigation";
import CalendarBody from "@/components/CalendarBody";
export default {
  name: "Calendar",
  components: {
    CalendarHead,
    CalendarNavigation,
    CalendarBody,
  },
};
</script>

<style scoped lang="scss">
.calendar {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px 0 0;
  &__title {
    font-size: 2em;
  }
}
</style>
