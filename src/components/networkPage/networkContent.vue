<template>
  <div>
    <LineChart style="width: 1050px; margin-left: 15%" />
    <div class="div">
      <messageList style="width: 1000px; margin-top: 50px; margin-left: 20%" />
    </div>
  </div>
</template>4
<script>
import LineChart from "@/components/charts/LineChart.vue";
import messageList from "@/components/homePage/messageList.vue";

export default {
  components: {
    LineChart,
    messageList
  },
};
</script>