<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <p class="title example-title">Instrucciones</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="4" md="6" lg="6">
        <p class="subsubtitle example-subtitle">
          A continuación trabajarás con una serie de ejercicios de la recta numérica.
          Se te pedirá ubicar el número que se encuentra escrito en el círculo superior de la pantalla.
          Cuando decidas dónde va el número, mueve el cursor para ubicar la línea
          azul en la recta.<br>
          Como en el siguiente ejemplo: <br><b>Esta línea va de 0 a 1000. ¿Dónde ubicaría este número?</b>
        </p>
      </b-col>
      <b-col class="line-test-container">
        <LineTest mode="1000" v-model="expectedNumber"></LineTest>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="button-start-container">
        <button class="button-green-little" @click="next">
          Siguiente
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import LineTest from "./LineTest.vue";
export default {
  name: "ExerciseExample",
  components: {
    "LineTest": LineTest
  },
  methods: {
    next() {
      this.$router.push("chooseExercise");
    }
  },
  data() {
    return {
      expectedNumber: 350
    };
  }
}
</script>

<style scoped>
  .example-title {
    text-align: left;
  }
  .example-subtitle {
    text-align: justify;
  }
  .line-test-container {
    padding: 25px;
    border: 1px solid rgb(176, 176, 176);
  }
  .button-start-container {
    margin-top: 150px;
    text-align: right;
  }
</style>
