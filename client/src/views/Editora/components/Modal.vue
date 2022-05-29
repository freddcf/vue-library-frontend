<template>
  <transition name="modal-animation">
    <div v-show="modalActive" class="modal-wrapper">
      <form v-show="modalActive" id="user-form" @submit="enviarFormulario($event)">
      <!-- Modal content -->
        <h2>Cadastrar editora</h2>
        <div class="input-container">
          <label for="name-input">Nome da Editora:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="name" id="name-input" v-model="editora.name">
            <input v-if="modalType == 'alterar'" type="text" name="name" id="name-input" v-model="editoraAlterar.name">
            <BookshelfIcon />
          </div>
        </div>
        <div class="input-container">
          <label for="city-input">Cidade da Editora:</label>
          <div class="input-box">
            <input v-if="modalType == 'inserir'" type="text" name="city" id="city-input" v-model="editora.city">
            <input v-if="modalType == 'alterar'" type="text" name="city" id="city-input" v-model="editoraAlterar.city">
            <MapMarkerIcon />
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
import BookshelfIcon from 'vue-material-design-icons/Bookshelf.vue';
import MapMarkerIcon from 'vue-material-design-icons/MapMarker.vue';

export default {
  name: 'Modal',
  components: {
    BookshelfIcon,
    MapMarkerIcon,
},
  props: ['modalActive', 'modalType', 'editoraAlterar'],
  setup(props, {emit}) {
    const close = () => {
      emit('close');
    }

    return { close }
  },
  data() {
    return {
      editora: {
        id: '',
        name: '',
        city: '',
      },
      editoraParaAlterar: this.editoraAlterar
    }
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();
      this.close();
    },
    changeModalConfig(modalType) {
      this.editoraParaAlterar = this.editoraAlterar
      if(this.modalType == 'inserir') this.$emit('modalFunc', this.modalType, this.editora)
      if(this.modalType == 'alterar') this.$emit('modalFunc', this.modalType, this.editoraParaAlterar)
      this.editora = {}
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