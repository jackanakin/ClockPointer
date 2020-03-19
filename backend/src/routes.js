import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import validateUserStore from './app/validators/UserStore';
import validateUserUpdate from './app/validators/UserUpdate';
import validateSessionStore from './app/validators/SessionStore';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

/**
 * Public routes only
 */
routes.post('/users', validateUserStore, UserController.store);
routes.post(
    '/sessions',
    validateSessionStore,
    SessionController.store
);
/**
 * Authentication middleware
 */
routes.use(authMiddleware);

/**
 * From now on, only authenticated users routes
 */

export default routes;