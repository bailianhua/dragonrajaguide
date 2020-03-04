<template>
  <div class="beginnerguide">
    <v-toolbar color="cyan" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title>Beginner Guide</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <beginner-timeline :content="$t('message.beginner')"></beginner-timeline>
  </div>
</template>

<script>
import BeginnerTimeline from "@/components/BeginnerTimeline.vue";
export default {
  name: "Beginner",
  components: { BeginnerTimeline },
  data() {
    return {};
  }
};
</script>
