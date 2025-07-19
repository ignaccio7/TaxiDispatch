<script setup>
import BackgroundHome from '@/components/home/BackgroundHome.vue'
import { useBackgroundHome } from '@/composables/home';
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

const theme = useTheme()

const { canvas } = useBackgroundHome({ numberOfPeople: 40, numberOfVehicles: 4 })

const loading = ref(false)

function handleSubmit(e) {
  e.preventDefault()
  loading.value = true
}

watch(loading, (value) => {
  if (!value) return
  setTimeout(() => {
    loading.value = false
  }, 2000)
})

</script>

<template>
  <div class="container-home">
    <v-btn class="toggle-mode" @click="theme.toggle()" text="Toggle Light / Dark"></v-btn>
    <BackgroundHome />
    <canvas ref="canvas" />
    <div class="container-login">
      <v-sheet class="login sombra" color="surface">
        <div class="slider">
          <v-carousel show-arrows="hover" cycle hide-delimiter-background hide-delimiters class="carousel-custom">
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/docks.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/hotel.jpg" cover></v-carousel-item>
            <v-carousel-item src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" cover></v-carousel-item>
          </v-carousel>
        </div>
        <v-container class="form-container d-flex flex-column justify-center align-center">
          <form v-on:submit="handleSubmit" class="d-flex flex-column w-100 ga-2 pa-2">
            <h2 class="text-h4 text-center pa-4">
              Inicia Sesión</h2>
            <div class="">
              <v-text-field class="" label="Usuario" variant="outlined" placeholder="Usuario"></v-text-field>
            </div>
            <div class="">
              <v-text-field class="" label="Contraseña" variant="outlined" placeholder="Contraseña"></v-text-field>
            </div>
            <div class="">
              <v-btn :loading="loading" color="primary" variant="elevated" class="" size="large" block type="submit">
                Ingresar
                <template v-slot:loader>
                  <v-progress-linear indeterminate></v-progress-linear>
                </template>
              </v-btn>
            </div>
          </form>
        </v-container>
      </v-sheet>
    </div>
  </div>
</template>

<style>
.toggle-mode {
  position: absolute;
  top: 1rem;
  right: 2rem;
  z-index: 30;
}

.sombra {
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
}

canvas {
  position: absolute;
  inset: 0;
  z-index: 20;
}

.container-home {
  position: relative;
  height: 100dvh;
  width: 100dvw;
  overflow: hidden;
}

.container-login {
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.login {
  min-width: 800px;
  min-height: 500px;
  display: flex;
  border-radius: .7rem;
  overflow: hidden;
}

.slider {
  flex-grow: 1;
  flex-basis: 300px;
}

.form-container {
  flex-grow: 1;
  flex-basis: 300px;
}
</style>