import { daysWeek } from "@/data/days-week";
import formattedDate from "@/helpers/formattedDate";

const _testData = [
  { date: "2021-01-08", title: "Another Task2" },
  { date: "2021-02-08", title: "Task" },
  { date: "2021-03-09", title: "Another Task" },
  { date: "2021-04-08", title: "Another Task2" },
  { date: "2021-05-08", title: "Task" },
  { date: "2021-06-09", title: "Another Task" },
  { date: "2021-07-09", title: "Another Task" },
  { date: "2021-08-09", title: "Another Task" },
  { date: "2021-09-09", title: "Another Task" },
  { date: "2021-10-09", title: "Another Task" },
  { date: "2021-11-09", title: "Another Task" },
  { date: "2021-12-09", title: "Another Task" },
];
const _events = localStorage.getItem("events")
  ? JSON.parse(localStorage.getItem("events"))
  : [..._testData];

const state = {
  events: [..._events],
  date: null,
  year: null,
  month: null,
  day: null,
  count_days: null,
  empty_days: null,
  cells_days: [],
};

const mutations = {
  SET_DATE(state, value) {
    state.date = value;
  },
  SET_YEAR(state, value) {
    state.year = value;
  },
  SET_MONTH(state, value) {
    state.month = value;
  },
  SET_DAY(state, value) {
    state.day = value;
  },
  SET_COUNT_DAYS(state, value) {
    state.count_days = value;
  },
  SET_EMPTY_DAYS(state, value) {
    state.empty_days = value;
  },
  SET_CELLS_DAYS(state, value) {
    state.cells_days = value;
  },
  SET_EVENTS(state, value) {
    state.events = [...state.events, value];
    localStorage.setItem("events", JSON.stringify(state.events));
  },
  SET_CELLS(state, value) {
    const index = state.cells_days.findIndex((x) => x.date === value.date);
    state.cells_days[index].events = [...state.cells_days[index].events, value];
  },
};

const actions = {
  loadCalendar({ commit, state }, anotherMonth = null) {
    const date = new Date();
    if (anotherMonth) date.setMonth(anotherMonth - 1);
    const _year = date.getFullYear();
    const _month = date.getMonth();
    const _day = date.getDate();
    const _countDays = new Date(_year, _month + 1, 0).getDate();

    const _firstDay = new Date(_year, _month, 1);
    const _dateString = _firstDay.toLocaleDateString("ru-ru", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const _emptyDays = daysWeek.indexOf(_dateString.split(", ")[0]);
    commit("SET_DATE", date);
    commit("SET_MONTH", _month + 1);
    commit("SET_DAY", _day);
    commit("SET_YEAR", _year);
    commit("SET_COUNT_DAYS", _countDays);
    commit("SET_EMPTY_DAYS", _emptyDays);
    let _cells_days = [];
    for (let i = 1; i <= _countDays; i++) {
      const current_day = formattedDate(i, _month + 1, _year);
      _cells_days.push({
        id: "id: " + i,
        day: i,
        date: current_day,
        events: state.events.filter((e) => e.date === current_day),
      });
    }
    commit("SET_CELLS_DAYS", _cells_days);
  },
  addEvent({ commit }, value) {
    if (value.date) {
      commit("SET_EVENTS", value);
      commit("SET_CELLS", value);
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
