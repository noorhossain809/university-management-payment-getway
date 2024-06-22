/* eslint-disable prettier/prettier */
import express from 'express';
import { PaymentRoute } from '../modules/payment/payment.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/payment',
    routes: PaymentRoute
  }
];

moduleRoutes.forEach((route) => {
  router.use(route.path, route.routes);
});

export default router;
