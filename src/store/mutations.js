/* eslint-disable */
import * as types from "./types";

export default {
  [types.MUTATE_INCREASE_COUNTER_VALUE]: function(state, value) {
    const val = isFinite(value) && value > 1 ? value : 1;
    if (state.value + val <= 10) {
      state.value += val;
    }
  },
  [types.MUTATE_DECREASE_COUNTER_VALUE]: function(state, value) {
    const val = isFinite(value) && value > 1 ? value : 1;
    if (state.value - val >= 0) {
      state.value -= val;
    }
  },
  [types.MUTATE_ADD_QUOTE]: function (state,quote) {
    // console.log('this is the mutation add qooute ');
    state.quotes.push(quote);
  }

}