# 🚖 Proyecto de Backend - Sistema de Taxi (Node.js + PostgreSQL + Sequelize)

Este proyecto implementa un sistema de gestión de taxis utilizando **Node.js**, **PostgreSQL** y el ORM **Sequelize**. Incluye la definición de modelos, migraciones, relaciones entre tablas y ejecución de comandos necesarios para ponerlo en funcionamiento localmente.

---

## ⚙️ Tecnologías utilizadas

- **Node.js v20.17.0**
- **PostgreSQL 17.5-3**
- **Sequelize ORM**
- **Sequelize CLI**
- **pg (PostgreSQL driver para Node.js)**
- **dotenv** (para manejo de variables de entorno)

---

## 📁 Estructura del proyecto

/BACKEND-DISPATCH
│
├── models/ # Definición de modelos Sequelize
├── migrations/ # Migraciones para la creación de tablas
├── config/ # Configuración de Sequelize
├── .env # Variables de entorno (local)
├── README.md # Este archivo
└── ...

## 📦 Instalación del entorno local

### 1. Instalar Node.js

- Descargar Node.js versión `20.17.0` desde [https://nodejs.org](https://nodejs.org)

### 2. Instalar PostgreSQL

- Descargar e instalar PostgreSQL desde [https://www.postgresql.org/download/](https://www.postgresql.org/download/)

## 🔧 Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd <nombre-del-proyecto>

2. Instalar dependencias
npm install

3. Configurar la base de datos
Crear una base de datos manualmente (usando pgAdmin o consola psql):

CREATE DATABASE taxidispatch;
Crear el archivo .env
En la raíz del proyecto:

DB_USERNAME=postgres
DB_PASSWORD=tu_contraseña
DB_NAME=taxidispatch
DB_HOST=localhost
DB_PORT=5432
Configurar config/config.js para Sequelize:
javascript
Copiar
Editar
require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    port: process.env.DB_PORT
  }
};
🛠️ Comandos útiles
Inicializar Sequelize (solo una vez):
bash
Copiar
Editar
npx sequelize-cli init
Ejecutar todas las migraciones:
bash
Copiar
Editar
npx sequelize-cli db:migrate
Crear un modelo con su migración:
bash
Copiar
Editar
npx sequelize-cli model:generate --name NombreModelo --attributes campo:tipo,...
Ejemplo:

bash
Copiar
Editar
npx sequelize-cli model:generate --name Cliente --attributes nombre:string,apellido:string
Revertir la última migración:
bash
Copiar
Editar
npx sequelize-cli db:migrate:undo
✅ Modelos implementados
Persona

Conductor (1:1 con Persona)

Usuario (1:1 con Persona)

Cliente

Vehiculo

Conduce (N:M entre Conductor y Vehiculo)

Atencion (FK: Conduce, Cliente, Usuario)

🧪 Recomendaciones
Usa pgAdmin para visualizar fácilmente las tablas y datos.

Si cambias un modelo, recuerda generar y aplicar una nueva migración.

Mantén control de versiones con Git para evitar conflictos.

📌 Créditos
Proyecto desarrollado por Eddy Mamani Condori y equipo.
```
