<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal-wrapper">
      <form v-show="modalActive" id="user-form" @submit="enviarFormulario($event)">
      <!-- Modal content -->
        <h2>Cadastrar Livro</h2>
        <div class="input-container">
          <label for="name-input">Nome do Livro:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="name" id="name-input" v-model="livro.name">
            <input v-if="modalType == 'alterar'" type="text" name="name" id="name-input" v-model="livroAlterar.name">
            <AccountIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="author-input">Autor do Livro:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="author" id="author-input" v-model="livro.author">
            <input v-if="modalType == 'alterar'" type="text" name="author" id="author-input" v-model="livroAlterar.author">
            <CityVariantIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="editora-input">Editora do Livro:</label>
          <div class="input-box">
            <el-select v-if="modalType == 'inserir'" class="el-select" name="editora" id="editora-input" v-model="livro.editora" placeholder="...">
              <el-option
                v-for="item in editoras"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
            <el-select v-if="modalType == 'alterar'" class="el-select" name="editora" id="editora-input" v-model="livroAlterar.editora" placeholder="Editora">
              <el-option
                v-for="item in editoras"
                :key="item.id"
                :label="item.name"
                :value="item.name"
              />
            </el-select>
            <HomeCityIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="lancamento-input">Data de lançamento do Livro:</label>
          <div class="input-box date">
            <input v-if="modalType == 'inserir'" type="date" placeholder="dd-mm-yyyy" name="lancamento" id="lancamento-input" v-model="livro.lancamento">
            <input v-if="modalType == 'alterar'" type="date" placeholder="dd-mm-yyyy" name="lancamento" id="lancamento-input" v-model="livroAlterar.lancamento">
            <EmailIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="quantidade-input">Quantidade de Livros:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="quantidade" id="quantidade-input" v-model="livro.quantidade">
            <input v-if="modalType == 'alterar'" type="text" name="quantidade" id="quantidade-input" v-model="livroAlterar.quantidade">
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
import { ref } from 'vue'

export default {
  name: 'Modal',
  components: {
    AccountIcon,
    CityVariantIcon,
    HomeCityIcon,
    EmailIcon,
  },
  props: ['modalActive', 'modalType', 'editoras', 'livroAlterar'],
  setup(props, {emit}) {
    const close = () => {
      emit('close');
    }
    // const selectedBook = ref('')

    return { close }
  },
  data() {
    return {
      livro: {
        id: '',
        name: '',
        author: '',
        editora: '',
        lancamento: '',
        quantidade: '',
      },
      livroParaAlterar: this.livroAlterar
    }
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      this.close();
    },
    changeModalConfig(modalType) {
      this.livroParaAlterar = this.livroAlterar
      console.log(this.livroParaAlterar);
      if(this.modalType == 'inserir') this.$emit('modalFunc', this.modalType, this.livro)
      if(this.modalType == 'alterar') this.$emit('modalFunc', this.modalType, this.livroParaAlterar)
      this.livro = {}
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
    position: relative;
  }

  input {
    padding: 4px 10px;
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    font-size: 14px;
  }

  input[type="date"]::-webkit-calendar-picker-indicator{
    background: #F5F5F5;
    width: 150px;
    cursor: pointer;
  }

  input[type="date"]{
    appearance: none;
    -webkit-appearance: none;
    position: absolute;
    cursor: pointer;
  }

  .input-box.date {
    height: 30px;
  }
  .input-box.date .material-design-icon {
    position: absolute;
    right: 0;
    pointer-events: none;
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