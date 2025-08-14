<script setup>
import DataTable from '@/components/users/DataTable.vue';
</script>

<template>
  <v-container max-width="100%">
    <v-col>
      <v-row class="justify-center">
        <h2>USUARIO</h2>
      </v-row>
      <!-- <v-divider /> -->
      <DataTable />
    </v-col>


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
