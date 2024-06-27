import express from 'express';
const profileRoute = express.Router()
import profileFun from '../controllers/profile.js';

profileRoute.get('/profile',profileFun);

// exports.profileRoute = profileRoute
export default profileRoute;