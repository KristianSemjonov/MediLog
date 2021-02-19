<template>
  <div class="diarybloodsugar">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <h3>Vaadake päevikut veresuhkru mõõtmistulemustega</h3>
<!--    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>-->
<!--    <button v-on:click="getData()">Ava päevik</button>-->
    <table class="dairyBloodSugar" border="1">
      <tr class="dairySugar2">
        <th>Kuupäev</th>
        <th>Kellaaeg</th>
        <th>Veresuhkur (mmol/l)</th>
        <th>Lisainfo</th>
      </tr>
      <tr v-for="row in diaryBloodSugar">
        <td>{{ row.date }}</td>
        <td>{{ row.time }}</td>
        <td>{{ row.bloodSugar }}</td>
        <td>{{ row.addInfo }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
let getData = function () {
  this.$http.get('http://localhost:8080/medilog/diarybloodsugar?userid=' + this.userId)
      .then(response => this.diaryBloodSugar = response.data)
      .catch(response => console.log(response))
}
export default {
  name: "DiaryBloodSugar",
  components: {},
  data: function () {
    return {
      diaryBloodSugar: []
    }
  },
  methods:
      {
        getData: getData
      }
      ,
  mounted() {
    this.getData();
  }
}

</script>
<style scoped>
.dairyBloodSugar {
  text-align: -webkit-center;
  margin-left: auto;
  margin-right: auto;
}
</style>