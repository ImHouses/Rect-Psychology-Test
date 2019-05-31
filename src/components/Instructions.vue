<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <p class="title instructions-title">Bienvenido</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="6" md="8" lg="8">
        <p class="subsubtitle instructions-subtitle">El siguiente estudio forma parte de un proyecto de la Facultad de Psicología de la UNAM con el fin de conocer la
estimación de diversos números en una recta numérica.<br><br>
Tu participación es muy importante para nosotros, por lo que es necesario que sepas que la información que se
recoja será confidencial y se usará sólo para fines académicos.<br><br>
Tus respuestas serán guardadas usando un número de identificación asignado automáticamente.<br><br>
Si tiene alguna duda sobre este proyecto, puede hacer preguntas en cualquier momento durante su participación
en él. Igualmente, puede retirarse del proyecto en cualquier momento sin que te perjudique en alguna forma.<br><br>
Da clic el botón de “comenzar” si aceptas participar voluntariamente en esta investigación. </p>
      </b-col>
    </b-row>
    <b-row>
      <b-col class="button-start-container">
        <button class="button-green-little" @click="next">
          Comenzar
        </button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Instructions",
  methods: {
    next() {
      this.$router.push("form");
    }
  }
}
</script>
<style scoped>
  .instructions-title {
    text-align: left;
  }
  .instructions-subtitle {
    text-align: justify;
  }
  .button-start-container {
    text-align: right;
  }
</style>

