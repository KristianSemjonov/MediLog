<template>
  <div class="welcome">
    <h1>{{ msg }}</h1>
    <p class="introduction">
      MediLog on e-tervise päevik, kus on võimalik mugavalt üles
      märkida oma tervisenäitajad, mida te kodus iseseisvalt igapäevaselt mõõdate - olgu selleks vererõhk
      või veresuhkur, või soovite jälgida kehakaalu muutuseid.<br><br>
      Peale sisselogimist ja esimeste andmete sisestamist moodustub teie isiklik tervisenäitajate andmebaas,
      mida saate soovi korral päevikuna vaadelda ja vajaduse korral ka oma raviarstile edastada.
    </p>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
