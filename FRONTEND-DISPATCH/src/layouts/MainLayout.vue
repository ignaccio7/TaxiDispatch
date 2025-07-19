<template>
  <v-app :theme="theme">
    <!-- boton de cambio del fondo de pantalla -->
    <v-app-bar class="d-flex justify-space-between align-center" app dark>
      <svg-icon
        type="mdi"
        :path="pathSidebar"
        @click="openSidebar"
        style="width: 50px; height: 50px"
      ></svg-icon>

      <v-toolbar-title>Sistema de gestion Sapitos del Sur</v-toolbar-title>
      <!-- toggle -->
      <v-btn icon @click="onDarkLight">
        <svg-icon
          type="mdi"
          :path="theme === 'light' ? mdiWhiteBalanceSunny : mdiBrightness4"
          style="width: 24px; height: 24px"
        ></svg-icon>
      </v-btn>
      <!-- avatar -->
      <v-avatar>
        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
      </v-avatar>
      <!-- drop down -->
      <div class="text-center">
        <v-btn>
          <svg-icon type="mdi" @click="onDropDown" :path="pathDropDown"></svg-icon>
          <v-menu activator="parent">
            <v-list>
              <v-list-item v-for="i in 5" :key="i" link>
                <v-list-item-title>Item {{ i }}</v-list-item-title>
                <template v-slot:append>
                  <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                </template>
                <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                  <v-list>
                    <v-list-item v-for="j in 5" :key="j" link>
                      <v-list-item-title>Item {{ i }} - {{ j }}</v-list-item-title>
                      <template v-slot:append>
                        <v-icon icon="mdi-menu-right" size="x-small"></v-icon>
                      </template>

                      <v-menu :open-on-focus="false" activator="parent" open-on-hover submenu>
                        <v-list>
                          <v-list-item v-for="k in 5" :key="k" link>
                            <v-list-item-title>Item {{ i }} - {{ j }} - {{ k }}</v-list-item-title>
                          </v-list-item>
                        </v-list>
                      </v-menu>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-btn>
      </div>
    </v-app-bar>

    <v-navigation-drawer v-model="sidebar" app variant="tonal">
      <v-list>
        <v-list-item to="main" router link>
          <v-list-item-title>Inicio</v-list-item-title>
        </v-list-item>

        <v-list-item to="history" router link>
          <v-list-item-title>Historial</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <v-container class="content" fluid>
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup>
import SvgIcon from "@jamescoyle/vue-icon";
import {
  mdiMenuOpen,
  mdiMenuClose,
  mdiWhiteBalanceSunny,
  mdiBrightness4,
  mdiMenuDown,
  mdiMenuUp,
} from "@mdi/js";

import { computed, ref } from "vue";
let sidebar = ref(true);
let pathSidebar = ref(mdiMenuOpen);

let dropDownOpen = ref(false);

const openSidebar = () => {
  if (pathSidebar.value === mdiMenuOpen) {
    pathSidebar.value = mdiMenuClose;
  } else {
    pathSidebar.value = mdiMenuOpen;
  }
  sidebar.value = !sidebar.value;
};

/* toggle */
const theme = ref("light");

function onDarkLight() {
  theme.value = theme.value === "light" ? "dark" : "light";
}

const pathDropDown = computed(() =>
  pathDropDown.value ? mdiMenuUp : mdiMenuDown
)
</script>

<style scoped>

</style>
