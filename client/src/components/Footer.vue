<template>
  <footer id="footer">
    <p>WDA Livraria</p>
    -
    <p>
      Coded by &copy;<a href="https://github.com/freddcf" target="_blank" rel="noopener noreferrer">Fred Fonseca
      </a>
    </p>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  #footer {
    height: 60px;
    width: 100%;
    position: absolute;
    left: 0;
    background: #222;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }

  #footer a {    
    color: #fff;
  }
</style>