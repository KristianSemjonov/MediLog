<template>
  <div class="Home">
    <img alt="Medilog logo" src="../assets/MedilogSmall.jpg" height="400px">
    <Welcome msg="Teretulemast MediLog eTervisepäeviku lehele"/>
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
