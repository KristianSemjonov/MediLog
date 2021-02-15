<template>
  <div class="diarybloodpressure">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="300px">
    <h3>Vaadake päevikut vererõhu mõõtmistulemustega</h3>
    <p>Kasutaja ID: <input v-model="userId" placeholder="kustutame, kui login toimib!"></p>
    <button v-on:click="getData()">Vaata päevikut vererõhu mõõtmistulemustega</button>
  </div>
</template>

<script>
let getData = function(){
  this.$http.get('http://localhost:8080/medilog/diarybloodpressure?userid=' + this.userId)
      .then(response => this.diaryBloodPressure = response.data)

      .catch(response => console.log(response))
}

export default {
  name: 'DiaryBloodPressure',
  components: {},
  data: function () {
    return {
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
        // saveInHtml: saveInJs,
        getData: getData
      },
  mounted (){

  }
}
</script>
