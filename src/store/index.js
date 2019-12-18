import Vue from "vue";
import Vuex from "vuex";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    value: 0,
    max: 10,
    quotes: []
  },
  mutations,
  actions,
  modules: {},
  getters
});
