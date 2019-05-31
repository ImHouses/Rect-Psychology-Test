<template>
  <b-container fluid>
    <b-row>
      <b-col>
        <p class="title">Gracias por participar.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <button @click="click" class="button-green-little">Terminar</button>
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
export default {
  name: "Finish",
  methods: {
    click() {
      this.$router.replace("/");
    }
  }
}
</script>
<style scoped>
  b-container {
    text-align: center;
  }
</style>
