<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="400px">
    <Welcome msg="Teretulemast MediLog eTervisepäeviku lehele"/>
    <br>
    <p>Selleks, et sisestada oma tervisenäitajate mõõtmistulemusi ja vaadata oma mõõtmistulemustega tervisepäevikut,
      palun registreeruge MediLog eTervisepäeviku kasutajaks alloleval lingil:</p>
    <router-link to="/uuskasutaja">Uue kasutaja loomine</router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import Welcome from '@/components/Welcome.vue'

export default {
  name: 'Home',
  components: {
    Welcome
  }
}
</script>

<style scoped>
table {
  text-align: -webkit-center;
}
</style>