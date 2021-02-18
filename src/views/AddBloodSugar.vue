<template>
  <div class="addbloodsugar">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <h3>Sisestage uus veresuhkru mõõtmistulemus</h3>
    <table class="tableBloodSugar" cellspacing="5">
      <tbody>
      <tr>
        <td>Kasutaja ID: </td>
        <td><input v-model="addBloodSugar.userId" placeholder="kustutame, kui login toimib!"></td>
        <td></td>
      </tr>
      <tr>
        <td>Kuupäev: </td>
        <td><input v-model="addBloodSugar.date" placeholder=""></td>
        <td><i> (aaaa-kk-pp)</i></td>
      </tr>
      <tr>
        <td>Kellaaeg: </td>
        <td><input v-model="addBloodSugar.time" placeholder=""></td>
        <td><i> (hh:mm)</i></td>
      </tr>
      <tr>
        <td>Veresuhkur: </td>
        <td><input v-model="addBloodSugar.bloodSugar" placeholder=""></td>
        <td> mmol/l</td>
      </tr>
      <tr>
        <td>Lisainfo: </td>
        <td><input v-model="addBloodSugar.addInfo" placeholder="oluline lisateave"></td>
        <td></td>
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
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); // January is 0
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;
// document.write(today);

let now = new Date();
let hours = String(now.getHours()).padStart(2, '0');
let minutes = String(now.getMinutes() + 1).padStart(2, '0');
now = hours + ':' + minutes;
// document.write(now);

let saveInJs = function () {
  this.$http.post('/medilog/bloodsugar', {},
      {
        params: {
          userId: this.addBloodSugar.userId,
          date: this.addBloodSugar.date,
          time: this.addBloodSugar.time,
          bloodSugar: this.addBloodSugar.bloodSugar,
          addInfo: this.addBloodSugar.addInfo,
        }
      }).then(() => alert('Andmed on salvestatud'))
      .catch(() => alert("Palun täitke kohustuslikud väljad"));
}

export default {
  name: "AddBloodSugar",
  components: {},
  data: function () {
    return {
      addBloodSugar: {date :today, time :now}
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
.tableBloodSugar {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left:auto;
}
</style>