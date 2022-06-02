<template>
  <div>
    <!-- <h1>Usuario</h1> -->
    <Modal class="modal" @close="toggleModal" @modalFunc="modalFunc" :modalActive="modalActive" :modalType="modalType" :usuarioAlterar="usuarioAlterar"/>

    <div class="table-content">
      <div class="table-header-header">
        <h2 class="table-tile">Usuários</h2>
        <button class="table-newitem-btn" @click="toggleModal(), changeModalType('inserir')" type="button">Novo</button>
          <el-input class="table-search-input" v-model="this.search" @keydown="searchItem" placeholder="Digite para pesquisar" />
      </div>
      
      <el-table :data="filterTableData">
        <el-table-column prop="id" label="ID" width="80"/>
        <el-table-column prop="name" label="Nome" width="150"/>
        <el-table-column prop="city" label="Cidade" width="120"/>
        <el-table-column prop="address" label="Endereço" width="180"/>
        <el-table-column prop="email" label="Email" width="180"/>
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

import usuarioAccess from '@/services/usuarioAccess.js'
import Modal from './Modal.vue'
import { computed, ref } from 'vue'



export default {
  name: 'Usuario',
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
      usuarios: [],
      usuarioAlterar: {},
    }
  },

  methods: {
    changeModalType(type, obj) {
      if(type == 'inserir') this.modalType = 'inserir'
      if(type == 'alterar') {
        this.usuarioAlterar = obj
        console.log(obj);
        this.modalType = 'alterar'
        this.toggleModal()
      }
    },
    modalFunc(task, usuario) {
      console.log(usuario);
      console.log(task);
      if(task == 'inserir') this.inserir(usuario);
      if(task == 'alterar') this.alterar(usuario);
      // this.modalType = 'inserir'
      // this.usuarioAlterar = {}
    },
    handleDelete(obj) {
      this.deletar(obj.id)
    },
    searchItem() {
    this.filterTableData = computed(() =>
      this.usuarios.filter(
        (data) =>
          !this.search ||
          data.name.toLowerCase().includes(this.search.toLowerCase())
        )
      )
    },

    async buscarTodos() {
      await usuarioAccess.buscarTodos().then(res => {
        this.usuarios = res.data.result
      })
    },
    async inserir(usuario) {
      await usuarioAccess.inserir(usuario).then(res => {
        const insertData = res.data
        this.reloadData()
        console.log(insertData);
      })
    },
    async alterar(usuario) {
      await usuarioAccess.alterar(usuario.id, usuario).then(res => {
        // this.usuarioAlterar = res.data
        this.reloadData()
        console.log(res.data);
      })
    },
    async deletar(id) {
      await usuarioAccess.deletar(id).then(res => {
        this.reloadData()
        console.log(res.data);
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