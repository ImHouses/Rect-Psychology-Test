<template>
  <b-container>
    <b-row>
      <b-col>
        <p class="title form-title">Datos Personales</p>
        <p class="subtitle form-title">Para continuar, por favor introduce los siguientes datos.</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3" lg="3" xl="3">
        <div>
          <p class="field-title">Número de participante</p>
          <p class="subtitle">{{ getLastUserId() }}</p>
        </div>
      </b-col>
      <b-col md="3" lg="3" xl="3">
        <div>
          <p class="field-title">Preferencia de mano</p>
          <b-form-radio class="form-title subsubtitle" v-model="hand" value="left">Zurdo</b-form-radio>
          <b-form-radio class="form-title subsubtitle" v-model="hand" value="right">Diestro</b-form-radio>
        </div>
      </b-col>
    </b-row>
    <b-row>
      <b-col md="3" lg="3" xl="3">
        <div>
          <p class="field-title">Género</p>
          <b-form-radio class="form-title subsubtitle" v-model="gender" value="man">Hombre</b-form-radio>
          <b-form-radio class="form-title subsubtitle" v-model="gender" value="woman">Mujer</b-form-radio>
        </div>
      </b-col>
      <b-col md="3" lg="3" xl="3">
        <div style="text-align:left;">
          <p class="field-title">Edad</p>
          <input class="form-input" type="number" min="10" max="60" v-model="age">
          <p v-if="invalidAge" class="error field-title error">Introduce una fecha válida.</p>
        </div>
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
export default {
  name: "PersonalDataForm",
  computed: {
    
  },
  data: function() {
    return {
      gender: "woman",
      hand: "left",
      age: null,
      invalidAge: false
    }
  },
  methods: {
    next() {
      if (this.validate()) {
        this.$parent.user = {
          gender: this.gender,
          handPreference: this.hand,
          age: this.age,
          participantNumber: this.getLastUserId()
        }
        const storage = window.localStorage;
        if (storage.getItem("users") == null) {
          const users = JSON.stringify([this.$parent.user]);
          storage.setItem("users", users);
        } else {
          const users = JSON.parse(storage.getItem("users"));
          users.push(this.$parent.user);
          storage.setItem("users", JSON.stringify(users));
        }
        this.$router.push("exerciseExample")
      } else {
        // eslint-disable-next-line
        console.log("Invalid form data");
      }
    },
    validate() {
      if (this.age < 10) {
        this.invalidAge = true;
      } else {
        this.invalidAge = false;
      }
      return !this.invalidAge;
    },
    getLastUserId() {
      const storage = window.localStorage;
      if (storage.getItem("users") == null) {
        return 1;
      } else {
        const users = JSON.parse(storage.getItem("users"));
        let lastId = 0;
        for (let user of users) {
          lastId = user.participantNumber;
        }
        return lastId+1;
      }
    }
  }
}
</script>
<style scoped>
  .form-title {
    text-align: left;
  }
  .field-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1em;
    color: black;
    text-align: left;
  }
  .form-input {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 1em;
    color: black;
    padding-left: 10px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: white;
    border-radius: 5px;
    border-style: none;
    box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  }
  .button-start-container {
    margin-top: 150px;
    text-align: right;
  }
  .error {
    color: red;
  }
</style>

