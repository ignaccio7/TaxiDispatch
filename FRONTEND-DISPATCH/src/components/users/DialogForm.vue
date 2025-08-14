<template>
  <div>
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular ml-0" prepend-icon="mdi-account" text="Registrar Usuario"
          variant="tonal" size="x-large" rounded v-bind="activatorProps"></v-btn>
      </template>

      <v-card>
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h6 text-medium-emphasis">Registro de Usuarios</div>
          <v-btn icon="mdi-close" variant="text" @click="dialog = false" />
        </v-card-title>

        <v-card-text>
          <v-stepper v-model="step" flat>
            <v-stepper-header>
              <v-stepper-item :value="1" title="Datos personales" />
              <v-divider />
              <v-stepper-item :value="2" title="Datos domiciliarios" />
              <v-divider />
              <v-stepper-item :value="3" title="Datos de personal" />
            </v-stepper-header>

            <v-stepper-window class="pa-0 mx-0">
              <v-stepper-window-item :value="1">
                <v-form class="pa-0">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.cedula" type="text" label="Cédula" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.paterno" type="text"  label="Apellido Paterno" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.materno" type="text"  label="Apellido Materno" />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.nombre" type="text"  label="Nombres" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="persona.fecha_nac" type="date"  label="Fecha de Nacimiento" required />
                    </v-col>
                  </v-row>
                </v-form>
              </v-stepper-window-item>

              <v-stepper-window-item :value="2">
                <v-form class="pa-0">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="domicilio.zona" label="Zona" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="domicilio.av_calle" label="Avenida/Calle" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="domicilio.nro_puerta" label="N° Puerta" required />
                    </v-col>
                  </v-row>
                </v-form>
              </v-stepper-window-item>
              <v-stepper-window-item :value="3">
                <v-form class="pa-0">
                  <v-row dense>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="usuario.correo" type="email" label="Correo" required />
                    </v-col>
                    <v-col cols="12" sm="6">
                      <v-text-field v-model="usuario.contrasenia" type="password" label="Clave" required />
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
              <v-btn :color="step === 3 ? 'success' : 'primary'" @click="handleClick">{{ step < 3 ? 'Siguiente'
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

const domicilio = ref({
  zona: '',
  av_calle: '',
  nro_puerta: ''
})

const usuario = ref({
  correo: '',
  clave: ''
})

const handleClick = () => {
  if (step.value === 3) {
    guardar()
    return
  }
  step.value += 1
}

const guardar = () => {
  console.log('Persona:', persona.value)
  console.log('Domicilio:', domicilio.value)
  console.log('usuario:', usuario.value)
  dialog.value = false
  alert('Datos guardados correctamente.')
}
</script>
