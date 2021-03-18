<template>
  <v-card class="mx-auto" height="60px">
    <v-app-bar color="deep-blue" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title>ParxLab Chart.js Vue</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" height="100vh" fixed temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          class="mt-5"
        >
          <router-link to="/" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon class="my-3 ms-3">
                <v-icon large>mdi-view-dashboard</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="ms-3">
                Genel Görünüm
              </v-list-item-title>
            </v-list-item>
          </router-link>

          <router-link to="detections" style="text-decoration: none">
            <v-list-item>
              <v-list-item-icon class="my-3 ms-3">
                <v-icon large>mdi-shield-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title class="ms-3"> Tespitler </v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="Network" style="text-decoration: none">
          <v-list-item>
            <v-list-item-icon class="my-3 ms-3">
              <v-icon large>mdi-security-network</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ms-3"> NetWork </v-list-item-title>
          </v-list-item>
          </router-link>

          <v-list-item>
            <v-list-item-icon class="my-3 ms-3">
              <v-icon large>mdi-map-check</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ms-3">
              Güvenlik Haritası
            </v-list-item-title>
          </v-list-item>
          <v-list-item class="my-3 ms-3">
            <v-list-item-icon>
              <v-icon large>mdi-help</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="ms-3">Yardım</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>
<script>
import HomeContent from "@/components/homePage/HomeContent";
export default {
  components: {
    HomeContent,
  },
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

