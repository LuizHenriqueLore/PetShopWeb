<template>
  <div id="app">
    <NavBar :key="$route.path" />
    <router-view :key="$route.path" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
export default{
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>

* {
    margin: 0;
    padding: 0;
    font-family: Georgia, 'Times New Roman', Times, serif;
    color: rgb(46, 46, 46);
}

body {
    background-color: rgb(236, 255, 223);
}

a:link {
    text-decoration: none;
}

a:hover {
    color: rgb(22, 233, 117);
    font-size: 20px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
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
  color: #42b983;
}
</style>
