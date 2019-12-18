<template>
<b-container v-if="quotes.length > 0">
  <h2 class="title">Your beautiful quotes are:</h2>
  <b-row align-h="center">
    <b-col sm="6" md="3" class="cool-card" v-for="quote in quotes" v-bind:key="quote.id">
       <b-form-textarea  class="cool-text" rows="3" max-rows="10"  plaintext :value="quote.text | addQuotesToText"></b-form-textarea>
    </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapGetters } from "vuex";
import * as types from "../store/types";

export default {
  computed: {
    ...mapGetters({
      quotes: types.GET_QUOTES
    })
  },
  filters: {
    addQuotesToText: value => {
      return '"' + value + '"';
    }
  }
}
</script>

<style lang="scss" scoped>
.cool-card {
  box-shadow: 5px 5px 5px;
  margin: 10px;
  border-radius: 0 20px 0 20px ;

  .cool-text {
    font-family: "coolFont";
    padding: 10px;
    cursor: pointer;
  }
}
</style>