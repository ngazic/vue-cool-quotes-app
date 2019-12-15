import * as types from "./types";

export default {
  [types.GET_COUNTER_VALUE]: state => {
    return state.value;
  },
  [types.GET_MAX_COUNTER_VALUE]: state => {
    return state.max;
  }
};
