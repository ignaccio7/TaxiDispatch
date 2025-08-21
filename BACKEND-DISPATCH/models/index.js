import { Sequelize, DataTypes } from 'sequelize'
import dotenv from 'dotenv'

// Cargar variables de entorno
dotenv.config()

// Imports de modelos
import PersonaModel from './persona.js'
import DireccionModel from './direccion.js'
import ConductorModel from './conductor.js'
import VehiculoModel from './vehiculo.js'
import ConduceModel from './conduce.js'
import UsuarioModel from './usuario.js'
import ClienteModel from './cliente.js'
import AtencionModel from './atencion.js'

// Crear conexión con variables de entorno
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: process.env.DB_DIALECT,
    logging: false
  }
)

// Inicializar todos los modelos
const models = {
  Persona: PersonaModel(sequelize, DataTypes),
  Direccion: DireccionModel(sequelize, DataTypes),
  Conductor: ConductorModel(sequelize, DataTypes),
  Vehiculo: VehiculoModel(sequelize, DataTypes),
  Conduce: ConduceModel(sequelize, DataTypes),
  Usuario: UsuarioModel(sequelize, DataTypes),
  Cliente: ClienteModel(sequelize, DataTypes),
  Atencion: AtencionModel(sequelize, DataTypes)
}

// Configurar asociaciones
Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models)
  }
})

// Exportar conexión y modelos
export default { sequelize, ...models }
