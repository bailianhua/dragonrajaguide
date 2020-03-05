<template>
  <div class="beginnerguide">
    <v-toolbar color="cyan" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>Diamond Guide</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <diamond :content="$t('message.diamond')"></diamond>
  </div>
</template>

<script>
import Diamond from "@/components/Diamond.vue";
export default {
  name: "Beginner",
  components: { Diamond },
  data() {
    return {};
  },
  props: {
    content: { type: Array }
  }
};
</script>
