<template>
  <v-responsive class="border rounded" max-height="300">
    <v-app>
      <v-main>
        <v-container>
          <FormComponent />
        </v-container>
      </v-main>
    </v-app>

  </v-responsive>
</template>

<script setup>
import FormComponent from '../components/FormComponent.vue'
</script>
