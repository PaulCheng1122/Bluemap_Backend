import { Router } from 'express';
import { getMapPoints } from '../controllers/mapController';
// import { verifyToken } from '../middleware/authMiddleware';

const router = Router();

/**
 * @route GET /api/map/points
 * @description Get all points of interest for the interactive map.
 * @access TEMP PUBLIC (debug only) — remember to re-enable verifyToken after fixing 500.
 */
router.get('/points', getMapPoints);

export { router as mapRoutes };
