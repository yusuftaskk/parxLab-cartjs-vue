<template>
  <div>
    <d3-network :net-nodes="nodes" :net-links="links" :options="options" />

    <div class="div">
      <messageList style="width: 1000px; margin-top: 50px; margin-left: 20%" />
    </div>
  </div>
</template>4
<script>
import messageList from "@/components/homePage/messageList.vue";
import D3Network from "vue-d3-network";
export default {
  components: {
    D3Network,
    messageList,
  },
  data() {
    return {
      nodes: [
        { id: 1, name: "akedaş",_color:"blue" },
        { id: 2, name: "saldırı",_color:"red" },
        { id: 3,  },
        { id: 4 },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 },
      ],
      links: [
        { sid: 1, tid: 2, _color: "black" },
        { sid: 2, tid: 8, _color: "black" },
        { sid: 3, tid: 4, _color: "black" },
        { sid: 4, tid: 5, _color: "black" },
        { sid: 5, tid: 6, _color: "black" },
        { sid: 7, tid: 8, _color: "black" },
        { sid: 5, tid: 8, _color: "black" },
        { sid: 3, tid: 8, _color: "black" },
        { sid: 7, tid: 9, _color: "black" },
      ],
      options: {
        force: 3000,
        nodeSize: 20,
        nodeLabels: true,
        linkWidth: 5,
      },
    };
  },
};
</script>