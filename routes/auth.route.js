import express from 'express';
import { cargarDeudor, cargarPadron } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/cargarPadron', cargarPadron);
router.post('/cargarDeudor', cargarDeudor);

export default router;