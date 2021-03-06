import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import i18n from "./i18n";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount("#app");
