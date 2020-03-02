import Vue from "vue";
import en from "./en.json";
import th from "./th.json";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);
export const defaultLocale = "en";
export const languages = {
  en: en,
  th: th
};

const messages = Object.assign(languages);

const i18n = new VueI18n({
  locale: defaultLocale,
  fallbackLocale: "en",
  messages
});

export default i18n;
