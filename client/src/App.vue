<template>
  <Navbar />
  <router-view/>
  <Footer />
</template>

<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer,
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap');

  *{
    font-family: 'Roboto', Helvetica, sans-serif;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #49C9A8;
    display: flex;
    justify-content: center;
  }

  table {
    padding: 0 10px;
  }

  .main-container {
    margin: 90px 0px 30px;
    min-height: 100vh;
    background: #f5f5f5;
    display: flex;
    justify-content: center;
    width: 90vw;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
