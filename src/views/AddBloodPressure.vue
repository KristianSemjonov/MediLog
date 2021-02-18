<template>
  <div class="addbloodpressure">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <h3>Sisestage uus vererõhu mõõtmistulemus</h3>
    <table cellspacing="10">
      <tbody>
      <tr>
        <td>Kasutaja ID: </td>
        <td><input v-model="addBloodPressure.userId" placeholder="kustutame, kui login toimib!"></td>
        <td></td>
      </tr>
      <tr>
        <td>Kuupäev: </td>
        <td><input v-model="addBloodPressure.date" placeholder=""></td>
        <td><i> (aaaa-kk-pp)</i></td>
      </tr>
      <tr>
        <td>Kellaaeg: </td>
        <td><input v-model="addBloodPressure.time" placeholder=""></td>
        <td><i> (hh:mm)</i></td>
      </tr>
      <tr>
        <td>Süstoolne näit: </td>
        <td><input v-model="addBloodPressure.systolic" placeholder='nn "ülemine"'></td>
        <td> mmHg</td>
      </tr>
      <tr>
        <td>Diastoolne näit: </td>
        <td><input v-model="addBloodPressure.diastolic" placeholder='nn "alumine"'></td>
        <td> mmHg</td>
      </tr>
      <tr>
        <td>Pulss: </td>
        <td><input v-model="addBloodPressure.pulse" placeholder=""></td>
        <td> lööki/min</td>
      </tr>
      <tr>
        <td>Lisainfo: </td>
        <td><input v-model="addBloodPressure.addInfo" placeholder="oluline lisateave"></td>
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
  this.$http.post('/medilog/bloodpressure', {},
      {
        params: {
          userId: this.addBloodPressure.userId,
          date: this.addBloodPressure.date,
          time: this.addBloodPressure.time,
          systolic: this.addBloodPressure.systolic,
          diastolic: this.addBloodPressure.diastolic,
          pulse: this.addBloodPressure.pulse,
          addInfo: this.addBloodPressure.addInfo,
        }
      }) .then(() => alert('Andmed on salvestatud'))
      .catch(() => alert("Palun täitke kohustuslikud väljad"));
}

export default {
  name: 'AddBloodPressure',
  components: {},
  data: function () {
    return {
      addBloodPressure: {date: today, time: now}
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

