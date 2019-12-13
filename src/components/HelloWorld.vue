<template>
  <div class="hello">
    <h1>{{ value }}</h1>
    <b-button @click="addQuote">++</b-button>
    <b-button @click="removeQuote">--</b-button>
  </div>
</template>

<script>
export default {
  props: {
    msg: String
  },
computed: {
    value() {
      // return this.$store.state.value;
      return this.$store.getters.getCounterValue;
    }
  },
  methods: {
    addQuote() {
      if (this.$store.state.value < 10) {
        this.$store.state.value++;
      }
    },
    removeQuote() {
      if (this.$store.state.value > 0) {
        this.$store.state.value--;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
