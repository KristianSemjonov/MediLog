<template>
  <div class="welcome">
    <h2>{{ msg }}</h2>
    <p class="Introduction">
      Medilog on e-tervise päevik, kus on võimalik mugavalt üles märkida oma tervisenäitajad, mida te kodus iseseisvalt igapäevaselt mõõdate - vererõhk
      või veresuhkur või soovite jälgida kehakaalu muutuseid. Peale sisselogimist ja esimeste andmete sisestamist moodustub teie isiklik tervisenäitajate andmebaas,
      mida saate soovi korral päevikuna vaadelda ja vajaduse korral ka oma raviarstile edastada.
      <br><br>
      Selleks, et sisestada oma tervisenäitajate mõõtmistulemusi ja vaadata oma mõõtmistulemustega tervisepäevikut,
      palun registreeruge MediLog e-tervise päeviku kasutajaks alloleval lingil:</p>

    <router-link to="/uuskasutaja">Kasutaja loomine</router-link>
    |
    <router-link to="/login">Logi sisse</router-link>
    |
    <router-link to="/logout">Logi välja</router-link>

    <br>
    <div class="center-block">
      <img alt="Medilog logo" src="../assets/homePressure.png" height="180px" width="auto">
      <img alt="Medilog logo" src="../assets/homeSugar.png" height="180px" width="auto">
      <img alt="Medilog logo" src="../assets/homeTemp.png" height="180px" width="auto">
      <img alt="Medilog logo" src="../assets/homeWeight.png" height="180px" width="auto">
    </div>
    <div class="Contact"><a href="mailto:valiit.medilog@gmail.com?Subject=Tagasiside">Kirjuta meile!</a></div>
    <br>
    <div class="footer">
      <p>Medilog© 2021</p>
      <p>Helena | Marika | Linda | Kristian</p>
      <p>Encouraged by Vali-IT®</p>
    </div>
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
  color: #F9A828;
  font-style: normal;
}

table {
  text-align: -webkit-center;
}

.Introduction {
  text-align: center;
  margin-inline: 10%;
}

.Contact {
  margin-top: 35px;

}

.footer {

  font-size: small;
  bottom: 0%;
}

.center-block {
  margin-top: 20px;
}
</style>
