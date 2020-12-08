import express from 'express';
import { getCities } from '../controllers/cities.js';

const router = express.Router();

router.get('/', getCities);

export default router;