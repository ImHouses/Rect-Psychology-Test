<template>
  <b-container>
    <b-row>
      <b-col>
        <p class="title">Ubica la barra azul en el número que se te indica.</p>
        <p v-if="testMode" class="subtitle">Este es un ensayo de prueba para que te familarices con la tarea.</p>
      </b-col>
    </b-row>
    <b-row>
      <LineTest
        v-bind:mode="getMode"
        v-model="expectedNumber"
        ref="lineTest"/>
    </b-row>
    <b-row class="third-row">
      <b-col class="counter-container">
        <p v-if="!testMode" class="title">{{ remaining }}</p>
      </b-col>
      <b-col class="button-container">
        <button
          class="button-green-little button-green-welcome"
          @click="buttonClick">
          {{ buttonText }}
          </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LineTest from "./LineTest.vue";

export default {
  name: "Test",
  components: {
    LineTest
  },
  computed: {
    getMode() {
      return this.mode100 ? "100" : "1000";
    },
    remaining() {
      const length = this.mode100 ? this.mode100Tests.length : this.mode1000Tests.length;
      return `${this.testNumber+1}/${length}`
    },
    buttonText() {
      if (this.testMode) {
        return "Comenzar";
      } else if (this.testNumber+1 == this.actualTests.length) {
        return "Terminar";
      } else {
        return "Siguiente";
      }
    },
    actualTests() {
      return this.mode100 ? this.mode100Tests : this.mode1000Tests;
    },
    expectedNumber() {
      return this.testMode ? 350 : this.actualTests[this.testNumber];
    }
  },
  data() {
    return {
      testMode: this.$route.query.testMode,
      mode100: this.$route.query.mode100,
      lastExercise: this.$route.query.lastExercise,
      mode100Tests: [10, 37],
      mode1000Tests: [120, 147],
      testNumber: 0,
      user: this.$parent.user,
      results: []
    }
  },
  methods: {
    buttonClick() {
      if (this.testMode) {
        this.$router.replace({
          path: "test",
          query: {
            testMode: false,
            mode100: this.$parent.mode100
          }
        });
      } else if (this.testNumber+1 == this.actualTests.length && !this.lastExercise) {
        this.saveListOfResults();
        this.saveUser();        
        this.$router.push({
          path: "wait",
          query: {
            nextMode100: this.mode100 ? false : true
          }
        });
      } else if (this.testNumber+1 == this.actualTests.length && this.lastExercise) {
        this.saveListOfResults();
        this.saveUser();     
        this.$router.push("finish");
      } else if (!this.testMode) {
        this.saveListOfResults();
        this.testNumber = this.testNumber+1;
        this.$refs.lineTest.expectedNumber = this.actualTests[this.testNumber];
        this.$refs.lineTest.reset();
      }
    },
    saveUser() {
      const localStorage = window.localStorage;
      const users = JSON.parse(localStorage.getItem("users"));
      let userIndex = 0;
      for (let i = 0; i < users.length; i++) {
        if (users[i].participantNumber == this.user) {
          userIndex = i;
          break;
        }
      }
      if (this.mode100) {
        this.user["resultsOf100"] = this.results;
      } else {
        this.user["resultsOf1000"] = this.results;
      }
      users[userIndex] = this.user;
      localStorage.setItem("users", JSON.stringify(users));
      // eslint-disable-next-line
      console.log(users);
    },
    saveListOfResults() {
      const exp = this.actualTests[this.testNumber];
      const input = this.$refs.lineTest.getValue() | 0;
      this.results.push({
        expected: exp,
        entered: input,
        difference: exp - input
      });
      // eslint-disable-next-line
      console.log(this.results);
    }
  },
  mounted() {
    // eslint-disable-next-line
    console.log(`Test Mode: ${this.testMode}`);
    // eslint-disable-next-line
    console.log(`Mode 100: ${this.mode100}`);
    if (!this.testMode) {
      this.$refs.lineTest.expectedNumber = this.actualTests[this.testNumber];
      this.$refs.lineTest.reset();
    }
  }
}
</script>

<style>
  .button-green-welcome {
    display: inline-block;
  }
  .counter-container {
    text-align: left;
  }
  .button-container {
    text-align: right;
  }
  .third-row {
    margin-top: 80px;
  }
</style>
