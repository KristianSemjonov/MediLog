<template>
  <div class="diarybloodpressure">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Vaadake päevikut vererõhu mõõtmistulemustega</h3>
<!--    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>-->
<!--    <button v-on:click="getData()">Ava päevik</button>-->
    <table class="diaryBloodPressure" border="1">
      <tr>
        <th>Kuupäev</th>
        <th>Kellaaeg</th>
        <th>Süstoolne vererõhk (mmHg)</th>
        <th>Diastoolne vererõhk (mmHg)</th>
        <th>Pulss (lööki/min)</th>
        <th>Lisainfo</th>
      </tr>
      <tr v-for="row in diaryBloodPressure">
        <td>{{row.date}}</td>
        <td>{{row.time}}</td>
        <td>{{row.systolic}}</td>
        <td>{{row.diastolic}}</td>
        <td>{{row.pulse}}</td>
        <td>{{row.addInfo}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('/diarybloodpressure?userid=' + this.userId)
      .then(response => this.diaryBloodPressure = response.data)
      .catch(response => console.log(response))
}

export default {
  name: 'DiaryBloodPressure',
  components: {},
  data: function () {
    return {
      diaryBloodPressure: []
    }
  },
  methods:
      {
        getData: getData
      }
}
</script>

<style scoped>
.diaryBloodPressure {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left: auto;
}
</style>