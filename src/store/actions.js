import * as types from "./types";

export default {
  [types.ACTION_DECREASE_COUNTER_VALUE]: ({ commit }, decrementBy) => {
    const decrement = decrementBy ? decrementBy : 1;
    commit(types.MUTATE_DECREASE_COUNTER_VALUE, decrement);
  },
  [types.ACTION_INCREASE_COUNTER_VALUE]: ({ commit }, incrementBy) => {
    commit(types.MUTATE_INCREASE_COUNTER_VALUE, incrementBy);
  },
  [types.ACTION_ADD_QUOTE]: ({ commit }, quote) => {
    commit(types.MUTATE_ADD_QUOTE, quote);
  }
};
