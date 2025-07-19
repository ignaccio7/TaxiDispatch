<template>
  <div ref="gridElement" class="grid-background"></div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { watch, onMounted, ref } from 'vue'

const theme = useTheme()
const gridElement = ref(null)

function updateGridLineColor(themeName) {
  const lineColor = themeName === 'dark' ? '#555' : '#e0e0e0'
  if (gridElement.value) {
    gridElement.value.style.backgroundImage = `
      linear-gradient(to right, ${lineColor} 1px, transparent 1px),
      linear-gradient(to bottom, ${lineColor} 1px, transparent 1px)
    `
  }
}

// Esperar a que el DOM esté montado
onMounted(() => {
  updateGridLineColor(theme.global.name.value)
})

// Escuchar cambios del tema
watch(
  () => theme.global.name.value,
  (newTheme) => {
    updateGridLineColor(newTheme)
  }
)
</script>

<style scoped>
.grid-background {
  position: absolute !important;
  inset: 0 !important;
  z-index: 10 !important;
  height: 100% !important;
  width: 100% !important;
  background-color: var(--v-theme-background) !important;
  background-image:
    linear-gradient(to right, #f0f0f0 1px, transparent 1px),
    linear-gradient(to bottom, #f0f0f0 1px, transparent 1px) !important;
  background-size: 6rem 4rem !important;
}
</style>
