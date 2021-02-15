<template>
  <div class="addbloodpressure">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="300px">
    <h3>Sisestage uus vererõhu mõõtmistulemus</h3>
    <p>Kasutaja ID: <input v-model="addBloodPressure.userId" placeholder="kustutame, kui login toimib!"></p>
    <p>Kuupäev: <input v-model="addBloodPressure.date" placeholder=""></p>
    <p>Kellaaeg: <input v-model="addBloodPressure.time" placeholder=""></p>
    <p>Süstoolne näit: <input v-model="addBloodPressure.systolic" placeholder='nn "ülemine"'> (mmHg)</p>
    <p>Diastoolne näit: <input v-model="addBloodPressure.diastolic" placeholder='nn "alumine"'> (mmHg)</p>
    <p>Pulss: <input v-model="addBloodPressure.pulse" placeholder=""> (lööki/min)</p>
    <p>Lisainfo: <input v-model="addBloodPressure.addInfo" placeholder="oluline lisateave"></p>
    <button v-on:click="saveInHtml()">Salvesta andmed</button>
  </div>
</template>

<script>
let saveInJs = function () {
  this.$http.get('http://localhost:8080/medilog/bloodpressure',
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
      })
  alert('Andmed on edukalt salvestatud');
}

export default {
  name: 'AddBloodPressure',
  components: {},
  data: function () {
    return {
      addBloodPressure: {},
      bloodPressure: [],

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
