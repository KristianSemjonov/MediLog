<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Uue kasutaja loomiseks palun täitke allolevad väljad:</h3>
    <table class="userTable" cellspacing="10">
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
        <td><button v-on:click="saveInHtml()">Salvesta andmed</button></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>


let saveInJs = function () {
  this.$http.post('/medilog/createuser', {},
      {
        params: {
          firstName: this.newUser.firstName,
          lastName: this.newUser.lastName,
          idCode: this.newUser.idCode,
          username: this.newUser.username,
          password: this.newUser.password,
        }
      })
      .then(() => alert('Registreerimine õnnestus, teie andmed on salvestatud'))
      .catch(() => alert("Registreerimine ei õnnestunud, palun proovige uuesti"));
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
.userTable {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left: auto;
}
</style>