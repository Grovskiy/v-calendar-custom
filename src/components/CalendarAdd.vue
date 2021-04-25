<template>
  <div class="calendar-add">
    <div class="calendar-add__label">title</div>
    <input type="text" v-model="event.title" class="calendar-add__input" />
    <div class="calendar-add__label">date</div>
    <input type="date" v-model="event.date" class="calendar-add__input" />
    <div class="calendar-add__label">names</div>
    <input type="text" v-model="event.names" class="calendar-add__input" />
    <div class="calendar-add__label">description</div>
    <input
      type="text"
      v-model="event.description"
      class="calendar-add__input"
    />
    <button @click="add">Add</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "CalendarAdd",
  data: () => ({
    event: {
      title: null,
      date: null,
      names: null,
      description: null,
    },
  }),
  methods: {
    ...mapActions("calendar", ["addEvent"]),
    add() {
      this.addEvent(this.event);
      this.event = { title: null, date: null, names: null, description: null };
    },
  },
};
</script>

<style scoped lang="scss">
.calendar-add {
  text-align: left;
  &__label {
    display: block;
  }
  &__input {
    display: block;
    margin: 0 0 10px;
  }
}
</style>
