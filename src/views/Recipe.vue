<template>
  <div class="recipe">
    <v-toolbar color="grey lighten-2">
      <v-spacer></v-spacer>
      <v-toolbar-title>Cooking Recipe</v-toolbar-title>
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
      <v-data-table
        :headers="headers"
        :items="recipes"
        :search="search"
        item-key="recipe"
        :expanded.sync="expanded"
        show-expand
        :single-expand="singleExpand"
      >
        <template v-slot:item.meat="{ item }">
          <v-row no-gutters>
            <v-col v-for="meat in item.meat" :key="meat.ingredient">
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="orange--text">{{
                    meat.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{ meat.amount }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.cereal="{ item }">
          <v-row no-gutters>
            <v-col v-for="cereal in item.cereal" :key="cereal.ingredient">
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="purple--text">{{
                    cereal.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    cereal.amount
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.vegetable="{ item }">
          <v-row no-gutters>
            <v-col
              v-for="vegetable in item.vegetable"
              :key="vegetable.ingredient"
            >
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="green--text">{{
                    vegetable.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    vegetable.amount
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.seafood="{ item }">
          <v-row no-gutters>
            <v-col v-for="seafood in item.seafood" :key="seafood.ingredient">
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="blue--text">{{
                    seafood.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    seafood.amount
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.other_ingredient="{ item }">
          <v-row no-gutters>
            <v-col
              v-for="ingredient in item.other_ingredient"
              :key="ingredient.ingredient"
            >
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="indigo--text">{{
                    ingredient.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    ingredient.amount
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.seasoning="{ item }">
          <v-row no-gutters>
            <v-col
              v-for="seasoning in item.seasoning"
              :key="seasoning.ingredient"
            >
              <v-list-item two-line dense>
                <v-list-item-content>
                  <v-list-item-title class="red--text">{{
                    seasoning.ingredient
                  }}</v-list-item-title>
                  <v-list-item-subtitle>{{
                    seasoning.amount
                  }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-col>
          </v-row>
        </template>
        <template v-slot:item.data-table-expand="{ expand, isExpanded }">
          <v-btn color="info" outlined @click="expand(!isExpanded)">{{
            $t("message.instruction")
          }}</v-btn>
        </template>
        <template v-slot:expanded-item="{ item }">
          <td :colspan="headers.length">
            <v-item-group>
              <v-container>
                <v-row>
                  <v-col
                    v-for="(instruction, index) in item.instruction"
                    :key="index"
                  >
                    <v-card height="150" class="mx-auto">
                      <v-system-bar color="pink darken-2" dark></v-system-bar>
                      <v-list-item three-line dense>
                        <v-list-item-avatar>{{ index + 1 }}</v-list-item-avatar>
                        <v-list-item-content>
                          <v-list-item-title>
                            {{ instruction.action }}
                          </v-list-item-title>
                          <v-list-item-subtitle
                            >@ {{ instruction.station }}</v-list-item-subtitle
                          >
                          <v-list-item-subtitle>
                            seasoning :
                            <v-chip
                              x-small
                              v-for="seasoning in instruction.seasoning"
                              :key="seasoning.ingredient"
                              class="ma-2"
                              color="red"
                              text-color="white"
                            >
                              {{ seasoning.amount }}
                              {{ seasoning.ingredient }}
                            </v-chip>
                          </v-list-item-subtitle>
                        </v-list-item-content>
                      </v-list-item>
                    </v-card>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </td>
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>
<script>
import recipes from "@/contents/recipe.json";
export default {
  data() {
    return {
      expanded: [],
      search: "",
      recipes: recipes,
      singleExpand: true,
      headers: [
        {
          text: "Recipe",
          align: "start",
          sortable: false,
          value: "recipe"
        },
        {
          text: "Meat",
          align: "start",
          sortable: false,
          value: "meat"
        },
        {
          text: "Cereal",
          align: "start",
          sortable: false,
          value: "cereal"
        },
        {
          text: "Vegetable",
          align: "start",
          sortable: false,
          value: "vegetable"
        },
        {
          text: "Seafood",
          align: "start",
          sortable: false,
          value: "seafood"
        },
        {
          text: "Other ingredient",
          align: "start",
          sortable: false,
          value: "other_ingredient"
        },
        {
          text: "Seasoning",
          align: "start",
          sortable: false,
          value: "seasoning"
        },
        { text: "", value: "data-table-expand" }
      ]
    };
  }
};
</script>
