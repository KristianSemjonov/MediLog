<template>
  <div class="addweight">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <h3>Sisestage uus kehakaalu mõõtmistulemus</h3>
    <table class="tableWeight "cellspacing="5">
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
        <td><input v-model.number="calculatedBmi" placeholder="" disabled></td>
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

let saveInJs = function () {
  this.$http.post('/medilog/weight', {},
      {
        params: {
          userId: this.addWeight.userId,
          date: this.addWeight.date,
          time: this.addWeight.time,
          weight: this.addWeight.weight,
          height: this.addWeight.height,
          bmi: this.calculatedBmi,
          addInfo: this.addWeight.addInfo,
        }
      }).then(() => alert('Andmed on salvestatud'))
      .catch(() => alert("Palun täitke kohustuslikud väljad"));
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
  },
  computed:{
    calculatedBmi: function(){
      return (this.addWeight.weight/(this.addWeight.height**2)).toFixed(1);
    }
  }
}
</script>

<style scoped>
.tableWeight {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left: auto;
}
</style>