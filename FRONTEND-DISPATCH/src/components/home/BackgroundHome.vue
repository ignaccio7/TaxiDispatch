<template>
  <div ref="gridElement" class="grid-background"></div>
</template>

<script setup>
import { useTheme } from 'vuetify'
import { watch, onMounted, ref } from 'vue'

const theme = useTheme()
const gridElement = ref(null)

function updateGridLineColor(themeName) {
  const lineColor = themeName === 'dark' ? '#282828ff' : '#e0e0e0'

  if (gridElement.value) {
    gridElement.value.style.setProperty('--grid-line-color', lineColor)
  }
}

onMounted(() => {
  updateGridLineColor(theme.global.name.value)
})

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
  background-image:
    linear-gradient(to right, var(--grid-line-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--grid-line-color) 1px, transparent 1px) !important;
  background-size: 6rem 4rem !important;
}
</style>
