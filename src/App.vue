<template>
  <v-app>
    <v-app-bar app dark clipped-left>
      <v-toolbar-items>
        <v-btn text color="white" @click="drawer = !drawer">
          <v-icon>mdi-menu</v-icon>
          {{ $t("message.menu") }}
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-title>Dragon Raja Guide</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn outlined color="white" href="https://discord.gg/k5EMb5J">
        <v-icon>mdi-discord</v-icon>
        <v-text>Join our community</v-text>
      </v-btn>
      <v-btn color="white" class="mx-2">
        <v-img
          @click="englishLanguage()"
          src="https://image.flaticon.com/icons/svg/555/555417.svg"
          aspect-ratio="1"
          class="grey lighten-2"
          contain
        ></v-img>
      </v-btn>
      <v-btn color="white">
        <v-img
          @click="thaiLanguage()"
          src="https://image.flaticon.com/icons/svg/555/555495.svg"
          aspect-ratio="1"
          class="grey lighten-2"
          contain
        ></v-img>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(menu, i) in $t('message.menus')">
          <v-row v-if="menu.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="menu.heading">{{ menu.heading }}</v-subheader>
            </v-col>
          </v-row>
          <v-divider v-else-if="menu.divider" :key="i" dark class="my-4" />
          <v-list-item v-else :key="i" :to="menu.link">
            <v-list-item-action>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>{{ menu.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data() {
    return {
      drawer: false
    };
  },
  methods: {
    englishLanguage() {
      this.$i18n.locale = "en";
    },
    thaiLanguage() {
      this.$i18n.locale = "th";
    }
  }
};
</script>
