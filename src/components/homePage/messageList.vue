<template>
  <v-card max-width="1200" class="mx-auto">
    <v-list three-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
          v-text="item.header"
        ></v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"
        ></v-divider>

        <v-list-item v-else :key="item.title">
          <v-list-item-avatar style="margin-right: 15px">
            <v-img :src="item.avatar"></v-img>
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title v-html="item.title"></v-list-item-title>
            <v-list-item-subtitle v-html="item.subtitle"></v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-card>
</template>
<script>
export default {
  data: () => ({
    items: [
      { header: "Birazda Analiz" },
      {
        avatar:
          "https://media.licdn.com/dms/image/C4D0BAQF7iz1RnNmq9Q/company-logo_200_200/0?e=2159024400&v=beta&t=tAiMfqJtYrXe-ma-6ijhTfgI90_qdEnmNZRVapNdmeQ",
        title: "Message 1",
        subtitle:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, odio.",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://media.licdn.com/dms/image/C4D0BAQF7iz1RnNmq9Q/company-logo_200_200/0?e=2159024400&v=beta&t=tAiMfqJtYrXe-ma-6ijhTfgI90_qdEnmNZRVapNdmeQ",
        title: "Message 2",
        subtitle:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, odio.",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://media.licdn.com/dms/image/C4D0BAQF7iz1RnNmq9Q/company-logo_200_200/0?e=2159024400&v=beta&t=tAiMfqJtYrXe-ma-6ijhTfgI90_qdEnmNZRVapNdmeQ",
        title: "Message 3",
        subtitle:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, odio.",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://media.licdn.com/dms/image/C4D0BAQF7iz1RnNmq9Q/company-logo_200_200/0?e=2159024400&v=beta&t=tAiMfqJtYrXe-ma-6ijhTfgI90_qdEnmNZRVapNdmeQ",
        title: "Message 4",
        subtitle:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, odio.",
      },
      { divider: true, inset: true },
      {
        avatar:
          "https://media.licdn.com/dms/image/C4D0BAQF7iz1RnNmq9Q/company-logo_200_200/0?e=2159024400&v=beta&t=tAiMfqJtYrXe-ma-6ijhTfgI90_qdEnmNZRVapNdmeQ",
        title: "Message 5",
        subtitle:
          " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus, odio.",
      },
    ],
  }),
};
</script>