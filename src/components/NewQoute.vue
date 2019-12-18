<template>
  <b-container>
    <b-row align-v="center" >
      <b-col sm="8" md="9" lg="9">
      <b-form-textarea
      placeholder="Add new qoute"
      :state="text.length >= 3"
      v-model="text"
      :disabled="counter >=10"
      rows="3"
      max-rows="8"
      ></b-form-textarea>
      </b-col>
      <b-col sm="4" md="3" lg="3">
      <label for="textarea-auto-height">Save or remove qoute :</label>
      <hr>  
        <b-button variant="success" :disabled="counter >=10 || text.length <3" @click="addNewQuote">ADD</b-button>
        <b-button variant="danger"  @click="clear">CLEAR</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {mapActions} from "vuex";
import {mapGetters} from "vuex";
import * as types from "../store/types";

export default {
  data() {
    return {
    text: ''
    }
  },
  computed: {
    ...mapGetters({
      counter: types.GET_COUNTER_VALUE
    })
  },
  methods: {
    ...mapActions({
      increaseCounter: types.ACTION_INCREASE_COUNTER_VALUE,
      addQoute: types.ACTION_ADD_QUOTE
    }),
    addNewQuote: function() {
      this.increaseCounter();
      //eslint-disable-next-line no-console
      console.log('added new qoute successfully')
      let iD = this.$store.state.quotes.length;
      //eslint-disable-next-line no-console
      console.log(this);
      this.addQoute({id: iD, text: this.text});
      this.$data.text = "";
    },
    clear: function() {
      this.text = '';
    }
  }
};
</script>

<style scoped lang="scss">

</style>

