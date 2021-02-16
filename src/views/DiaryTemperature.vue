<template>
  <div class="diaryTemperature">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="300px">
    <h3>Vaadake päevikut kehatemperatuuri mõõtmistulemustega</h3>
    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>
    <button v-on:click="getData()">Vaata päevikut kehatemperatuuri mõõtmistulemustega</button>
    <table border="1">
      <tr>
        <th>Kuupäev</th>
        <th>Kellaaeg</th>
        <th>Kehatemperatuur °C</th>
        <th>Lisainfo</th>
      </tr>
      <tr v-for="row in diaryTemperature">
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.temperature }}</td>
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
      userId: '',
      date: '',
      time: '',
      temperature: '',
      addInfo: '',
      diaryTemperature: []
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