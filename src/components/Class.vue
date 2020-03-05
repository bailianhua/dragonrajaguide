<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="job.image"></v-img>

    <v-card-title>{{ job.title }}</v-card-title>

    <v-card-text v-text="job.description"> </v-card-text>

    <v-divider class="mx-4"></v-divider>

    <v-card-title>
      CORE
      <v-subheader>for beginner</v-subheader>
    </v-card-title>

    <v-card-text>
      <v-chip-group active-class="deep-purple accent-4 white--text" column>
        <v-chip
          v-for="(item, index) in job.core"
          :key="index"
          :color="item.color"
          dark
          >{{ item.core }} : {{ item.amount }}</v-chip
        >
      </v-chip-group>
    </v-card-text>
    <v-card-title>
      Partner
      <v-subheader>all of these are 6*</v-subheader>
    </v-card-title>
    <v-card-text>
      <v-list dense>
        <v-list-item-group color="primary">
          <v-list-item v-for="(item, index) in job.partner" :key="index">
            <v-list-item-icon></v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script>
export default {
  name: "Classguide",
  computed: {
    job() {
      return this.content;
    }
  },
  props: {
    content: { type: Object }
  }
};
</script>
