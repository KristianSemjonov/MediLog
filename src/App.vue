<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Avaleht</router-link> |
      <router-link to="/verer6hk">Vererõhk & pulss</router-link> |
      <router-link to="/veresuhkur">Veresuhkur</router-link> |
      <router-link to="/kehakaal">Kehakaal & KMI</router-link> |
      <router-link to="/temperatuur">Kehatemperatuur</router-link>
      <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;400;500&display=swap" rel="stylesheet">
    </div>
    <router-view/>
  </div>
</template>

<style>

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #F9A828;
}
</style>
