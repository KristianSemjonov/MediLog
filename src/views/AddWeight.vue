<template>
  <div class="addweight">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="300px">
    <h3>Sisestage uus kehakaalu mõõtmistulemus</h3>
    <table cellspacing="10">
      <tbody>
      <tr>
        <td>Kasutaja ID: </td>
        <td><input v-model="addWeight.userId" placeholder="kustutame, kui login toimib!"></td>
        <td></td>
      </tr>
      <tr>
        <td>Kuupäev: </td>
        <td><input v-model="addWeight.date" placeholder=""></td>
        <td><i> (aaaa-kk-pp)</i></td>
      </tr>
      <tr>
        <td>Kellaaeg: </td>
        <td><input v-model="addWeight.time" placeholder=""></td>
        <td><i> (hh:mm)</i></td>
      </tr>
      <tr>
        <td>Kehakaal: </td>
        <td><input v-model="addWeight.weight" placeholder=""></td>
        <td> kg</td>
      </tr>
      <tr>
        <td>Pikkus: </td>
        <td><input v-model="addWeight.height" placeholder="palun sisestage meetrites"></td>
        <td> m</td>
      </tr>
      <tr>
        <td>KMI: </td>
        <td><input v-model="addWeight.bmi" placeholder="" disabled></td>
        <td> kg/m2</td>
      </tr>
      <tr>
        <td>Lisainfo: </td>
        <td><input v-model="addWeight.addInfo" placeholder="oluline lisateave"></td>
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

// let bmi = this.addWeight.weight/(this.addWeight.height**2);

let saveInJs = function () {
  this.$http.get('http://localhost:8080/medilog/weight',
      {
        params: {
          userId: this.addWeight.userId,
          date: this.addWeight.date,
          time: this.addWeight.time,
          weight: this.addWeight.weight,
          height: this.addWeight.height,
          bmi: this.addWeight.bmi,
          addInfo: this.addWeight.addInfo,
        }
      })
  alert('Andmed on salvestatud');
}

export default {
  name: "AddWeight",
  components: {},
  data: function () {
    return {
      addWeight: {date :today, time :now}
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