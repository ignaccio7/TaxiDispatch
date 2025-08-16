import db from "../models/index.js"; // importa todos los modelos
//import {Persona} from "../models/persona.js";
//import { Persona } from "../models/persona.js"; 
//const Persona = db.Persona;
// Crear una persona
const persona = await db.Persona.create({
  ci: 12345678,
  paterno: "Mamani",
  materno: "Condori",
  nombre: "Eddy",
  fecha_nac: "1999-01-01",
  estado: true
});

// Crear una nueva persona
export const createPersona = async (req, res) => {
  try {
    const { ci, paterno, materno, nombre, fecha_nac, estado } = req.body;

    const nuevaPersona = await db.Persona.create({
      ci,
      paterno,
      materno,
      nombre,
      fecha_nac,
      estado
    });

    res.status(201).json(nuevaPersona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ mensaje: "Error al crear la persona", error });
  }
};

// Obtener todas las personas
export const getPersonas = async (req, res) => {
  try {
    const personas = await db.Persona.findAll();
    res.json(personas);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener personas", error });
  }
};

// Obtener una persona por ID
export const getPersonaById = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await db.Persona.findByPk(id);

    if (!persona) {
      return res.status(404).json({ mensaje: "Persona no encontrada" });
    }

    res.json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener la persona", error });
  }
};

// Actualizar persona
export const updatePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const { ci, paterno, materno, nombre, fecha_nac, estado } = req.body;

    const persona = await db.Persona.findByPk(id);
    if (!persona) {
      return res.status(404).json({ mensaje: "Persona no encontrada" });
    }

    await db.persona.update({
      ci,
      paterno,
      materno,
      nombre,
      fecha_nac,
      estado
    });

    res.json(persona);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al actualizar la persona", error });
  }
};

// Eliminar persona
export const deletePersona = async (req, res) => {
  try {
    const { id } = req.params;
    const persona = await db.Persona.findByPk(id);

    if (!persona) {
      return res.status(404).json({ mensaje: "Persona no encontrada" });
    }

    await persona.destroy();
    res.json({ mensaje: "Persona eliminada correctamente" });
  } catch (error) {
    res.status(500).json({ mensaje: "Error al eliminar la persona", error });
  }
};
