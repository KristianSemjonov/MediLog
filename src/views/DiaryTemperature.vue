<template>
  <div class="diaryTemperature">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Vaadake päevikut kehatemperatuuri mõõtmistulemustega</h3>
<!--    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>-->
    <button v-on:click="getData()">Ava päevik</button>
    <table class="tableTemp" border="1">
      <tr>
        <th>Kuupäev</th>
        <th>Kellaaeg</th>
        <th>Kehatemperatuur °C</th>
        <th>Lisainfo</th>
      </tr>
      <tr v-for="row in diaryTemperature">
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.temp }}</td>
        <td>{{ row.addInfo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/medilog/diarytemperature?userid=' + this.userId)
      .then(response => this.diaryTemperature = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "DiaryTemperature",
  components: {},
  data: function () {
    return {
      diaryTemperature: []
    }
  },
  methods:
      {
        getData: getData
      }
}

</script>
<style scoped>
.tableTemp {
  text-align: -webkit-center;
  margin-right: auto;
  margin-left: auto;
}
</style>