import db from '../models/index.js' // importa todos los modelos

const STATUS_CODES = {
  ACCEPTED: 202,
  BAD_REQUEST: 400,
  CREATED: 201,
  NOT_FOUND: 404,
  NO_CONTENT: 204,
  OK: 200,
  UNAUTHORIZED: 401,
  INTERNAL_SERVER_ERROR: 500
}

// Crear una nueva persona
export const createPersona = async (req, res) => {
  try {
    const { ci, paterno, materno, nombre, fecha_nac, estado } = req.body

    const nuevaPersona = await db.Persona.create({
      ci,
      paterno,
      materno,
      nombre,
      fecha_nac,
      estado
    })

    res.status(STATUS_CODES.CREATED).json(nuevaPersona)
  } catch (error) {
    console.error(error)
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ mensaje: 'Error al crear la persona', error })
  }
}

// Obtener todas las personas
export const getPersonas = async (req, res) => {
  try {
    const personas = await db.Persona.findAll()
    res.json(personas)
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ mensaje: 'Error al obtener personas', error })
  }
}

// Obtener una persona por ID
export const getPersonaById = async (req, res) => {
  try {
    const { id } = req.params
    const persona = await db.Persona.findByPk(id)

    if (!persona) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ mensaje: 'Persona no encontrada' })
    }

    res.json(persona)
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ mensaje: 'Error al obtener la persona', error })
  }
}

// Actualizar persona
export const updatePersona = async (req, res) => {
  try {
    const { id } = req.params
    const { ci, paterno, materno, nombre, fecha_nac, estado } = req.body

    const persona = await db.Persona.findByPk(id)
    if (!persona) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ mensaje: 'Persona no encontrada' })
    }

    await db.persona.update({
      ci,
      paterno,
      materno,
      nombre,
      fecha_nac,
      estado
    })

    res.json(persona)
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ mensaje: 'Error al actualizar la persona', error })
  }
}

// Eliminar persona
export const deletePersona = async (req, res) => {
  try {
    const { id } = req.params
    const persona = await db.Persona.findByPk(id)

    if (!persona) {
      return res
        .status(STATUS_CODES.NOT_FOUND)
        .json({ mensaje: 'Persona no encontrada' })
    }

    await persona.destroy()
    res.json({ mensaje: 'Persona eliminada correctamente' })
  } catch (error) {
    res
      .status(STATUS_CODES.INTERNAL_SERVER_ERROR)
      .json({ mensaje: 'Error al eliminar la persona', error })
  }
}
