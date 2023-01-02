import { Router } from 'express';
import auth from './auth';

// ────────────────────────────────────────────────────────────────────────────────
// MIDDLEWARE
const router = new Router({ mergeParams: true });

// ────────────────────────────────────────────────────────────────────────────────
// AUTH ENDPOINTS

router.use('/auth', auth);

// ────────────────────────────────────────────────────────────────────────────────
// USER ENDPOINTS

router.use('/users/:userId/account', userRequired, injectUser(), users);