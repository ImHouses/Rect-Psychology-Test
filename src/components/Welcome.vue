<template>
  <b-container fluid>
    <b-row class="welcome-title">
      <b-col sm="12" md="12" lg="12" xl="12">
        <p class="title">Bienvenido</p>
        <p class="subtitle">Selecciona el ejercicio que quieres aplicar.</p>
      </b-col>
    </b-row>
    <b-row class="welcome-button-row">
      <b-col class="button-container">
        <div class="button-green button-green-welcome">
          <p class="button-title">100</p>
          <p>Línea numérica de 0 a 100</p>
        </div>
      </b-col>
      <b-col class="button-container">
        <div class="button-green button-green-welcome">
          <p class="button-title">1000</p>
          <p>Línea numérica de 0 a 1000</p>
        </div>
      </b-col>
    </b-row>
    <b-row class="start-button-row">
      <b-col>
        <div class="button-green-little button-green-welcome">
          <p>Comenzar</p>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
  margin-top: 50px;
}
.start-button-row {
  margin-top: 100px;
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
