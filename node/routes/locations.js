import express from 'express';
import { createLocation, getLocations, getLocationById, deleteLocation, updateLocation } from '../controllers/locations.js';

const router = express.Router();

router.get('/', getLocations );

router.post('/', createLocation );

router.get('/:id', getLocationById );

router.delete('/:id', deleteLocation );

router.patch('/:id', updateLocation );

export default router;
