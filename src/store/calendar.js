import { daysWeek } from "@/data/days-week";

const state = {
  events: "hello",
  date: null,
  year: null,
  month: null,
  count_days: null,
  empty_days: null,
};

const mutations = {
  CHANGE_DATE(state, value) {
    state.date = value;
  },
  CHANGE_YEAR(state, value) {
    state.year = value;
  },
  CHANGE_MONTH(state, value) {
    state.month = value;
  },
  CHANGE_COUNT_DAYS(state, value) {
    state.count_days = value;
  },
  CHANGE_EMPTY_DAYS(state, value) {
    state.empty_days = value;
  },
};

const actions = {
  loadCalendar({ commit }, anotherMonth = null) {
    console.log(anotherMonth);
    const date = new Date();
    if (anotherMonth) date.setMonth(anotherMonth - 1);
    const _year = date.getFullYear();
    const _month = date.getMonth();
    const _countDays = new Date(_year, _month + 1, 0).getDate();

    const _firstDay = new Date(_year, _month, 1);
    const _dateString = _firstDay.toLocaleDateString("ru-ru", {
      weekday: "long",
      year: "numeric",
      month: "numeric",
      day: "numeric",
    });
    const _emptyDays = daysWeek.indexOf(_dateString.split(", ")[0]);
    commit("CHANGE_DATE", date);
    commit("CHANGE_MONTH", _month + 1);
    commit("CHANGE_YEAR", _year);
    commit("CHANGE_COUNT_DAYS", _countDays);
    commit("CHANGE_EMPTY_DAYS", _emptyDays);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
