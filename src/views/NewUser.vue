<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <h3>Uue kasutaja loomiseks palun täitke allolevad väljad:</h3>
    <table cellspacing="10">
      <tbody>
      <tr>
        <td>Eesnimi:</td>
        <td><input v-model="newUser.firstName" placeholder=""></td>
      </tr>
      <tr>
        <td>Perekonnanimi:</td>
        <td><input v-model="newUser.lastName" placeholder=""></td>
      </tr>
      <tr>
        <td>Isikukood:</td>
        <td><input v-model="newUser.idCode" placeholder=""></td>
      </tr>
      <tr>
        <td>Kasutajanimi:</td>
        <td><input v-model="newUser.username" placeholder="palun jätke meelde"></td>
      </tr>
      <tr>
        <td>Salasõna:</td>
        <td><input v-model="newUser.password" placeholder="palun jätke meelde"></td>
      </tr>
      <tr>
        <td></td>
        <button v-on:click="saveInHtml()">Salvesta andmed</button>
        <td></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
let saveInJs = function () {
  this.$http.get('http://localhost:8080/medilog',
      {
        params: {
          firstName: this.newUser.firstName,
          lastName: this.newUser.lastName,
          idCode: this.newUser.idCode,
          username: this.newUser.username,
          password: this.newUser.password,
        }
      })
  alert('Registreerimine õnnestus, teie andmed on salvestatud');
}

export default {
  name: "NewUser",
  components: {},
  data: function () {
    return {
      newUser: {}
    }
  },
  methods:
      {
        saveInHtml: saveInJs,
      },
  mounted() {
  }
}
</script>

<style scoped>
table {
  text-align: -webkit-center;
}
</style>