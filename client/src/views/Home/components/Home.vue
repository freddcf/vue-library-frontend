<template>
  <div>
    <h2 class="homeTitle">Gráfico de utilização</h2>
    <div class="pieGraph">
      <canvas id="myChart" width="480" height="400"></canvas>
    </div>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import editoraAccess from '@/services/editoraAccess.js'
import usuarioAccess from '@/services/usuarioAccess.js'
import livrosAccess from '@/services/livrosAccess.js';

export default {
  name: 'Home',
  data() {
    return {
      dataGraph: []
    }
  },
  methods: {
    async buscarDados() {
      await usuarioAccess.buscarTodos().then(res => {
        this.dataGraph.push(res.data.result.length)
      })
      await editoraAccess.buscarTodos().then(res => {
        this.dataGraph.push(res.data.result.length)
      })
      await livrosAccess.buscarTodos().then(res => {
        this.dataGraph.push(res.data.result.length)
      })
    }
  },
  mounted() {
    this.buscarDados().then(() => {

      const ctx = document.getElementById('myChart');
      const data = {
        labels: [
          'Usuários',
          'Editoras',
          'Livros'
        ],
        datasets: [{
          label: 'Dados da Biblioteca',
          data: this.dataGraph,
          backgroundColor: [
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',
            'rgb(255, 205, 86)'
          ],
          hoverOffset: 4
        }]
      };

      const myChart = new Chart(ctx, {
        type: 'pie',
        data: data,
        options: {
          plugins: {
            legend: {
              labels: {
                font: {
                  size: 18
                }
              }
            }
          }
        }
      })

      myChart;
    })
  }
}
</script>

<style scoped>
  .homeTitle {
    margin: 30px;
    text-transform: uppercase;
    text-align: center;
  }

  .pieGraph {
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
  }

</style>