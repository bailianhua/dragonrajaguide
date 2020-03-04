<template>
  <v-timeline :dense="$vuetify.breakpoint.smAndDown">
    <v-timeline-item
      v-for="(content, index) in contents"
      :key="index"
      :color="content.color"
      :icon="content.icon"
      fill-dot
    >
      <v-card>
        <v-card-title class="headline">{{ content.title }}</v-card-title>
        <v-card-subtitle>{{ content.subtitle }}</v-card-subtitle>
        <v-card-text class="white text--primary">
          <p>{{ content.content }}</p>
          <v-btn
            :color="content.color"
            class="mx-0"
            outlined
            v-if="content.hasLink"
            :to="content.link"
            >{{ content.buttonText }}</v-btn
          >
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
</template>
<script>
export default {
  name: "BeginnerTimeline",
  computed: {
    contents() {
      return this.content;
    }
  },
  props: {
    content: { type: Array }
  }
};
</script>
