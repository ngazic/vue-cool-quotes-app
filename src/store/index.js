import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0,
    max: 10
  },
  mutations: {
    increaseCounterValue(state, value) {
      const val = isFinite(value) && value > 1 ? value : 1;
      if (state.value + val <= 10) {
        state.value += val;
      }
    },
    decreaseCounterValue(state, value) {
      const val = isFinite(value) && value > 1 ? value : 1;
      if (state.value - val >= 0) {
        state.value -= val;
      }
    }
  },
  actions: {
    decrementCounter({ commit }, decrementBy) {
      const decrement = decrementBy ? decrementBy : 1;
      commit("decreaseCounterValue", decrement);
    },
    incrementCounter({ commit }, incrementBy) {
      commit("increaseCounterValue", incrementBy);
    }
  },
  modules: {},
  getters: {
    getCounterValue: state => {
      return state.value;
    },
    maxCounterValue: state => {
      return state.max;
    }
  }
});
