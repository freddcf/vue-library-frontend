<template>
  <nav id="nav">
    <div id="logo"><span class="logo-highlighed">WDA</span> Livraria</div>
    <router-link to="/"><HomeIcon /> Home</router-link>
    <router-link to="/usuario"><AccountEditIcon /> Usuário</router-link>
    <router-link to="/editora"><BookshelfIcon /> Editora</router-link>
    <router-link to="/livros"><BookPlusIcon /> Livros</router-link>
    <router-link to="/aluguel"><BookAccountIcon /> Aluguel</router-link>
  </nav>
</template>

<script>
import HomeIcon from 'vue-material-design-icons/Home.vue';
import AccountEditIcon from 'vue-material-design-icons/AccountEdit.vue';
import BookshelfIcon from 'vue-material-design-icons/Bookshelf.vue';
import BookPlusIcon from 'vue-material-design-icons/BookPlus.vue';
import BookAccountIcon from 'vue-material-design-icons/BookAccount.vue';

export default {
  name: 'Navbar',
  props: ['logo', 'alt'],
  components: {
    HomeIcon,
    AccountEditIcon,
    BookshelfIcon,
    BookPlusIcon,
    BookAccountIcon,
  }
}
</script>

<style scoped>
  #nav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #f5f5f5;
    padding: 15px 60px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: #1a1a1a;
    z-index: 2;
  }

  #nav a {
    font-size: 14px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 500;
    color: #1a1a1a;
    padding: 5px 15px;
    transition: .5s;
    display: flex;
    align-items: center;
    border-radius: 50px;
    gap: 5px;
  }

  #nav a > * {
    display: flex;
    align-items: center;
  }

  #nav a:hover {
    background: #d6d6d6;
  }

  #logo {
    margin: auto;
    margin-left: 0;
    font-size: 24px;
  }

  span.logo-highlighed{
    font-weight: bold;
  }
</style>