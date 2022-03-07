import express from 'express';
const router = express.Router();
import healthCheck from '../controllers/healthCheck.js';

router.route('/health').get(healthCheck);

export default router;
