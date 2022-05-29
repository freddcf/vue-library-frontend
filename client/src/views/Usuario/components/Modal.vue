<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal-wrapper">
      <form v-show="modalActive" id="user-form" @submit="enviarFormulario($event)">
      <!-- Modal content -->
        <h2>Cadastrar usuário</h2>
        <div class="input-container">
          <label for="name-input">Nome do Usuário:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="name" id="name-input" v-model="usuario.name">
            <input v-if="modalType == 'alterar'" type="text" name="name" id="name-input" v-model="usuarioAlterar.name">
            <AccountIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="city-input">Cidade do Usuário:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="city" id="city-input" v-model="usuario.city">
            <input v-if="modalType == 'alterar'" type="text" name="city" id="city-input" v-model="usuarioAlterar.city">
            <CityVariantIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="address-input">Endereço do Usuário:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="address" id="address-input" v-model="usuario.address">
            <input v-if="modalType == 'alterar'" type="text" name="address" id="address-input" v-model="usuarioAlterar.address">
            <HomeCityIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="email-input">Email do Usuário:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="email" id="email-input" v-model="usuario.email">
            <input v-if="modalType == 'alterar'" type="text" name="email" id="email-input" v-model="usuarioAlterar.email">
            <EmailIcon />
          </div>
        </div>
        <div class="input-container">
          <input @click="close()" class="submit-btn" type="button" value="Fechar">
          <input @click="changeModalConfig(modalType)" class="cancel-btn" type="submit" value="Salvar">
        </div>
      </form>
    </div>
  </transition>
</template>

<script>
import AccountIcon from 'vue-material-design-icons/Account.vue';
import CityVariantIcon from 'vue-material-design-icons/CityVariant.vue';
import HomeCityIcon from 'vue-material-design-icons/HomeCity.vue';
import EmailIcon from 'vue-material-design-icons/Email.vue';


export default {
  name: 'Modal',
  components: {
    AccountIcon,
    CityVariantIcon,
    HomeCityIcon,
    EmailIcon,
  },
  props: ['modalActive', 'modalType', 'usuarioAlterar'],
  setup(props, {emit}) {
    const close = () => {
      emit('close');
    }

    return { close }
  },
  data() {
    return {
      usuario: {
        id: '',
        name: '',
        city: '',
        address: '',
        email: ''
      },
      usuarioParaAlterar: this.usuarioAlterar
    }
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      document.querySelector('form').reset();
      this.close()
    },
    changeModalConfig(modalType) {
      this.usuarioParaAlterar = this.usuarioAlterar
      console.log(this.usuarioParaAlterar);
      if(this.modalType == 'inserir') this.$emit('modalFunc', this.modalType, this.usuario)
      if(this.modalType == 'alterar') this.$emit('modalFunc', this.modalType, this.usuarioParaAlterar)
    }
  },
}
</script>

<style scoped>
  .modal-wrapper {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #user-form{
    max-width: 450px;
    width: 100%;
    border: 1px solid #ccc;
    padding: 20px;
    padding-bottom: 60px;
    border-radius: 8px;
    background: #f5f5f5;
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
    margin-top: 16px;
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
    color: #aaaaaa;
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
    padding: 8px 15px;
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