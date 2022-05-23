<template>
  <div>
    <!-- <h1>Usuario</h1> -->
    <div>
      <form action="" id="user-form">
        <h2>Cadastrar usuário</h2>
        <div class="input-container">
          <label for="name-input">Nome do Usuário:</label>
          <div class="input-box">
            <input type="text" name="name" id="name-input" v-model="usuario.name" placeholder="Nome">
            <AccountIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="city-input">Cidade do Usuário:</label>
          <div class="input-box">
            <input type="text" name="city" id="city-input" v-model="usuario.city" placeholder="City">
            <CityVariantIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="address-input">Endereço do Usuário:</label>
          <div class="input-box">
            <input type="text" name="address" id="address-input" v-model="usuario.address" placeholder="Address">
            <HomeCityIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="email-input">Email do Usuário:</label>
          <div class="input-box">
            <input type="text" name="email" id="email-input" v-model="usuario.email" placeholder="Email">
            <EmailIcon />
          </div>
        </div>
        <div class="input-container">
          <input class="submit-btn" type="button" value="fechar">
          <input class="cancel-btn" @click="this.inserir()" type="button" value="Salvar">
        </div>
      </form>
    </div>
    <div>{{ usuarios }}</div>
    <div>
      <table>
        <thead>
          <th>Name</th>
          <th>City</th>
          <th>Address</th>
          <th>Email</th>
        </thead>
        <tbody>
          <td>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              {{usuario.name}}
            </tr>
          </td>
          <td>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              {{usuario.city}}
            </tr>
          </td>
          <td>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              {{usuario.address}}
            </tr>
          </td>
          <td>
            <tr v-for="usuario in usuarios" :key="usuario.id">
              {{usuario.email}}
            </tr>
          </td>
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

import usuarioAccess from '@/services/usuarioAccess.js'

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
    }
  },
  methods: {
    async buscarTodos() {
      await usuarioAccess.buscarTodos().then(res => {
        this.usuarios = res.data.result
      })
    },
    async inserir() {
      await usuarioAccess.inserir(this.usuario).then(res => {
        const insertData = res.data
        console.log(insertData);
      })
    }
  },
  mounted() {
    this.buscarTodos()
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