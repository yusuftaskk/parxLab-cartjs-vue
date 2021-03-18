<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <PieChart width="250px" height="400px"  />
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
    <messageList style="margin-top:40px;" />
  </div>
</template>

<script>
import AreaChart from "@/components/charts/AreaChart.vue";
import PieChart from "@/components/charts/PieChart.vue";
import RadarChart from "@/components/charts/RadarChart.vue";
import BarChart from "@/components/charts/BarChart.vue";
import LineChart from "@/components/charts/LineChart.vue";
import messageList from "@/components/homePage/messageList.vue"
export default {
  components: {
    AreaChart,
    PieChart,
    RadarChart,
    BarChart,
    LineChart,
    messageList,
  },
};
</script>

