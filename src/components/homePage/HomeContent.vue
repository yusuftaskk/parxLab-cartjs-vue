<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col">
        Hoşgeldiniz
        <PieChart />

        <AreaChart />
      </div>
    </div>
  </div>
</template>

<script>
import chart from "@/components/homePage/chart.vue";
import AreaChart from "@/components/charts/AreaChart.vue";
import PieChart from "@/components/charts/PieChart.vue";

export default {
  components: {
    chart,
    AreaChart,
    PieChart,
  },
};
</script>

