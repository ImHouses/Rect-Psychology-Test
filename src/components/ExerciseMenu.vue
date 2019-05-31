<template>
  <b-container fluid>
    <b-row class="welcome-title">
      <b-col sm="12" md="12" lg="12" xl="12">
        <p class="title">Instrucciones</p>
        <p class="subtitle">Trata de ubicar el número lo más rápido posible, no es necesario que hagas cálculos para dividir la recta, recuerda que no hay respuesta correctas o incorrectas.<br>
Se te presentarán dos series de ejercicios, uno es una recta del 0 al 100 y el otro es una recta de 0 a 1000. Habrá un ensayo de prueba antes de iniciar los ejercicios de cada recta.<br>
Al terminar la primera serie de ejercicios de una recta se te dará un descanso para continuar con la siguiente recta. Da clic al ejercicio con el que prefieras comenzar.</p>
      </b-col>
    </b-row>
    <b-row class="welcome-button-row">
      <b-col class="button-container">
        <div class="button-green button-green-welcome" @click="mode100Click">
          <p class="button-title">100</p>
          <p>Recta numérica de 0 a 100</p>
        </div>
      </b-col>
      <b-col class="button-container">
        <div class="button-green button-green-welcome" @click="mode1000Click">
          <p class="button-title">1000</p>
          <p>Recta numérica de 0 a 1000</p>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <p class="subtitle selection">Selección: Línea numérica {{ selectedTest }}</p>
      </b-col>
    </b-row>
    <b-row class="start-button-row">
      <b-col>
        <button class="button-green-little button-green-welcome" @click="begin">
          Comenzar
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'ExerciseMenu',
  props: {
    msg: String
  },
  computed: {
    selectedTest() {
      return this.$parent.mode100 ? "0-100" : "0-1000";
    }
  },
  methods: {
    mode100Click() {
      this.$parent.mode100 = true;
    },
    mode1000Click() {
      this.$parent.mode100 = false;
    },
    begin() {
      this.$router.push({
        path: "test",
        query: {
          testMode: true,
          mode100: this.$parent.mode100
        }
      });
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.welcome-title {
  text-align: center;
}
.button-container {
  text-align: center;
}
.button-title {
  font-size: 3.5em;
}
.button-green-welcome {
  display: inline-block;
}
.welcome-button-row {
  margin-top: 10px;
}
.start-button-row {
  margin-top: 20px;
}
.selection {
  margin-top: 20px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
