<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8">
          <b-progress
            :value="getCounterValue"
            variant="success"
            :max="maxCounterValue"
            striped
            animated
            show-value
            class="h-100"
          ></b-progress>
        </b-col>
        <b-col cols="12" md="4">
          <h3>Quotes added : {{ getCounterValue }}</h3>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import * as types from "../../store/types";
export default {
  data() {
    return {
      // value: 0,
    };
  },
  computed: {
   ...mapGetters({
     getCounterValue: types.GET_COUNTER_VALUE,
     maxCounterValue: types.GET_MAX_COUNTER_VALUE
   })
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.red {
  background: red;
}

.green {
  background: green;
}
</style>
