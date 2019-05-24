<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.title {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 3.5em;
  color: black;
  margin-bottom: 10px;
}
.subtitle {
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  font-size: 1.5em;
  color: rgb(126, 126, 126);
}
.button-green {
  font-family: 'Raleway', sans-serif;
  color: white;
  background-color: rgb(37, 177, 107);
  border-radius: 5px;
  font-weight: 600;
  width: 300px;
  height: 150px;
}
.button-green-little {
  font-family: 'Raleway', sans-serif;
  color: white;
  background-color: rgb(37, 177, 107);
  border-radius: 5px;
  font-weight: 600;
  width: 120px;
  height: 50px;
  padding-bottom: 12px;
  padding-top: 12px;
}
.button-green:hover {
  background-color: rgb(28, 151, 92);
  border-radius: 5px;
}
.button-green:active {
  background-color: rgb(28, 151, 92);
  border-radius: 5px;
}
.button-green-little:hover {
  background-color: rgb(28, 151, 92);
  border-radius: 5px;
}
.button-green-little:active {
  background-color: rgb(28, 151, 92);
  border-radius: 5px;
}
</style>
