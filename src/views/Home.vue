<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <Welcome msg="Teretulemast MediLog eTervisepäeviku lehele"/>
    <br>

    <div class="Contact"><a href="mailto:valiit.medilog@gmail.com?Subject=Tagasiside">Kirjuta meile!</a></div>


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

</style>