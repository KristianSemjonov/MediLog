<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto"><br>
    <button v-on:click="getData()">Logi välja</button>
    <div class="center-block">
      <img alt="Medilog logo" src="../assets/heart.png" height="400px" width="auto">
    </div>
  </div>
</template>

<script>
import router from "../router";

let getData = function () {
  localStorage.removeItem('user-token')
  alert('Olete edukalt välja loginud')
  router.push("/")
  location.reload()
}

export default {
  name: "Logout",
  methods: {
    getData
  }
}

</script>

<style scoped>

</style>