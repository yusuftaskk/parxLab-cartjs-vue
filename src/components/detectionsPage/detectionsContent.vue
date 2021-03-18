<template>
  <div>
    <div class="container">
      <div class="row">
        <AreaChart style="margin-top: 50px; margin-left:30px" />
      </div>
      <div class="div">
        <messageList  style="width:1400px; margin-top: 50px;" />
      </div>
    </div>
  </div>
</template>7
<script>
import AreaChart from "@/components/charts/AreaChart.vue";
import messageList from "@/components/homePage/messageList.vue";

export default {
  components: {
    AreaChart,
    messageList,
  },
};
</script>