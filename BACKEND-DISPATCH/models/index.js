import { Sequelize, DataTypes } from "sequelize";
import PersonaModel from "./persona.js";
import DireccionModel from "./direccion.js";
import ConductorModel from "./conductor.js";
import VehiculoModel from "./vehiculo.js";
import ConduceModel from "./conduce.js";
import UsuarioModel from "./usuario.js";
import ClienteModel from "./cliente.js";
import AtencionModel from "./atencion.js";

// Configura tu conexión a la base de datos
const sequelize = new Sequelize("bdtaxi_dispatch", "postgres", "123456", {
  host: "localhost",
  dialect: "postgres", // o mysql, sqlite...
  logging: false,       // opcional
});

// Inicializar todos los modelos en un objeto
const models = {
  Persona: PersonaModel(sequelize, DataTypes),
  Direccion: DireccionModel(sequelize, DataTypes),
  Conductor: ConductorModel(sequelize, DataTypes),
  Vehiculo: VehiculoModel(sequelize, DataTypes),
  Conduce: ConduceModel(sequelize, DataTypes),
  Usuario: UsuarioModel(sequelize, DataTypes),
  Cliente: ClienteModel(sequelize, DataTypes),
  Atencion: AtencionModel(sequelize, DataTypes),
};

// Configura asociaciones (si tus modelos tienen la función associate)
Object.values(models).forEach(model => {
  if (typeof model.associate === "function") {
    model.associate(models);
  }
});

// Exporta la conexión y los modelos
export default { sequelize, ...models };