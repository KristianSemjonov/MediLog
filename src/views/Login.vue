<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Palun sisestage oma kasutajanimi ja salasõna:</h3>
    <table class="loginTable" cellspacing="10">
      <tbody>
      <tr>
        <td>Kasutajanimi:</td>
        <td><input v-model="login.username" placeholder=""></td>
      </tr>
      <tr>
        <td>Salasõna:</td>
        <td><input v-model="login.password" placeholder=""></td>
      </tr>
      <tr>
        <td></td>
        <td>
          <button v-on:click="getData()">Sisene</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import router from "../router";

let getData = function () {
  this.$http.get('/medilog/login?username=' + this.login.username + '&password=' + this.login.password)
      .then(response => {
        localStorage.setItem('user-token', response.data) // store the token
        this.$http.defaults.headers.common['Authorization'] = 'Bearer ' + response.data
        alert('Olete edukalt sisse loginud')
      })
      .catch(response => {
        console.log(response)
        alert("Sisselogimine ebaõnnestus")
      })
}

export default {
  name: "Login",
  components: {},
  data: function () {
    return {
      username: '',
      password: '',
      login: {}
    }
  },
  methods:
      {
        getData: getData
      }
}

</script>
<style scoped>
.loginTable {
  text-align: -webkit-center;
  margin-left: auto;
  margin-right: auto;

}
</style>