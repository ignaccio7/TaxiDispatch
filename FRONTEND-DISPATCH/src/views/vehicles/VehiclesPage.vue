<script setup>
import DataTable from '@/components/vehicles/DataTable.vue';
import DialogForm from '@/components/vehicles/DialogForm.vue';


</script>

<template>
  <v-container max-width="100%">
    <v-row>
      <h2>Vehículos</h2>
    </v-row>

    <v-row class="align-center">
      <v-col class="pa-0" align="start">
        <DialogForm />
      </v-col>

      <v-col class="pa-0 ma-0 d-flex justify-end align-center">
        <v-autocomplete placeholder="Algo que buscar..." menu-icon="" class="autocomplete-input"
          prepend-inner-icon="mdi-magnify" rounded variant="solo"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"></v-autocomplete>
      </v-col>
    </v-row>

    <v-row class="mt-6">
      <DataTable />
    </v-row>
  </v-container>
</template>

<style>
.autocomplete-input {
  max-width: 300px;
  width: 100%;
  height: auto;
  margin-bottom: 0 !important;
  padding-bottom: 0 !important;
  height: auto !important;
  min-height: auto !important;
}

.v-input__details {
  height: 0 !important;
  display: none;
}
</style>
