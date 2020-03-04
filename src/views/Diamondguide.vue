<template>
  <div class="beginnerguide">
    <v-toolbar color="cyan" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>Diamond Guide</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-container grid-list-xs>
      <diamond :content="$t('message.diamond')"></diamond>
    </v-container>
  </div>
</template>

<script>
import Diamond from "@/components/Diamond.vue";
export default {
  name: "Beginner",
  components: { Diamond },
  data() {
    return {};
  }
};
</script>
