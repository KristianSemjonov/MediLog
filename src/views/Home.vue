<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/mediloglarge_cut.jpg" height="240px" width="auto">
    <Welcome msg="Teretulemast MediLog eTervisepäeviku lehele"/>
    <br>


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

<!--#FBD46D - helekollane-->
<!--#F9A828 - oranz-->
<!--#07617D - roheline-->
<!--#2E383F   tumeroheline(tekst)-->
<!--#ECECEB - valge (taust)-->