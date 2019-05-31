<template>
  <b-container>
    <b-row>
      <b-col>
        <p class="title wait-text">
          Has terminado la primera serie de ejercicios.
Ahora se te dará un descanso y en breve contestarás la siguiente serie con la otra recta numérica.
Da clic en el botón de “comenzar” cuando estés listo.
        </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="button-container">
        <button
          class="button-green-little"
          @click="click">
          Comenzar
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Wait",
  data() {
    return {
      nextMode: this.$route.query.nextMode100
    };
  },
  methods: {
    click() {
      this.$router.push({
        path: "test",
        query: {
          testMode: false,
          mode100: this.nextMode,
          lastExercise: true
        }
      });
    }
  }
}
</script>
<style>
  .wait-text {
    text-align: left;
    font-size: 1.5em;
  }
  .button-container {
    margin-top: 50px;
    text-align: right;
  }
</style>


