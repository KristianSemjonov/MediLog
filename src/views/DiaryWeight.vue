<template>
  <div class="diarybloodsugar">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Vaadake päevikut veresuhkru mõõtmistulemustega</h3>
<!--    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>-->
    <button v-on:click="getData()">Ava päevik</button>
    <table class="weightTable" border="1">
      <tr>
        <th>Kuupäev</th>
        <th>Kellaaeg</th>
        <th>Kehakaal (kg)</th>
        <th>Pikkus (m)</th>
        <th>KMI (kg/m2)</th>
        <th>Lisainfo</th>
      </tr>
      <tr v-for="row in diaryWeight">
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.weight }}</td>
        <td>{{ row.height }}</td>
        <td>{{ row.bmi }}</td>
        <td>{{ row.addInfo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/medilog/diaryweight?userid=' + this.userId)
      .then(response => this.diaryWeight = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "DiaryWeight",
  components: {},
  data: function () {
    return {
      diaryWeight: []
    }
  },
  methods:
      {
        getData: getData
      }
}

</script>
<style scoped>
.weightTable {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left: auto;
}
</style>