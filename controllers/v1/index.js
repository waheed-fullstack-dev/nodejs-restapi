import express from 'express';
import auth from './auth';

// ────────────────────────────────────────────────────────────────────────────────
// MIDDLEWARE
const router = express.Router({ mergeParams: true });

// ────────────────────────────────────────────────────────────────────────────────
// AUTH ENDPOINTS

router.use('/auth', auth);

// ────────────────────────────────────────────────────────────────────────────────
// USER ENDPOINTS

export default router;