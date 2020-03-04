<template>
  <div class="daily-routine">
    <v-toolbar color="grey lighten-2">
      <v-spacer></v-spacer>
      <v-toolbar-title>Daily Activity</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card>
      <v-list>
        <v-list-item
          v-for="(tip, index) in $t('message.tips')"
          :key="index"
          dense
        >
          <v-list-item-content>
            <v-list-item-title>- {{ tip.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <todo-list :tasks="$t('message.dailies')"></todo-list>
  </div>
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: "Home",
  components: { TodoList },
  data() {
    return {};
  }
};
</script>
