import { Router } from 'express';
import * as productController from '../controllers/productController';

const router = Router();

router.post('/', productController.default);
router.get('/', productController.getAllProducts);

export default router;