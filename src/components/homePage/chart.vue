<template>
  <div>
    <line-chart :styles="myStyles"/>
    <button @click="increase()">Increase height</button>
  </div>
</template>

<script>
import { Bar } from 'vue-chartjs'
export default {
  extends: Bar,
  mounted () {
    this.renderChart(data, options)
  }

}
</script>