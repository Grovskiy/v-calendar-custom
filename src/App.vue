<template>
  <div id="app">
    <Calendar />
  </div>
</template>

<script>
import Calendar from "@/components/Calendar.vue";
import "@/assets/style/index.scss";
import { mapActions } from "vuex";

export default {
  name: "App",
  components: {
    Calendar,
  },
  mounted() {
    this.loadCalendar();
  },
  methods: {
    ...mapActions("calendar", ["loadCalendar"]),
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px;
}
</style>
