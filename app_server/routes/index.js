import express from 'express';
const router = express.Router();

import { homepageController } from '../controllers/home';

/* GET home page. */
router.get('/', homepageController);

module.exports = router;
