// ────────────────────────────────────────────────────────────────────────────────
// MODULES

import HTTPStatus from 'http-status';
import _ from 'lodash';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { Router } from 'express';
import passport from 'passport';
import db from '../../database/models';
const jwt = require('jsonwebtoken');
require('dotenv').config()

import {
    validateUserSignupBody,
    checkEmail
} from '../../middlewares'; 

const router = new Router({ mergeParams: true });

router
.route('/signup')
.post(
    validateUserSignupBody,
    checkEmail,
    createNewUser
)

async function createNewUser(req, res, next) {
    try {
        const user = await db.User.create(req.body);
        const token = await jwt.sign({id: user.id, email: user.email}, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '24h'})
        user.jwtToken = token;
        await user.save();
        return res.status(200).json({ user: user, token: token});
    } catch (err) {

    } 
}
