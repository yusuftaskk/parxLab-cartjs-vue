<template>
  <div>
    <navBar />
    <router-view> </router-view>
  </div>
</template>

<script>
import navBar from "@/components/homePage/navBar";
export default {
  name: "App",

  components: {
    navBar,
  },
};
</script>
