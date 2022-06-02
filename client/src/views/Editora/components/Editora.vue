<template>
  <div>
    <Modal class="modal" @close="toggleModal" @modalFunc="modalFunc" :modalActive="modalActive" :modalType="modalType" :editoraAlterar="editoraAlterar"/>

    <div class="table-content">
      <div class="table-header-header">
        <h2 class="table-tile">Editoras</h2>
        <button class="table-newitem-btn" @click="toggleModal(), changeModalType('inserir')" type="button">Novo</button>
          <el-input class="table-search-input" v-model="this.search" @keydown="searchItem" placeholder="Digite para pesquisar" />
      </div>
      
      <el-table :data="filterTableData" style="width: 600px;">
        <el-table-column prop="id" label="ID" width="80"/>
        <el-table-column prop="name" label="Nome" width="150"/>
        <el-table-column prop="city" label="Cidade" width="120"/>
        <el-table-column width="180" align="center">
        <template #header>
          Ações
        </template>
        <template #default="scope">
          <el-button @click="changeModalType('alterar', scope.row)">Editar</el-button
            >
            <el-button
              type="danger"
              @click="handleDelete(scope.row)"
              >Deletar
            </el-button>
        </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>

import editoraAccess from '@/services/editoraAccess.js'
import Modal from './Modal.vue'
import { computed, ref } from 'vue'



export default {
  name: 'Editora',
  components: {
    Modal
  },
  setup() {
    const modalActive = ref(false)
    const toggleModal = () => {
      modalActive.value = !modalActive.value
    }

    return { modalActive, toggleModal }
  },
  data() {
    return {
      modalType: '',
      filterTableData: [],
      search: '',
      editoras: [],
      editoraAlterar: {},
    }
  },

  methods: {
    changeModalType(type, obj) {
      if(type == 'inserir') this.modalType = 'inserir'
      if(type == 'alterar') {
        this.editoraAlterar = obj
        this.modalType = 'alterar'
        this.toggleModal()
      }
    },
    modalFunc(task, editora) {
      console.log(editora);
      console.log(task);
      if(task == 'inserir') this.inserir(editora);
      if(task == 'alterar') this.alterar(editora);
    },
    handleDelete(obj) {
      this.deletar(obj.id)
    },
    searchItem() {
    this.filterTableData = computed(() =>
      this.editoras.filter(
        (data) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase())
        )
      )
    },

    async buscarTodos() {
      await editoraAccess.buscarTodos().then(res => {
        this.editoras = res.data.result
      })
    },
    async inserir(editora) {
      await editoraAccess.inserir(editora).then(res => {
        this.reloadData()
      })
    },
    async alterar(editora) {
      await editoraAccess.alterar(editora.id, editora).then(res => {
        this.reloadData()
      })
    },
    async deletar(id) {
      await editoraAccess.deletar(id).then(res => {
        this.reloadData()
      })
    },
    reloadData() {
      setTimeout(() => {
        this.buscarTodos()
      }, 1000);
    }
  },
  mounted() {
    this.buscarTodos()
    this.searchItem()
  }
}
</script>

<style scoped>
  .modal {
    z-index: 100;
  }

  .table-content {
    padding: 10px;
    background: #fff;
    margin: 50px 0;
    border: 2px solid #49C9A8;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
  }

  .table-title {
    text-transform: uppercase;
    position: relative;
  }

  .table-newitem-btn {
    padding: 10px 15px;
    margin: 0 40px 0;
    border-radius: 10px;
    border: none;
    background: #49C9A8;
    color: #fff;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    position: relative;
  }

  .table-newitem-btn::before {
    content: "";
    position: absolute;
    top: 0;
    left: -20px;
    background: #909399;
    width: 2px;
    height: 100%;
  }

  .table-search-input{
    position: absolute;
    right: 0;
    width: 300px;
    height: 40px;
    margin: 0 20px;
    border-radius: 10px;
  }

  .table-header-header{
    padding: 20px 30px;
    display: flex;
    align-items: center;
  }
</style>