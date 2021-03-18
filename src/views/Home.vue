<template>
  <div>
    <navBar />
    <HomeContent />
  </div>
</template>s

<script>
import navBar from "@/components/homePage/navBar.vue";
import HomeContent from "@/components/homePage/HomeContent.vue";

export default {
  name: "Home",
  components: { navBar, HomeContent },
};
</script>
