<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular ml-0" prepend-icon="mdi-account" text="Registra un vehículo"
          variant="tonal" v-bind="activatorProps"></v-btn>
      </template>

      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h6 text-medium-emphasis">Registro de Vehículo</div>
          <v-btn icon="mdi-close" variant="text" @click="dialog = false" />
        </v-card-title>

        <v-card-text>
          <v-stepper v-model="step" flat>
            <v-stepper-header>
              <v-stepper-item :value="1" title="Datos personales" />
              <v-divider />
              <v-stepper-item :value="2" title="Datos del vehículo" />
            </v-stepper-header>

            <v-stepper-window class="pa-0 mx-0">
              <v-stepper-window-item :value="1">
                <v-form class="pa-0">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.cedula" label="Cédula" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.paterno" label="Apellido Paterno" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.materno" label="Apellido Materno" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.nombre" label="Nombre" required />
                    </v-col>
                  </v-row>
                </v-form>
              </v-stepper-window-item>

              <v-stepper-window-item :value="2">
                <v-form class="pa-0">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="vehiculo.marca" label="Marca" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="vehiculo.modelo" label="Modelo" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="vehiculo.placa" label="Placa" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="vehiculo.tipo" label="Tipo" required />
                    </v-col>
                    <v-col cols="12">
                      <v-text-field v-model="vehiculo.color" label="Color" required />
                    </v-col>
                  </v-row>
                </v-form>
              </v-stepper-window-item>
            </v-stepper-window>
          </v-stepper>

          <!-- Botones de navegación -->
          <v-row class="align-center my-1" no-gutters>
            <v-col cols="6">
              <v-btn :disabled="step === 1" variant="tonal" @click="step = step - 1">Atrás</v-btn>
            </v-col>
            <v-col cols="6" class="d-flex justify-end">
              <v-btn :color="step === 2 ? 'success' : 'primary'" @click="handleClick">{{ step < 2 ? 'Siguiente'
                : 'Guardar' }}</v-btn>
            </v-col>
          </v-row>

        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script setup>
import { shallowRef, ref } from 'vue'

const dialog = shallowRef(false)
const step = ref(1)

const persona = ref({
  cedula: '',
  paterno: '',
  materno: '',
  nombre: ''
})

const vehiculo = ref({
  marca: '',
  modelo: '',
  placa: '',
  tipo: '',
  color: ''
})

const handleClick = () => {
  if (step.value === 2) {
    guardar()
    return
  }
  step.value += 1
}

const guardar = () => {
  console.log('Persona:', persona.value)
  console.log('Vehículo:', vehiculo.value)
  dialog.value = false
  alert('Datos guardados correctamente.')
}
</script>
