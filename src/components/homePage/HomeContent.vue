<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <PieChart width="250px" height="400px" />
      </div>
      <div class="col">
        <RadarChart width="400px" height="400px" />
      </div>
      <div class="col">
        <PieChart width="250px" height="400px" />
      </div>
    </div>
    <div class="div">
      <BarChart />
    </div>
    <div class="row">
      <div class="col-sm-8">
        <AreaChart />
      </div>
      <div class="col-sm-4">
        <LineChart />
      </div>
    </div>
    
  </div>
</template>

<script>
import chart from "@/components/homePage/chart.vue";
import AreaChart from "@/components/charts/AreaChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import LineChart from "@/components/charts/LineChart.vue";

export default {
  components: {
    chart,
    AreaChart,
    PieChart,
    RadarChart,
    BarChart,
    LineChart,
  },
};
</script>

