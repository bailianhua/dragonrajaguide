<template>
  <div class="classguide">
    <v-toolbar color="cyan" dark>
      <v-spacer></v-spacer>
      <v-icon>mdi-sword</v-icon>
      <v-toolbar-title>Class Guide</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-row>
      <class
        v-for="(item, index) in classguides"
        :key="index"
        :content="item"
      ></class>
    </v-row>
  </div>
</template>

<script>
import Class from "@/components/Class.vue";
export default {
  name: "Classguide",
  components: { Class },
  data() {
    return {
      classguides: this.$i18n.t("message.classguides")
    };
  }
};
</script>
