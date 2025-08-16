// routes/persona.routes.js
import { Router } from "express";
import {
  createPersona,
  getPersonas,
  getPersonaById,
  updatePersona,
  deletePersona,
} from "../controllers/persona.controller.js";

const router = Router();

router.post("/", createPersona);
router.get("/", getPersonas);
router.get("/:id", getPersonaById);
router.put("/:id", updatePersona);
router.delete("/:id", deletePersona);

export default router;
