<template>
  <div class="welcome">
    <h2>{{ msg }}</h2>
    <p class="Introduction">
      MediLog on e-tervise päevik, kus on võimalik mugavalt üles
      märkida oma tervisenäitajad, mida te kodus iseseisvalt igapäevaselt mõõdate - olgu selleks vererõhk
      või veresuhkur, või soovite jälgida kehakaalu muutuseid.<br><br>
      Peale sisselogimist ja esimeste andmete sisestamist moodustub teie isiklik tervisenäitajate andmebaas,
      mida saate soovi korral päevikuna vaadelda ja vajaduse korral ka oma raviarstile edastada.
      <br><br>
      Selleks, et sisestada oma tervisenäitajate mõõtmistulemusi ja vaadata oma mõõtmistulemustega tervisepäevikut,
      palun registreeruge MediLog e-Tervisepäeviku kasutajaks alloleval lingil:</p>

    <router-link to="/uuskasutaja">Uue kasutaja loomine</router-link>

    <div class="Contact"><a href="mailto:valiit.medilog@gmail.com?Subject=Tagasiside">Kirjuta meile!</a></div>
    <br>
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

table {
  text-align: -webkit-center;
}

.Introduction {
  text-align: center;
  margin-inline: 10%;
}
.Contact{
  margin-top: 20px;

}
</style>
