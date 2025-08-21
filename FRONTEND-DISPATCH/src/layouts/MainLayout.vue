<template>
  <v-app :theme="theme">
    <!-- boton de cambio del fondo de pantalla -->
    <v-app-bar class="d-flex justify-space-between align-center" app dark>
      <!-- sidebar -->
      <v-icon class="text-h4" @click="openSidebar">{{ iconSidebar }}</v-icon>
      <!-- title -->
      <v-toolbar-title>Sistema de gestion Sapitos del Sur</v-toolbar-title>
      <!-- toggle -->
      <v-btn icon @click="onDarkLight">
        <v-icon class="text-h5">{{ iconTheme }}</v-icon>
      </v-btn>
      <!-- avatar -->
      <v-avatar>
        <v-img alt="John" src="https://cdn.vuetifyjs.com/images/john.jpg"></v-img>
      </v-avatar>
      <!-- drop down -->
      <div class="text-center">
        <v-btn @click="onDropDown">
          <v-icon class="text-h4">{{ iconDropDown }}</v-icon>
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
        <v-list-item to="servicios" router link>
          <v-list-item-title>Servicios</v-list-item-title>
        </v-list-item>
        <v-list-item to="historial" router link>
          <v-list-item-title>Historial</v-list-item-title>
        </v-list-item>
        <v-list-item to="personal" router link>
          <v-list-item-title>Personal</v-list-item-title>
        </v-list-item>
        <v-list-item to="vehiculos" router link>
          <v-list-item-title>Vehiculos</v-list-item-title>
        </v-list-item>
        <v-list-item to="usuarios" router link>
          <v-list-item-title>Usuarios</v-list-item-title>
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
import { ref } from "vue";
let sidebar = ref(true);
let iconSidebar = ref("mdi-menu-open");
let iconDropDown = ref("mdi-menu-down");
let iconTheme = ref('mdi-white-balance-sunny')

const openSidebar = () => {
  if (iconSidebar.value === "mdi-menu-open") {
    iconSidebar.value = "mdi-menu-close";
  } else {
    iconSidebar.value = "mdi-menu-open";
  }
  sidebar.value = !sidebar.value;
};

/* toggle */
const theme = ref("light");

const onDarkLight = () => {
  if (theme.value === "light") {
    theme.value = "dark"
    iconTheme.value = 'mdi-weather-night'
  } else {
    theme.value = "light"
    iconTheme.value = 'mdi-white-balance-sunny'
  }
}

const onDropDown = () => {
  if (iconDropDown.value == "mdi-menu-down") {
    iconDropDown.value = "mdi-menu-up"
  }
  else {
    iconDropDown.value = "mdi-menu-down"
  }
}
</script>

<style scoped></style>
