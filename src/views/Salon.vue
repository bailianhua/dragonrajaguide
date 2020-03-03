<template>
  <v-card>
    <v-card-title>
      [Salon of INT/ Wisdom] [The Brain]
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
</template>
<script>
import questions from "@/contents/salonanswer.json";
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
