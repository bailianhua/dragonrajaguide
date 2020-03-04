<template>
  <div class="gossip">
    <v-toolbar color="grey lighten-2">
      <v-spacer></v-spacer>
      <v-toolbar-title> [King of Gossip] [Gossip Society]</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
      <v-card-title>
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table :headers="headers" :items="questions" :search="search">
        <template v-slot:item.question="{ item }">
          <v-list-item-content>
            <v-list-item-title v-text="item.question"></v-list-item-title>
            <v-list-item-subtitle v-text="item.answer"></v-list-item-subtitle>
          </v-list-item-content>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import questions from "@/contents/gossip.json";
export default {
  data() {
    return {
      search: "",
      questions: questions,
      headers: [
        {
          text: this.$t("message.question"),
          align: "start",
          sortable: false,
          value: "question"
        }
      ]
    };
  }
};
</script>
