<template>
  <div>
    <b-container class="bv-example-row">
      <b-row>
        <b-col cols="12" md="8">
          <b-progress
            :value="value"
            variant="success"
            :max="max"
            striped
            animated
            show-value
            class="h-100"
          ></b-progress>
        </b-col>
        <b-col cols="12" md="4">
          <h3>Quotes added : {{ value }}</h3>
        </b-col>
      </b-row>
    </b-container>
    <b-button variant="success" @click="addQuote">increase</b-button>
    <b-button variant="danger" @click="removeQuote">decreasse</b-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // value: 0,
      max: 10
    };
  },
  computed: {
    value() {
      return this.$store.state.value;
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
<style scoped lang="scss">
.red {
  background: red;
}

.green {
  background: green;
}
</style>
