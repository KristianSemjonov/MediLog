<template>
  <div class="diarybloodpressure">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="300px">
    <h3>Vaadake päevikut vererõhu mõõtmistulemustega</h3>
    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>
    <button v-on:click="getData()">Vaata päevikut vererõhu mõõtmistulemustega</button>
    <table border="1">
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
  this.$http.get('http://localhost:8080/medilog/diarybloodpressure?userid=' + this.userId)
      .then(response => this.diaryBloodPressure = response.data)
      .catch(response => console.log(response))
}

export default {
  name: 'DiaryBloodPressure',
  components: {},
  data: function () {
    return {
      userId: '',
      date: '',
      time: '',
      systolic: '',
      diastolic: '',
      pulse: '',
      addInfo: '',
      diaryBloodPressure: []
    }
  },
  methods:
      {
        getData: getData
      },
  mounted() {
    this.getData();
  }
}
</script>

<style scoped>
table {
  text-align: -webkit-center;
}
</style>