<template>
  <div id="app">
    <h1>BubbleChart Retrieved from Firebase</h1>
    <BubbleChart></BubbleChart>
    <bar-chart></bar-chart>
    <HorizontalBarChart></HorizontalBarChart>
    <BarChartGrouped></BarChartGrouped>
    <LineChart></LineChart>
    
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import HorizontalBarChart from './components/HorizontalBarChart.vue'
import BarChartGrouped from './components/BarChartGrouped.vue'
import LineChart from './components/LineChart.vue'
import BubbleChart from './components/BubbleChart.vue'

export default {
  name: 'app',
  components: {
    BarChart,
    HorizontalBarChart,
    BarChartGrouped,
    LineChart,
    BubbleChart

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>