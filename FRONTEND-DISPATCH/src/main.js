// Vuetify
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "./assets/main.css";

const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: "light",
    themes: {
      light: {
        dark: false,
        colors: {
          primary: "#1976D2",
          secondary: "#424242",
          error: "#FF5252",
          info: "#2196F3",
          success: "#4CAF50",
          warning: "#FB8C00",
          streetLineColor: "#e0e0e0",
          personColor: "#5b5b5b",
        },
      },
      dark: {
        dark: true,
        colors: {
          primary: "#90CAF9",
          secondary: "#424242",
          error: "#EF5350",
          info: "#29B6F6",
          success: "#66BB6A",
          warning: "#FFA726",
          streetLineColor: "#282828ff",
          personColor: "#ffffff",
        },
      },
    },
  },
});

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vuetify);

app.mount("#app");
