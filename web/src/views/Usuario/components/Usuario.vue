<template>
  <div>
    <!-- <h1>Usuario</h1> -->
    <div>
      <form action="" id="user-form">
        <h2>Cadastrar usuário</h2>
        <div class="input-container">
          <label for="name-input">Nome do Usuário:</label>
          <div class="input-box">
            <input type="text" name="name" id="name-input" v-model="name.name" placeholder="Nome">
            <AccountIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="city-input">Cidade do Usuário:</label>
          <div class="input-box">
            <input type="text" name="city" id="city-input" v-model="city" placeholder="City">
            <CityVariantIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="address-input">Endereço do Usuário:</label>
          <div class="input-box">
            <input type="text" name="address" id="address-input" v-model="address" placeholder="Address">
            <HomeCityIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="email-input">Email do Usuário:</label>
          <div class="input-box">
            <input type="text" name="email" id="email-input" v-model="email" placeholder="Email">
            <EmailIcon />
          </div>
        </div>
        <div class="input-container">
          <input class="submit-btn" type="button" value="fechar">
          <input class="cancel-btn" type="submit" value="Salvar">
        </div>
      </form>
    </div>
    <!-- <input type="text" v-for="name in name" :key="name.id" :value="name.name"> -->
    <!-- <div v-for="name in name" :key="name.id">{{name.name}}</div>
    <div v-for="name in name" :key="name.id">{{name.email}}</div> -->
    <div>{{ usuarios }}</div>
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>Email</th>
        </thead>
        <tbody>
          <td v-for="usuario in usuarios" :key="usuario.id">{{usuario.name}}</td>
          <td v-for="usuario in usuarios" :key="usuario.id">{{usuario.email}}</td>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import AccountIcon from 'vue-material-design-icons/Account.vue';
import CityVariantIcon from 'vue-material-design-icons/CityVariant.vue';
import HomeCityIcon from 'vue-material-design-icons/HomeCity.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';

import api from '@/services/api.js'
import usuarioAccess from '@/services/usuarioAccess.js'
// import axios from 'axios'
// import api from '../../../services/api'

export default {
  name: 'Usuario',
  components: {
    AccountIcon,
    CityVariantIcon,
    HomeCityIcon,
    EmailIcon,
  },
  data() {
    return {
      usuarios: [],
      usuario: {
        id: '',
        name: '',
        city: '',
        address: '',
        email: ''
      },
      name: [],
      city: null,
      address: null,
      email: null,
    }
  },
  methods: {
    async getInfo(){
      await api.get('/users').then(res => {
        this.name = res.data.result;
      })
    },
    async buscarTodos() {
      await usuarioAccess.buscarTodos().then(res => {
        this.usuarios = res.data.result
        // console.log(res.data.result);
      })
      // console.log(this.usuarios);
    }
  },
  mounted() {
    // this.getInfo()
    this.buscarTodos()
    // inserir([])
    // console.log(
      
    // );
    // let resp = this.buscarTodos()
    // console.log(resp);
  }
}
</script>

<style scoped>
  #user-form{
    max-width: 450px;
    margin: 0 auto;
    border: 1px solid #ccc;
    padding: 20px;
    padding-bottom: 60px;
    border-radius: 8px;
    position: relative;
  }

  h2 {
    font-size: 25px;
    margin-bottom: 25px;
    font-weight: 500;
  }

  .input-container:not(:last-child){
    display: flex;
    flex-direction: column;
    padding: 0 20px;
    margin-bottom: 20px;
  }

  .input-container:last-child{
    margin-top: 20px;
    position: absolute;
    left: 20px;
  }

  label {
    margin-bottom: 5px;
    color: #aaaaaa;
    padding: 3px 0px;
    font-size: 16px;
    font-weight: 500;
    transition: all .3s;
  }

  .input-box {
    display: flex;
    transition: all 0.5s;
  }

  input {
    padding: 4px 10px;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
  }

  .material-design-icon{
    transition: all 0.5s;
  }

  .input-box:not(.submit-btn, .cancel-btn){
    border-bottom: 2px solid #d0d0d0;
  }
  .input-container:focus-within label{
    color: #222;
  }

  .input-container:not(.submit-btn, .cancel-btn):focus-within .input-box{
    border-bottom: 2px solid #49C9A8;
  }
  .input-container:not(.submit-btn, .cancel-btn):focus-within .material-design-icon {
    color: #49C9A8;
  }

  .submit-btn, .cancel-btn{
    width: 100px;
    border-radius: 4px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 2px;
    text-transform: uppercase;
    padding: 5px 15px;
    transition: all 0.3s;
    cursor: pointer;
  }

  .cancel-btn {
    color: #1976D2;
  }
  .cancel-btn:hover {
    background: rgba(25, 117, 210, .1);
  }
  .submit-btn {
    color: #FF5252;
  }
  .submit-btn:hover {
    background: rgba(255, 82, 82, .1);
  }


</style>