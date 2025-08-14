<template>
  <v-container>
    <v-row class="align-center">
      <v-col class="pa-0">
        <DialogForm />
      </v-col>

      <v-col class="pa-0 ma-0 d-flex justify-end align-center">
        <v-text-field placeholder="Algo que buscar..." menu-icon="" class="autocomplete-input"
          prepend-inner-icon="mdi-magnify" rounded variant="solo-filled" clearable v-model="search">
        </v-text-field>
      </v-col>
    </v-row>
    <v-row class="mt-5">
      <v-table striped="even" class="w-100">
      <thead>
        <tr >
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            CI
          </th>
          <th class="text-left">
            NOMBRES
          </th>
          <th class="text-left">
            N° LICENCIA
          </th>
          <th class="text-left">
            ACCIONES
          </th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in filteredStaff" :key="index">
          <td>{{ index+1 }}</td>
          <td>{{ item.ci }}</td>
          <td>{{ item.nombre }}</td>
          <td>{{ item.licencia }}</td>
          <td class="d-flex gap-2">
            <v-btn icon="mdi-pencil"></v-btn>
            <v-btn icon="mdi-trash-can"></v-btn>
          </td>
        </tr>
      </tbody>
    </v-table>
    </v-row>
  </v-container>

</template>
<script setup>
import { ref, computed } from 'vue'
import DialogForm from './DialogForm.vue';
let search=ref("")
const staff = ref([
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },{
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
  {
    ci:'12796720 LP',
    nombre: 'JOSE LUIS CONDORI CHAMBI',
    licencia: '12796720',
  },
])
const filteredStaff = computed(() => {
  if (!search.value) return staff.value
  return staff.value.filter(item =>
    item.nombre.toLowerCase().includes(search.value.toLowerCase()) ||
    item.ci.includes(search.value) ||
    item.licencia.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
