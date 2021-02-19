<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/Medilog.png" height="180px" width="auto">
    <Welcome msg="Teretulemast MediLog e-tervise päeviku lehele"/>
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



